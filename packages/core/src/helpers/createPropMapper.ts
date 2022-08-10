import { getConfig } from '../conf'
import { isWeb } from '../constants/platform'
import { Variable, isVariable } from '../createVariable'
import {
  DebugProp,
  GenericVariantDefinitions,
  PropMapper,
  SplitStyleState,
  StaticConfigParsed,
  TamaguiInternalConfig,
  VariantSpreadFunction,
} from '../types'
import { LanguageContextType } from '../views/FontLanguage.types'
import { expandStyle } from './expandStyle'
import { expandStyles } from './expandStyles'
import { getFontsForLanguage, getVariantExtras } from './getVariantExtras'
import { isObj } from './isObj'
import { mergeProps } from './mergeProps'

export type ResolveVariableTypes = 'auto' | 'value' | 'variable' | 'both' | 'non-color-value'

export const getReturnVariablesAs = (props: any, state: Partial<SplitStyleState>) => {
  return !!props.animation || state.resolveVariablesAs === 'value'
    ? isWeb
      ? 'non-color-value'
      : 'value'
    : 'auto'
}

export const createPropMapper = (staticConfig: StaticConfigParsed) => {
  const variants = staticConfig.variants || {}

  // temp remove classnames
  const defaultProps = mergeProps(staticConfig.defaultProps || {}, {}, true)[0]

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
    const conf = getConfig()
    if (!conf) {
      throw new Error(`No tamagui config setup`)
    }

    const props = state.fallbackProps || propsIn
    const returnVariablesAs = getReturnVariablesAs(props, state)

    // handled here because we need to resolve this off tokens, its the only one-off like this
    const fontFamily =
      props[conf.inverseShorthands.fontFamily] ||
      props.fontFamily ||
      defaultProps.fontFamily ||
      '$body'

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
      avoidDefaultProps
    )

    if (variantValue) {
      return variantValue
    }

    let shouldReturn = value !== undefined && value !== null

    // handle shorthands
    if (conf.shorthands[key]) {
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
        value = getVariableValue(key, value, returnVariablesAs)
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
  const variant = variants && variants[key]
  if (!variant || value === undefined) return
  let variantValue = getVariantDefinition(variant, key, value, conf)

  if (!variantValue) {
    // variant at key exists, but no matching variant value, return nothing
    if (process.env.NODE_ENV === 'development') {
      if (staticConfig.validStyles?.[key]) {
        return null
      }
      if (value === false) {
        // don't warn on missing false values, common to only use true
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

  if (isObj(variantValue)) {
    variantValue = resolveTokensAndVariants(
      key,
      variantValue,
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
    )
  }

  if (variantValue) {
    return Object.entries(expandStyles(variantValue))
  }
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
    if (isVariable(val)) {
      res[fKey] = !isWeb || returnVariablesAs === 'value' ? val.val : val.variable
    } else if (variants[fKey]) {
      // avoids infinite loop if variant is matching a style prop
      // eg: { variants: { flex: { true: { flex: 2 } } } }
      if (parentVariantKey === key) {
        res[fKey] = val
      } else {
        Object.assign(
          res,
          Object.fromEntries(
            resolveVariants(
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
        )
      }
    } else if (typeof val === 'string') {
      const fVal =
        val[0] === '$'
          ? getToken(fKey, val, conf, theme, fontFamily, languageContext, returnVariablesAs, debug)
          : val
      res[fKey] = fVal
    } else {
      if (isObj(val)) {
        // sub-objects: media queries, pseudos, shadowOffset
        res[fKey] = resolveTokensAndVariants(
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
      } else {
        // nullish values cant be tokens, need no extra parsing
        res[fKey] = value[fKey]
      }
    }
    if (process.env.NODE_ENV === 'development') {
      if (res[fKey]?.[0] === '$') {
        console.warn(`⚠️ Missing token in theme ${theme.name}:`, fKey, res[fKey])
      }
    }
  }
  return res
}

// goes through specificity finding best matching variant function
function getVariantDefinition(variant: any, key: string, value: any, conf: TamaguiInternalConfig) {
  if (typeof variant === 'function') {
    return variant
  }
  if (variant[value]) {
    return variant[value]
  }
  const { tokensParsed } = conf
  if (variant['...size'] && value in tokensParsed.size) {
    return variant['...size']
  }
  if (variant['...color'] && value in tokensParsed.color) {
    return variant['...color']
  }
  if (variant['...radius'] && value in tokensParsed.radius) {
    return variant['...radius']
  }
  if (variant['...space'] && value in tokensParsed.space) {
    return variant['...space']
  }
  if (variant['...zIndex'] && value in tokensParsed.zIndex) {
    return variant['...zIndex']
  }
  let fn: any
  if (typeof value === 'number') {
    fn = variant[':number']
  } else if (typeof value === 'string') {
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
  if (theme[value]) {
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
  if (hasSet) {
    return getVariableValue(key, valOrVar, resolveAs)
  }
  if (process.env.NODE_ENV === 'development') {
    if (value && value[0] === '$') {
      console.trace(
        `⚠️ You've passed the value "${value}" to the style property "${key}", but there's no theme or token with the key "${value}". Using theme "${theme.name}".

Set the debug prop to true to see more detailed debug information.`
      )
      if (debug) {
        if (typeof window !== 'undefined') {
          console.log('Looked in:')
          console.log('Theme:', theme)
          console.log('Tokens:', tokensParsed)
          console.log('Fonts:', fontsParsed)
        }
      }
      return null
    }
  }
  return value
}

function getVariableValue(
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
