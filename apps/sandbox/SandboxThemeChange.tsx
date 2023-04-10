import { memo, useMemo, useState } from 'react'
import { Button, Card, Square, Theme, YStack } from 'tamagui'

export function SandboxThemeChange() {
  return (
    <>
      <Inner>
        <Inner>
          <Card debug="visualize" w={100} h={100} />
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

        <Button debug="visualize" themeInverse>
          inverse
        </Button>

        {props.children}
      </Theme>
    </YStack>
  )
}

const SandboxThemeChildStatic = memo(() => {
  // @ts-ignore
  return <Square debug="visualize" size={20} backgroundColor="$color10" />
})

const SandboxThemeChildDynamic = memo(() => {
  console.log('render dynamic')
  return (
    // @ts-ignore
    <Square debug="visualize" animation="bouncy" size={20} backgroundColor="$color10" />
  )
})
