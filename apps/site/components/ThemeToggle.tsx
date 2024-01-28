import { Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import { useThemeSetting } from '@tamagui/next-theme'
import React from 'react'
import { useState } from 'react'
import type { ButtonProps} from 'tamagui';
import { Button, TooltipSimple, useIsomorphicLayoutEffect } from 'tamagui'

const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
}

export const ThemeToggle = (props: ButtonProps) => {
  const themeSetting = useThemeSetting()!
  const [clientTheme, setClientTheme] = useState<string>('light')

  useIsomorphicLayoutEffect(() => {
    const systemIsDark = window.matchMedia(`(prefers-color-scheme: dark)`)?.matches
    const theme =
      themeSetting.resolvedTheme === 'system'
        ? themeSetting.systemTheme
        : themeSetting.resolvedTheme
    const themeColor = theme === 'dark' || systemIsDark ? '#050505' : '#fff'

    document.querySelector('#theme-color')?.setAttribute('content', themeColor)

    setClientTheme(themeSetting.current || 'light')
  }, [themeSetting.current, themeSetting.resolvedTheme])

  const Icon = icons[clientTheme]

  return (
    <TooltipSimple
      groupId="header-actions-theme"
      label={`Scheme (${themeSetting.current})`}
    >
      <Button
        size="$3"
        onPress={themeSetting.toggle}
        {...props}
        aria-label="Toggle light/dark color scheme"
        icon={Icon}
      >
        {/* {theme === 'light' ? <Moon size={12} /> : <SunIcon />} */}
      </Button>
    </TooltipSimple>
  )
}
