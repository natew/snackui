import { Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import React from 'react'
import { useState } from 'react'
import { Button, ButtonProps, TooltipSimple, useIsomorphicLayoutEffect } from 'tamagui'

const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
}

export const ThemeToggleButton = (props: ButtonProps) => {
  // const { theme, toggleTheme } = useTheme()
  const [clientTheme, setClientTheme] = useState<string>('light')

  // useIsomorphicLayoutEffect(() => {
  //   setClientTheme(theme || 'light')
  // }, [theme])

  const Icon = icons[clientTheme]

  return (
    <TooltipSimple
      groupId="header-actions-theme"
      // label={`Switch theme (${theme})`}
      label=""
    >
      <Button
        size="$3"
        // onPress={toggleTheme}
        {...props}
        aria-label="toggle a light and dark color scheme"
        icon={Icon}
      />
    </TooltipSimple>
  )
}
