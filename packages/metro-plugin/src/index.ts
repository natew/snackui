import { createExtractor, type TamaguiOptions } from '@tamagui/static'
import {
  withCssInterop,
  type ComposableIntermediateConfigT,
} from 'react-native-css-interop/metro'

export function withTamagui(
  metroConfig: ComposableIntermediateConfigT,
  options: TamaguiOptions & {
    disableCSSInterop?: boolean
  }
) {
  // run one build up front
  const extractor = createExtractor()

  // need to await this somehow.. but generally this starts like 10 seconds before any request
  if (!options.disable) {
    void extractor.loadTamagui(options)
  }

  if (!options.disableCSSInterop) {
    metroConfig = withCssInterop(metroConfig, {
      ignorePropertyWarningRegex: ['^--'],
      // grouping: ['^group(/.*)?'],
    })
  }

  // done in css interop
  // metroConfig.resolver = {
  //   ...metroConfig.resolver,
  //   sourceExts: [...metroConfig.resolver.sourceExts, 'css'],
  // }

  metroConfig.transformerPath = require.resolve('./transformer')
  metroConfig.transformer = {
    ...metroConfig.transformer,
    tamagui: {
      ...options,
      disableInitialBuild: true,
    },
  }

  return metroConfig
}
