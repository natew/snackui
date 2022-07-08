import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import {
  ButtonDemo,
  DialogDemo,
  PopoverDemo,
  SelectDemo,
  SliderDemo,
  TooltipDemo,
} from '@tamagui/demos'
import { Sun } from '@tamagui/feather-icons'
import React from 'react'
import { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Anchor, Button, Select, Theme, XStack, YStack, styled } from 'tamagui'

import Tamagui from './tamagui.config'

// webpack fix..
if (typeof require !== 'undefined') {
  globalThis['React'] = require('react')
}

export const Sandbox = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme as any)

  return (
    <Tamagui.Provider defaultTheme={theme}>
      <link href="/fonts/inter.css" rel="stylesheet" />

      <button
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Switch theme
      </button>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--backgroundStrong)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <DialogDemo /> */}
        {/* <PopoverDemo /> */}
        {/* <TooltipDemo /> */}
        <SliderDemo />
        {/* <Theme name="dark">
          <ButtonDemo />
        </Theme> */}
      </div>
    </Tamagui.Provider>
  )
}
