import { memo, useMemo, useState } from 'react'
import { Button, Square, Theme, YStack } from 'tamagui'

export function SandboxThemeChange() {
  return (
    <>
      <Inner>
        <Inner>
          <Inner />
        </Inner>
      </Inner>
    </>
  )
}

export function Inner(props: { children?: any }) {
  const [theme, setTheme] = useState('yellow' as any)

  return (
    <YStack bw={1} boc="red" p="$4" ai="center" jc="center" gap="$5">
      <pre>
        <code>
          <b>Inner</b>{' '}
          {JSON.stringify({
            theme,
          })}
        </code>
      </pre>

      <Button
        onPress={() => {
          setTheme(theme === 'yellow' ? 'blue' : 'yellow')
        }}
      >
        Change Theme
      </Button>

      {/* @ts-ignore */}
      <Theme debug="visualize" name={theme}>
        <SandboxThemeChildStatic />
        <SandboxThemeChildDynamic />
        {props.children}
      </Theme>
    </YStack>
  )
}

const SandboxThemeChildStatic = memo(() => {
  return <Square debug="visualize" size={20} backgroundColor="$color10" />
})

const SandboxThemeChildDynamic = memo(() => {
  console.log('render dynamic')
  return (
    <Square debug="visualize" animation="bouncy" size={20} backgroundColor="$color10" />
  )
})
