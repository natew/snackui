import {
  Palette,
  addChildren,
  applyMask,
  createStrengthenMask,
  createTheme,
  createWeakenMask,
} from '@tamagui/create-theme'

import { colorTokens, darkColors, lightColors } from './tokens'

const { values } = Object

type ColorName = keyof typeof colorTokens.dark

const lightTransparent = 'rgba(255,255,255,0)'
const darkTransparent = 'rgba(10,10,10,0)'

// background => foreground
const palettes = {
  dark: [
    darkTransparent,
    '#090909',
    '#151515',
    '#191919',
    '#232323',
    '#282828',
    '#323232',
    '#424242',
    '#494949',
    '#545454',
    '#626262',
    '#a5a5a5',
    '#fff',
    lightTransparent,
  ],
  light: [
    lightTransparent,
    '#fff',
    '#f4f4f4',
    'hsl(0, 0%, 99.0%)',
    'hsl(0, 0%, 97.3%)',
    'hsl(0, 0%, 95.1%)',
    'hsl(0, 0%, 93.0%)',
    'hsl(0, 0%, 90.9%)',
    'hsl(0, 0%, 80.0%)',
    'hsl(0, 0%, 56.1%)',
    'hsl(0, 0%, 52.3%)',
    'hsl(0, 0%, 43.5%)',
    'hsl(0, 0%, 9.0%)',
    darkTransparent,
  ],
}

const scale = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12,
}

// templates use the palette and specify index
// negative goes backwards from end so -1 is the last item
const template = {
  ...scale,

  // the background, color, etc keys here work like generics - they make it so you
  // can publish components for others to use without mandating a specific color scale
  // the @tamagui/button Button component looks for `$background`, so you set the
  // dark_red_Button theme to have a stronger background than the dark_red theme.
  background: 2,
  backgroundHover: 3,
  backgroundPress: 1,
  backgroundFocus: 2,
  backgroundStrong: 1,
  backgroundTransparent: 0,
  color: -2,
  colorHover: -3,
  colorPress: -2,
  colorFocus: -3,
  colorTransparent: -1,
  shadowColor: 1,
  shadowColorHover: 1,
  shadowColorPress: 1,
  shadowColorFocus: 1,
  borderColor: 3,
  borderColorHover: 4,
  borderColorPress: 2,
  borderColorFocus: 3,
  placeholderColor: -4,
}

const light = createTheme(palettes.light, template, { nonInheritedValues: lightColors })
const dark = createTheme(palettes.dark, template, { nonInheritedValues: darkColors })

const baseThemes = {
  light,
  dark,
}

type Theme = typeof light

const masks = {
  weaker: createWeakenMask({
    by: 1,
    min: 1,
    max: palettes.dark.length,
  }),
  stronger: createStrengthenMask({
    by: 1,
    min: 1,
    max: palettes.dark.length,
  }),
}

export const themes = addChildren(baseThemes, (name, themeIn) => {
  const theme = themeIn as Theme
  const inverseName = name === 'light' ? 'dark' : 'light'
  const inverseTheme = baseThemes[inverseName]
  const transparent = (hsl: string, opacity = 0) =>
    hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`)

  // setup colorThemes and their inverses
  const [colorThemes, inverseColorThemes] = [
    colorTokens[name],
    colorTokens[inverseName],
  ].map((colorSet) => {
    return Object.fromEntries(
      Object.keys(colorSet).map((color) => {
        const colorPalette = values(colorSet[color as ColorName])
        // we want a much lighter text color by default so swap them around a bit
        const first6 = colorPalette.slice(0, 6)
        const last5 = colorPalette.slice(colorPalette.length - 5)
        return [
          color,
          createTheme(
            [
              transparent(colorPalette[0]),
              ...first6,
              ...last5,
              theme.color,
              transparent(colorPalette[colorPalette.length - 1]),
            ],
            template
          ),
        ]
      })
    ) as Record<ColorName, Theme>
  })

  return {
    ...getAltThemes(theme, inverseTheme),
    ...getComponentThemes(theme, inverseTheme),
    ...addChildren(colorThemes, (colorName, colorTheme) => {
      const inverse = inverseColorThemes[colorName]
      console.log('color', colorName)
      return {
        ...getAltThemes(colorTheme as any, inverse as any),
        ...getComponentThemes(colorTheme as any, inverse as any),
      }
    }),
  }

  function getComponentThemes(theme: Theme, inverse: Theme) {
    const stronger1 = applyMask(theme, masks.stronger, { skip: scale })
    const stronger2 = applyMask(stronger1, masks.stronger, { skip: scale })
    const inverse1 = applyMask(inverse, masks.weaker, { skip: scale })
    const inverse2 = applyMask(inverse1, masks.weaker, { skip: scale })
    return {
      Button: stronger1,
      DrawerFrame: stronger1,
      SliderTrack: theme,
      SliderTrackActive: stronger2,
      SliderThumb: inverse1,
      Progress: stronger1,
      ProgressIndicator: inverse,
      Switch: stronger2,
      SwitchThumb: inverse2,
      TooltipArrow: stronger1,
      TooltipContent: stronger2,
    }
  }

  function getAltThemes(theme: Theme, inverse: Theme) {
    const alt1 = applyMask(theme, masks.weaker, { skip: scale })
    const alt2 = applyMask(alt1, masks.weaker, { skip: scale })
    return addChildren({ alt1, alt2 }, (name, theme) => {
      return getComponentThemes(theme as any, inverse)
    })
  }
})

globalThis['themes'] = themes
