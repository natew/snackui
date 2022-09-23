import { useFonts } from 'expo-font'
import React, { useMemo, useState } from 'react'
import { Appearance } from 'react-native'

import { Navigation } from './Navigation'
import { Provider } from './provider'
import { ThemeContext } from './useKitchenSinkTheme'

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme())
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const children = useMemo(() => {
    return <Navigation />
  }, [])

  const themeContext = useMemo(() => {
    return {
      value: theme,
      set: setTheme,
    }
  }, [theme])

  if (!loaded) {
    return null
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      <Provider defaultTheme={theme as any}>{children}</Provider>
    </ThemeContext.Provider>
  )
}
