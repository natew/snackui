import { shorthands } from '@tamagui/shorthands/v2'
import { tokens, tamaguiThemes } from '@tamagui/themes/v4'
import { animations } from './v3-animations'
import type { CreateTamaguiProps } from '@tamagui/web'

import { fonts } from './v4-fonts'
import { media, mediaQueryDefaultActive } from './v4-media'

export { animations } from './v4-animations'
export { tokens, themes } from '@tamagui/themes/v3-themes'
export { shorthands } from '@tamagui/shorthands/v3'
export { fonts } from './fonts'
export { media, mediaQueryDefaultActive } from './media'

// tree shake away themes in production
const themes =
  process.env.TAMAGUI_OPTIMIZE_THEMES === 'true'
    ? ({} as typeof tamaguiThemes)
    : tamaguiThemes

export const config = {
  animations,
  themes,
  media,
  shorthands,
  tokens,
  fonts,
  selectionStyles: (theme) =>
    theme.color5
      ? {
          backgroundColor: theme.color5,
          color: theme.color11,
        }
      : null,
  settings: {
    mediaQueryDefaultActive,
    defaultFont: 'body',
    fastSchemeChange: true,
    shouldAddPrefersColorThemes: true,
    allowedStyleValues: 'somewhat-strict-web',
    themeClassNameOnRoot: true,
  },
} satisfies CreateTamaguiProps
