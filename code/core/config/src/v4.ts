import { shorthands } from '@tamagui/shorthands/v2'
import { tokens } from '@tamagui/themes/v4'
import type { CreateTamaguiProps } from '@tamagui/web'
import { animations } from './v3-animations'
import { fonts } from './v4-fonts'
import { media, mediaQueryDefaultActive } from './v4-media'

export { shorthands } from '@tamagui/shorthands/v4'
export { media, mediaQueryDefaultActive } from './media'
export { animations } from './v4-animations'
export { createSystemFont, fonts } from './v4-fonts'

export { tamaguiThemes, tokens } from '@tamagui/themes/v4'

export const selectionStyles = (theme) =>
  theme.color5
    ? {
        backgroundColor: theme.color5,
        color: theme.color11,
      }
    : null

export const settings = {
  mediaQueryDefaultActive,
  defaultFont: 'body',
  fastSchemeChange: true,
  shouldAddPrefersColorThemes: true,
  allowedStyleValues: 'somewhat-strict-web',
  themeClassNameOnRoot: true,
  maxDarkLightNesting: 1,
} satisfies CreateTamaguiProps['settings']

export const defaultConfig = {
  animations,
  media,
  shorthands,
  tokens,
  fonts,
  selectionStyles,
  settings,
} satisfies CreateTamaguiProps
