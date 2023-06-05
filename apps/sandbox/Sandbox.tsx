import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import * as Demos from '@tamagui/demos'
import { ToastProvider } from '@tamagui/toast'
import { Suspense, useState } from 'react'
import {
  Button,
  Label,
  Separator,
  SizableText,
  Square,
  TamaguiProvider,
  Theme,
  XStack,
  YStack,
  getStylesAtomic,
  styled,
} from 'tamagui'

import config from './tamagui.config'

// useful for debugging why things render:
// import './wdyr'

if (typeof require !== 'undefined') {
  globalThis['React'] = require('react') // webpack
}

export const Sandbox = () => {
  const kitchenSink = new URLSearchParams(window.location.search).get('kitchen')
  const demoComponentName = new URLSearchParams(window.location.search).get('demo')
  const useCaseComponentName = new URLSearchParams(window.location.search).get('test')
  const Component = kitchenSink
    ? // solito breaking
      () => null //require('../kitchen-sink/src/features/home/screen').HomeScreen
    : demoComponentName
    ? Demos[
        demoComponentName.endsWith('Demo')
          ? demoComponentName
          : `${demoComponentName}Demo`
      ]
    : useCaseComponentName
    ? require(`./usecases/${useCaseComponentName}`).default
    : SandboxInner

  return (
    <SandboxFrame>
      <Suspense fallback="Loading...">
        <Component />
      </Suspense>
    </SandboxFrame>
  )
}

const SandboxInner = () => {
  return (
    <Theme name="yellow">
      <YStack componentName="Button">
        <YStack w={100} h={100} bc="$background" />
      </YStack>
    </Theme>
  )

  return <HomeScreen />
  return <Square size={100} bc="red" />
}

// function TestAnimatePresence() {
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       <Button onPress={() => setShow(!show)}>hide</Button>
//       <AnimatePresence>
//         {show && (
//           <Square
//             animation="quick"
//             size={100}
//             bc="red"
//             y={0}
//             o={1}
//             hoverStyle={{
//               y: -10,
//             }}
//             enterStyle={{
//               y: -100,
//             }}
//             exitStyle={{
//               y: 100,
//               o: 0,
//             }}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

function TestPerf() {
  return <Button onPress={runTestPerf}>run</Button>
}

function runTestPerf() {
  const start0 = performance.now()

  function baseline() {
    return new Array().fill(1000).map(() => {
      return [...new Set([`${Math.random() * Math.random() * Math.random()}`])]
    })
  }

  for (let i = 0; i < 10000; i++) {
    baseline()
  }

  const end0 = performance.now() - start0
  console.log('end0', end0)

  const start = performance.now()

  function run() {
    getStylesAtomic({
      backgroundColor: 'red',
      width: 100,
      height: 200,
      scale: 2,

      $gtLg: {
        backgroundColor: 'green',
      },

      hoverStyle: {
        margin: 20,
        padding: 20,
      },
    })
  }

  for (let i = 0; i < 10000; i++) {
    run()
  }

  console.log('took', performance.now() - start)
}

const SandboxFrame = (props: { children: any }) => {
  const [theme, setTheme] = useState(
    new URLSearchParams(window.location.search).get('theme') === 'dark' ? 'dark' : 'light'
  )
  const [screenshot, setScreenshot] = useState(
    new URLSearchParams(window.location.search).has('screenshot')
  )
  const showThemeSwitch = !screenshot
  const splitView = new URLSearchParams(window.location.search).get('splitView')

  return (
    <TamaguiProvider config={config} defaultTheme={theme}>
      <ToastProvider swipeDirection="horizontal">
        <link href="/fonts/inter.css" rel="stylesheet" />

        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
            html, body, #root { height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; }
          `,
          }}
        />

        <Theme name={screenshot ? 'blue' : undefined}>
          <XStack fullscreen>
            <YStack ai="center" jc="center" f={1} h="100%">
              {props.children}
            </YStack>

            {splitView ? (
              <>
                <Separator vertical />
                <Theme name="dark">
                  <YStack
                    ai="center"
                    jc="center"
                    f={1}
                    h="100%"
                    bg={screenshot ? 'transparent' : '$background'}
                  >
                    {props.children}
                  </YStack>
                </Theme>
              </>
            ) : null}
          </XStack>
        </Theme>
        {showThemeSwitch && (
          <div
            style={{
              position: 'fixed',
              bottom: 30,
              left: 20,
              fontSize: 30,
            }}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            🌗
          </div>
        )}
      </ToastProvider>
    </TamaguiProvider>
  )
}

function HomeScreen() {
  return (
    <YStack space>
      {/* the label here has an extra height of 44px set even when using unstyled. 
      Similarly styled SizableText does not have this issue */}
      <CustomLabel>Custom Label with height 44px set</CustomLabel>
      <CustomLabelWithSizableText>
        sizable text with no set height
      </CustomLabelWithSizableText>
    </YStack>
  )
}

const CustomLabel = styled(Label, {
  name: 'CustomLabel',
  unstyled: true,
  debug: 'verbose',
  fontSize: '$3',
})

const CustomLabelWithSizableText = styled(SizableText, {
  name: 'CustomLabelWithSizableText',
  fontSize: '$3',
})
