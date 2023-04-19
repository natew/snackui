import { useLayoutEffect, useState } from 'react'

type ColorScheme = 'dark' | 'light'

export const useRootTheme = ({ fallback = 'light' }: { fallback?: ColorScheme }) => {
  const [val, setVal] = useState<ColorScheme>(fallback)

  if (typeof document !== 'undefined') {
    useLayoutEffect(() => {
      // @ts-ignore
      const classes = [...document.documentElement.classList]

      const val: ColorScheme = classes.includes(`t_dark`)
        ? 'dark'
        : classes.includes(`t_light`)
        ? 'light'
        : fallback

      setVal(val)
    }, [])
  }

  return [val, setVal] as const
}
