import type { TamaguiBuildOptions } from 'tamagui'

export default {
  components: ['tamagui'],
  config: 'tamagui.config.ts',
  useReactNativeWebLite: 'without-animated',
  outputCSS: './app/tamagui.css',
} satisfies TamaguiBuildOptions
