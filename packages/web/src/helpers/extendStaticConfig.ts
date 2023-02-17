import { stylePropsView } from '@tamagui/helpers'

import type { StaticConfig, StaticConfigParsed, StylableComponent } from '../types.js'
import { createPropMapper } from './createPropMapper.js'
import { mergeProps } from './mergeProps.js'

export function extendStaticConfig(
  config: Partial<StaticConfig>,
  parent?: StylableComponent
) {
  if (!(parent && 'staticConfig' in parent)) {
    return parseStaticConfig(config)
  }

  const parentStaticConf = parent.staticConfig as StaticConfig
  const variants = {
    ...parentStaticConf.variants,
  }

  // merge variants... can we type this?
  if (config.variants) {
    for (const key in config.variants) {
      if (variants[key]) {
        variants[key] = {
          ...variants[key],
          ...config.variants[key],
        }
      } else {
        variants[key] = config.variants[key]
      }
    }
  }

  // include our own
  const parentNames = [...(parentStaticConf.parentNames || [])]
  if (parentStaticConf.componentName) {
    parentNames.push(parentStaticConf.componentName)
  }

  const deoptProps = config.deoptProps || new Set<string>()
  // deoptProps.add('style')

  return parseStaticConfig({
    ...parentStaticConf,
    ...config,
    deoptProps,
    variants,
    parentNames,
    validStyles: config.validStyles
      ? {
          ...parentStaticConf.validStyles,
          ...config.validStyles,
        }
      : parentStaticConf.validStyles || stylePropsView,
    defaultProps: mergeProps(
      {
        ...parentStaticConf.defaultProps,
        ...parentStaticConf.defaultVariants,
      },
      {
        ...config.defaultProps,
        ...config.defaultVariants,
      }
    )[0],
  })
}

export const parseStaticConfig = (config: Partial<StaticConfig>): StaticConfigParsed => {
  const parsed = {
    defaultProps: {},
    ...config,
    parsed: true,
  } as const
  return {
    ...parsed,
    propMapper: createPropMapper(parsed as StaticConfigParsed),
  }
}
