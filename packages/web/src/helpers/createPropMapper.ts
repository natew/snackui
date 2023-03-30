import { isWeb } from '@tamagui/constants'

import { getConfig } from '../config.js'
import { isDevTools } from '../constants/isDevTools.js'
import { Variable, getVariableValue, isVariable } from '../createVariable.js'
import type {
  DebugProp,
  GenericVariantDefinitions,
  PropMapper,
  SplitStyleState,
  StaticConfigParsed,
  TamaguiInternalConfig,
  VariantSpreadFunction,
} from '../types.js'
import type { LanguageContextType } from '../views/FontLanguage.types.js'
import { expandStyle } from './expandStyle.js'
import { expandStyles } from './expandStyles.js'
import { getFontsForLanguage, getVariantExtras } from './getVariantExtras.js'
import { isObj } from './isObj.js'
import { mergeProps } from './mergeProps.js'

export type ResolveVariableTypes =
  | 'auto'
  | 'value'
  | 'variable'
  | 'both'
  | 'non-color-value'

export const getReturnVariablesAs = (props: any, state: Partial<SplitStyleState>) => {
  return !!props.animation || state.resolveVariablesAs === 'value' ? 'value' : 'auto'
}

export const createPropMapper = (staticConfig: StaticConfigParsed) => {
  const variants = staticConfig.variants || {}

  // temp remove classnames
  const defaultProps = mergeProps(staticConfig.defaultProps || {}, {}, false)[0]

  let conf: TamaguiInternalConfig

  const mapper: PropMapper = (
    key,
    value,
    theme,
    propsIn,
    state,
    languageContext,
    avoidDefaultProps = false,
    debug
  ) => {
    conf ||= getConfig()

    const props = state.fallbackProps || propsIn
    const returnVariablesAs = getReturnVariablesAs(props, state)

    // handled here because we need to resolve this off tokens, its the only one-off like this
    const fontFamily =
      props[conf.inverseShorthands.fontFamily] ||
      props.fontFamily ||
      defaultProps.fontFamily ||
      propsIn.fontFamily ||
      '$body'

    if (
      process.env.NODE_ENV === 'development' &&
      fontFamily &&
      fontFamily[0] === '$' &&
      !(fontFamily in conf.fontsParsed)
    ) {
      console.warn(
        `Warning: no fontFamily "${fontFamily}" found in config: ${Object.keys(
          conf.fontsParsed
        ).join(', ')}`
      )
    }

    const variantValue = resolveVariants(
      key,
      value,
      props,
      defaultProps,
      theme,
      variants,
      fontFamily,
      conf,
      returnVariablesAs,
      staticConfig,
      '',
      languageContext,
      avoidDefaultProps,
      debug
    )

    if (variantValue) {
      return variantValue
    }

    let shouldReturn = value !== undefined && value !== null

    // handle shorthands
    if (key in conf.shorthands) {
      shouldReturn = true
      key = conf.shorthands[key]
    }

    if (value) {
      if (value[0] === '$') {
        value = getToken(
          key,
          value,
          conf,
          theme,
          fontFamily,
          languageContext,
          returnVariablesAs,
          debug
        )
      } else if (isVariable(value)) {
        value = resolveVariableValue(key, value, returnVariablesAs)
      }
    }

    if (shouldReturn) {
      return expandStyle(key, value) || [[key, value]]
    }
  }

  return mapper
}

type StyleResolver = (
  key: string,
  value: any,
  props: Record<string, any>,
  defaultProps: any,
  theme: any,
  variants: GenericVariantDefinitions,
  fontFamily: string,
  conf: TamaguiInternalConfig,
  returnVariablesAs: 'auto' | 'value' | 'non-color-value',
  staticConfig: StaticConfigParsed,
  parentVariantKey: string,
  languageContext?: LanguageContextType,
  avoidDefaultProps?: boolean,
  debug?: DebugProp
) => any

const resolveVariants: StyleResolver = (
  key,
  value,
  props,
  defaultProps,
  theme,
  variants,
  fontFamily,
  conf,
  returnVariablesAs,
  staticConfig,
  parentVariantKey,
  languageContext,
  avoidDefaultProps = false,
  debug
) => {
  const variant = variants?.[key]
  if (!variant || value === undefined) {
    return
  }

  let variantValue = getVariantDefinition(variant, key, value, conf)

  if (!variantValue) {
    // variant at key exists, but no matching variant value, return nothing
    if (process.env.NODE_ENV === 'development') {
      if (staticConfig.validStyles?.[key]) {
        return null
      }
      if (typeof value === 'boolean') {
        // don't warn on missing boolean values, common to only one of true/false
        return null
      }
      const name = staticConfig.componentName || '[UnnamedComponent]'
      // eslint-disable-next-line no-console
      console.warn(
        `No variant found: ${name} has variant "${key}", but no matching value "${value}"`
      )
    }
    return
  }

  if (typeof variantValue === 'function') {
    const fn = variantValue as VariantSpreadFunction<any>
    variantValue = fn(
      value,
      getVariantExtras(props, languageContext, theme, defaultProps, avoidDefaultProps)
    )
  }

  let fontFamilyResult: any

  if (isObj(variantValue)) {
    const fontFamilyUpdate =
      variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily]

    if (fontFamilyUpdate) {
      fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf)
    }

    variantValue = resolveTokensAndVariants(
      key,
      variantValue,
      props,
      defaultProps,
      theme,
      variants,
      fontFamilyResult || fontFamily,
      conf,
      returnVariablesAs,
      staticConfig,
      parentVariantKey,
      languageContext,
      avoidDefaultProps,
      debug
    )
  }

  if (variantValue) {
    const next = Object.entries(expandStyles(variantValue))

    // store any changed font family (only support variables for now)
    if (fontFamilyResult && fontFamilyResult[0] === '$') {
      fontFamilyCache.set(next, getVariableValue(fontFamilyResult))
    }

    return next
  }
}

// handles finding and resolving the fontFamily to the token name
// this is used as `font_[name]` in className for nice css variable support
export function getFontFamilyFromNameOrVariable(input: any, conf: TamaguiInternalConfig) {
  if (isVariable(input)) {
    const val = variableToFontNameCache.get(input)
    if (val) {
      return val
    } else {
      for (const key in conf.fontsParsed) {
        const familyVariable = conf.fontsParsed[key].family
        if (isVariable(familyVariable)) {
          variableToFontNameCache.set(familyVariable, key)
          if (familyVariable === input) {
            return key
          }
        }
      }
    }
  } else if (typeof input === 'string') {
    if (input?.[0] === '$') {
      return input
    } else {
      // this could be mapped back to
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('[tamagui] should map back', input)
      }
    }
  }
}

const variableToFontNameCache = new WeakMap<Variable, string>()

// special helper for special font family
const fontFamilyCache = new WeakMap()
export const getPropMappedFontFamily = (expanded?: any) => {
  return expanded && fontFamilyCache.get(expanded)
}

const resolveTokensAndVariants: StyleResolver = (
  key, // we dont use key assume value is object instead
  value,
  props,
  defaultProps,
  theme,
  variants,
  fontFamily,
  conf,
  returnVariablesAs,
  staticConfig,
  parentVariantKey,
  languageContext,
  avoidDefaultProps,
  debug
) => {
  const res = {}
  for (const rKey in value) {
    const fKey = conf.shorthands[rKey] || rKey
    const val = value[rKey]

    if (fKey in variants) {
      // avoids infinite loop if variant is matching a style prop
      // eg: { variants: { flex: { true: { flex: 2 } } } }
      if (parentVariantKey && parentVariantKey === key) {
        res[fKey] = val
      } else {
        const variantOut = resolveVariants(
          fKey,
          val,
          props,
          defaultProps,
          theme,
          variants,
          fontFamily,
          conf,
          returnVariablesAs,
          staticConfig,
          key,
          languageContext,
          avoidDefaultProps,
          debug
        )

        const { pressStyle, hoverStyle, focusStyle, enterStyle, exitStyle, ...rest } =
          Object.fromEntries(variantOut)
        const subs = { pressStyle, hoverStyle, focusStyle, enterStyle, exitStyle }
        Object.assign(res, rest)
        for (const key in subs) {
          if (subs[key]) {
            res[key] ??= {}
            Object.assign(res[key], subs[key])
          }
        }
      }
      continue
    }

    if (isVariable(val)) {
      res[fKey] = !isWeb || returnVariablesAs === 'value' ? val.val : val.variable
      continue
    }

    if (typeof val === 'string') {
      const fVal =
        val[0] === '$'
          ? getToken(
              fKey,
              val,
              conf,
              theme,
              fontFamily,
              languageContext,
              returnVariablesAs,
              debug
            )
          : val
      res[fKey] = fVal
      continue
    }

    if (isObj(val)) {
      // sub-objects: media queries, pseudos, shadowOffset
      res[fKey] ??= {}
      Object.assign(
        res[fKey],
        resolveTokensAndVariants(
          fKey,
          val,
          props,
          defaultProps,
          theme,
          variants,
          fontFamily,
          conf,
          returnVariablesAs,
          staticConfig,
          key,
          languageContext,
          avoidDefaultProps,
          debug
        )
      )
    } else {
      // nullish values cant be tokens, need no extra parsing
      res[fKey] = val
    }

    if (process.env.NODE_ENV === 'development') {
      if (debug) {
        if (res[fKey]?.[0] === '$') {
          // eslint-disable-next-line no-console
          console.warn(`⚠️ Missing token in theme ${theme.name}:`, fKey, res[fKey], theme)
        }
      }
    }
  }

  return res
}

const tokenCats = ['size', 'color', 'radius', 'space', 'zIndex'].map((name) => ({
  name,
  spreadName: `...${name}`,
}))

// goes through specificity finding best matching variant function
function getVariantDefinition(
  variant: any,
  key: string,
  value: any,
  conf: TamaguiInternalConfig
) {
  if (typeof variant === 'function') {
    return variant
  }
  if (variant[value]) {
    return variant[value]
  }
  const { tokensParsed } = conf
  for (const { name, spreadName } of tokenCats) {
    if (variant[spreadName] && value in tokensParsed[name]) {
      return variant[spreadName]
    }
  }
  let fn: any
  const type = typeof value
  if (type === 'number') {
    fn = variant[':number']
  } else if (type === 'string') {
    fn = variant[':string']
  } else if (value === true || value === false) {
    fn = variant[':boolean']
  }
  // fallback to catch all or size
  return fn || variant['...'] || variant['...size']
}

const fontShorthand = {
  fontSize: 'size',
  fontWeight: 'weight',
}

const getToken = (
  key: string,
  value: string,
  conf: TamaguiInternalConfig,
  theme: any,
  fontFamily: string | undefined = '$body',
  languageContext?: LanguageContextType,
  resolveAs?: ResolveVariableTypes,
  debug?: DebugProp
) => {
  const tokensParsed = conf.tokensParsed
  const fontsParsed = languageContext
    ? getFontsForLanguage(conf.fontsParsed, languageContext)
    : conf.fontsParsed
  let valOrVar: any
  let hasSet = false
  if (value in theme) {
    valOrVar = theme[value]
    hasSet = true
  } else {
    switch (key) {
      case 'fontFamily':
        valOrVar = fontsParsed[value]?.family || value
        hasSet = true
        break
      case 'fontSize':
      case 'lineHeight':
      case 'letterSpacing':
      case 'fontWeight':
        valOrVar = fontsParsed[fontFamily]?.[fontShorthand[key] || key]?.[value] || value
        hasSet = true
        break
    }
    for (const cat in tokenCategories) {
      if (key in tokenCategories[cat]) {
        const res = tokensParsed[cat][value]
        if (res) {
          valOrVar = res
          hasSet = true
        }
      }
    }
    if (!hasSet) {
      const spaceVar = tokensParsed.space[value]
      if (spaceVar) {
        valOrVar = spaceVar
        hasSet = true
      }
    }
  }

  if (process.env.NODE_ENV === 'development' && isDevTools && debug === 'verbose') {
    // eslint-disable-next-line no-console
    console.log('   ﹒ propMapper getToken', { key, valOrVar, theme, hasSet })
  }

  if (hasSet) {
    return resolveVariableValue(key, valOrVar, resolveAs)
  }

  if (process.env.NODE_ENV === 'development') {
    if (value && value[0] === '$') {
      // eslint-disable-next-line no-console
      console.warn(
        `⚠️ You passed the value "${value}" to the style property "${key}", but there's no theme or token with the key "${value}". Using theme "${theme.name}".

Set the debug prop to true to see more detailed debug information.`
      )
      if (debug) {
        if (isDevTools) {
          // eslint-disable-next-line no-console
          console.log('Looked in:', { theme, tokensParsed, fontsParsed })
        }
      }
      return null
    }
  }
  return value
}

function resolveVariableValue(
  key: string,
  valOrVar: Variable | any,
  resolveAs: ResolveVariableTypes = 'auto'
) {
  if (isVariable(valOrVar)) {
    if (resolveAs === 'variable') {
      return valOrVar
    }
    if (resolveAs === 'non-color-value') {
      if (isWeb) {
        if (key in tokenCategories.color) {
          return valOrVar.variable
        }
      }
      return valOrVar.val
    }
    if (!isWeb || resolveAs === 'value') {
      return valOrVar.val
    }
    return valOrVar.variable
  }
  return valOrVar
}

// TODO move to validStyleProps to merge

// just specificy the least costly, all else go to `space` (most keys - we can exclude)
const tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
  },
  color: {
    color: true,
    backgroundColor: true,
    borderColor: true,
    borderBottomColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
  },
}
