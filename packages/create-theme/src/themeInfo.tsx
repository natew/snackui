import { CreateThemePalette, GenericTheme, ThemeMask } from './types'

export type ThemeInfo = {
  palette: CreateThemePalette
  definition: ThemeMask
  cache: Map<any, any>
}

const THEME_INFO = new Map<string, ThemeInfo>()

export const getThemeInfo = (theme: GenericTheme | ThemeMask): ThemeInfo | undefined => {
  return THEME_INFO.get(JSON.stringify(theme))
}

export const setThemeInfo = (
  theme: GenericTheme | ThemeMask,
  info: Pick<ThemeInfo, 'palette' | 'definition'>
) => {
  const next = {
    ...info,
    cache: new Map(),
  }
  THEME_INFO.set(JSON.stringify(theme), next)
  THEME_INFO.set(JSON.stringify(info.definition), next)
}
