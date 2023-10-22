import { basename } from 'path'

import generator from '@babel/generator'
import { declare } from '@babel/helper-plugin-utils'
import template from '@babel/template'
import { Visitor } from '@babel/traverse'
import * as t from '@babel/types'
import { simpleHash } from '@tamagui/simple-hash'
import {
  createExtractor,
  getPragmaOptions,
  isSimpleSpread,
  literalToAst,
} from '@tamagui/static'
import type { TamaguiOptions } from '@tamagui/static'

const importNativeView = template(`
const __ReactNativeView = require('react-native').View;
const __ReactNativeText = require('react-native').Text;
`)

const importStyleSheet = template(`
const __ReactNativeStyleSheet = require('react-native').StyleSheet;
`)

const importWithTheme = template(`
const __internalWithTheme = require('@tamagui/core').internalWithTheme;
`)

const extractor = createExtractor()

export default declare(function snackBabelPlugin(
  api,
  options: TamaguiOptions
): {
  name: string
  visitor: Visitor
} {
  api.assertVersion(7)

  return {
    name: 'tamagui',

    visitor: {
      Program: {
        enter(this: any, root) {
          let sourcePath = this.file.opts.filename

          // this filename comes back incorrect in react-native, it adds /ios/ for some reason
          // adding a fix here, but it's a bit tentative...
          if (process.env.SOURCE_ROOT?.endsWith('ios')) {
            sourcePath = sourcePath.replace('/ios', '')
          }

          let hasImportedView = false
          let hasImportedViewWrapper = false
          const sheetStyles = {}
          const sheetIdentifier = root.scope.generateUidIdentifier('sheet')
          const firstComment =
            root.node.body[0]?.leadingComments?.[0]?.value?.trim() ?? ''
          const { shouldPrintDebug, shouldDisable } = getPragmaOptions({
            disableCommentCheck: true,
            source: firstComment,
            path: sourcePath,
          })

          if (shouldDisable) {
            return
          }

          function addSheetStyle(style: any, node: t.JSXOpeningElement) {
            const styleIndex = `${Object.keys(sheetStyles).length}`
            let key = `${styleIndex}`
            if (process.env.NODE_ENV === 'development') {
              const lineNumbers = node.loc
                ? node.loc.start.line +
                  (node.loc.start.line !== node.loc.end.line
                    ? `-${node.loc.end.line}`
                    : '')
                : ''
              key += `:${basename(sourcePath)}:${lineNumbers}`
            }
            sheetStyles[key] = style
            return readStyleExpr(key)
          }

          function readStyleExpr(key: string) {
            return template(`SHEET['KEY']`)({
              SHEET: sheetIdentifier.name,
              KEY: key,
            })['expression'] as t.MemberExpression
          }

          try {
            extractor.parseSync(root, {
              // @ts-expect-error in case they leave it out
              platform: 'native',
              shouldPrintDebug,
              importsWhitelist: ['constants.js', 'colors.js'],
              deoptProps: new Set([
                'focusStyle',
                'hoverStyle',
                'pressStyle',
                'pointerEvents',
              ]),
              extractStyledDefinitions: options.forceExtractStyleDefinitions,
              excludeProps: new Set([
                'className',
                'userSelect',
                'whiteSpace',
                'textOverflow',
                'cursor',
                'contain',
              ]),
              ...options,
              // disable this extraction for now at least, need to figure out merging theme vs non-theme
              // because theme need to stay in render(), whereas non-theme can be extracted
              // for now just turn it off entirely at a small perf loss
              disableExtractInlineMedia: true,
              // disable extracting variables as no native concept of them (only theme values)
              disableExtractVariables: options.experimentalFlattenThemesOnNative
                ? false
                : 'theme',
              sourcePath,

              // disabling flattening for now
              // it's flattening a plain <Paragraph>hello</Paragraph> which breaks things because themes
              // thinking it's not really worth the effort to do much compilation on native
              // for now just disable flatten as it can only run in narrow places on native
              // disableFlattening: 'styled',

              getFlattenedNode({ isTextView }) {
                if (!hasImportedView) {
                  hasImportedView = true
                  root.unshiftContainer('body', importNativeView())
                }
                return isTextView ? '__ReactNativeText' : '__ReactNativeView'
              },

              onExtractTag(props) {
                const { isFlattened } = props

                if (!isFlattened) {
                  // we aren't optimizing at all if not flattened anymore
                  return
                }

                assertValidTag(props.node)
                const stylesExpr = t.arrayExpression([])
                const finalAttrs: (t.JSXAttribute | t.JSXSpreadAttribute)[] = []
                const themeKeysUsed = new Set<string>()

                function getStyleExpression(style: Object | null) {
                  if (!style) return

                  // split theme properties and leave them as props since RN has no concept of theme
                  const { plain, themed } = splitThemeStyles(style)

                  const ident = addSheetStyle(plain, props.node)

                  if (themed && options.experimentalFlattenThemesOnNative) {
                    for (const key in themed) {
                      themeKeysUsed.add(key)
                    }

                    // make a sub-array
                    return t.arrayExpression([ident, addThemedStyleExpression(themed)])
                  } else {
                    // since we only do flattened disabling this path
                    return ident
                    // when we supported extracting non-flattened
                    // addStyleExpression(ident, isFlattened ? simpleHash(JSON.stringify(plain)) : undefined)
                  }
                }

                function addStyleExpression(expr: any) {
                  stylesExpr.elements.push(expr)
                }

                function addThemedStyleExpression(styles: Object) {
                  const themedStylesAst = literalToAst(styles) as t.ObjectExpression
                  themedStylesAst.properties.forEach((_) => {
                    const prop = _ as t.ObjectProperty
                    if (prop.value.type === 'StringLiteral') {
                      prop.value = t.memberExpression(
                        t.identifier('theme'),
                        t.identifier(prop.value.value.slice(1))
                      )
                    }
                  })
                  return themedStylesAst
                }

                for (const attr of props.attrs) {
                  switch (attr.type) {
                    case 'style': {
                      addStyleExpression(getStyleExpression(attr.value))
                      break
                    }
                    case 'ternary': {
                      const { consequent, alternate } = attr.value

                      const consExpr = getStyleExpression(consequent)
                      const altExpr = getStyleExpression(alternate)

                      const styleExpr = t.conditionalExpression(
                        attr.value.test,
                        consExpr || t.nullLiteral(),
                        altExpr || t.nullLiteral()
                      )
                      addStyleExpression(
                        styleExpr
                        // isFlattened ? simpleHash(JSON.stringify({ consequent, alternate })) : undefined
                      )
                      break
                    }
                    case 'attr': {
                      if (t.isJSXSpreadAttribute(attr.value)) {
                        if (isSimpleSpread(attr.value)) {
                          stylesExpr.elements.push(
                            t.memberExpression(attr.value.argument, t.identifier('style'))
                          )
                        }
                      }
                      finalAttrs.push(attr.value)
                      break
                    }
                  }
                }

                props.node.attributes = finalAttrs

                if (props.isFlattened) {
                  if (themeKeysUsed.size) {
                    if (!hasImportedViewWrapper) {
                      root.unshiftContainer('body', importWithTheme())
                      hasImportedViewWrapper = true
                    }

                    const name = props.node.name['name']
                    const WrapperIdentifier = root.scope.generateUidIdentifier(
                      name + 'Wrapper'
                    )

                    root.pushContainer(
                      'body',
                      t.variableDeclaration('const', [
                        t.variableDeclarator(
                          WrapperIdentifier,
                          t.callExpression(t.identifier('__internalWithTheme'), [
                            t.identifier(name),
                            t.arrowFunctionExpression(
                              [t.identifier('theme')],
                              t.blockStatement([t.returnStatement(stylesExpr)])
                            ),
                            t.arrayExpression(
                              [...themeKeysUsed].map((k) => t.stringLiteral(k))
                            ),
                          ])
                        ),
                      ])
                    )

                    // @ts-ignore
                    props.node.name = WrapperIdentifier
                  } else {
                    props.node.attributes.push(
                      t.jsxAttribute(
                        t.jsxIdentifier('style'),
                        t.jsxExpressionContainer(
                          stylesExpr.elements.length === 1
                            ? (stylesExpr.elements[0] as any)
                            : stylesExpr
                        )
                      )
                    )
                  }
                }
              },
            })
          } catch (err) {
            if (err instanceof Error) {
              // metro doesn't show stack so we can
              let message = `${shouldPrintDebug === 'verbose' ? err : err.message}`
              if (message.includes('Unexpected return value from visitor method')) {
                message = 'Unexpected return value from visitor method'
              }
              console.warn('Error in Tamagui parse, skipping', message, err.stack)
              return
            }
          }

          if (!Object.keys(sheetStyles).length) {
            if (shouldPrintDebug) {
              console.info('END no styles')
            }
            return
          }

          const sheetObject = literalToAst(sheetStyles)
          const sheetOuter = template(
            'const SHEET = __ReactNativeStyleSheet.create(null)'
          )({
            SHEET: sheetIdentifier.name,
          }) as any

          // replace the null with our object
          sheetOuter.declarations[0].init.arguments[0] = sheetObject
          root.unshiftContainer('body', sheetOuter)
          // add import
          root.unshiftContainer('body', importStyleSheet())

          if (shouldPrintDebug) {
            console.info('\n -------- output code ------- \n')
            console.info(
              generator(root.parent)
                .code.split('\n')
                .filter((x) => !x.startsWith('//'))
                .join('\n')
            )
          }
        },
      },
    },
  }
})

function assertValidTag(node: t.JSXOpeningElement) {
  if (node.attributes.find((x) => x.type === 'JSXAttribute' && x.name.name === 'style')) {
    // we can just deopt here instead and log warning
    // need to make onExtractTag have a special catch error or similar
    if (process.env.DEBUG?.startsWith('tamagui')) {
      console.warn('⚠️ Cannot pass style attribute to extracted style')
    }
  }
}

function splitThemeStyles(style: Object) {
  const themed: Object = {}
  const plain: Object = {}
  let noTheme = true
  for (const key in style) {
    const val = style[key]
    if (val && val[0] === '$') {
      themed[key] = val
      noTheme = false
    } else {
      plain[key] = val
    }
  }
  return { themed: noTheme ? null : themed, plain }
}
