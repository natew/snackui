import { ThemeTint, useTint } from '@tamagui/logo'
import { memo, useEffect, useState } from 'react'
import type { ColorTokens, ThemeName } from 'tamagui'
import { YStack, isClient, useDidFinishSSR, useTheme, useThemeName } from 'tamagui'

type Props = {
  colorKey?: ColorTokens
  theme?: ThemeName | null
  children?: any
  disableTint?: boolean | number
}

export const ThemeNameEffect = memo((props: Props) => {
  const Tint = useTint()

  useEffect(() => {
    if (!props.theme) {
      Tint.setTintIndex(3)
    } else {
      Tint.setTintIndex(Tint.tints.findIndex((x) => x === props.theme))
    }
  }, [props.theme])

  const disable =
    typeof props.disableTint === 'number'
      ? Tint.tintIndex === props.disableTint
      : !!props.disableTint

  return (
    <ThemeTint key={disable ? 1 : 0} disable={disable}>
      <ThemeNameEffectNoTheme {...props} />
      {props.children}
    </ThemeTint>
  )
})

export const ThemeNameEffectNoTheme = ({
  colorKey = '$color1',
  theme: ssrTheme,
}: Props) => {
  const isHydrated = useDidFinishSSR()
  const theme = useTheme()
  const themeName = useThemeName()
  const [isActive, setIsActive] = useState(false)

  const color = theme[colorKey]?.val

  if (isClient) {
    useEffect(() => {
      if (!isHydrated) return
      if (!isActive) return
      document.querySelector('#theme-color')?.setAttribute('content', color)
      // document.body.style.setProperty('background-color', color, 'important')
    }, [isHydrated, isActive, color])
  }

  return (
    <>
      <YStack
        id={`theme-name-effect-${ssrTheme}`}
        ref={() => {
          setIsActive(true)
        }}
      />
      <style>
        {ssrTheme
          ? `


`
          : `
body {
  background: var(--${colorKey.slice(1)}) !important;
}


`}
      </style>
    </>
  )
}
