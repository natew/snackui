import { FastForward, Pause, Rewind } from '@tamagui/feather-icons'
import React from 'react'
import { Button, Card, Image, Paragraph, Square, Theme, XStack, YStack } from 'tamagui'

import Tamagui from './tamagui.config'

console.log('css', Tamagui.getCSS().split('\n'))

const Scale = ({ between, ...props }: any) => {
  return props.children
  return React.cloneElement(props.children, {
    ...props,
  })
}

export const Sandbox = () => {
  const coloredPlayers = (
    <>
      <YStack>
        <XStack>
          <MediaPlayer />
          <MediaPlayer alt={1} />
          <MediaPlayer alt={3} />
          <MediaPlayer alt={4} />
          <MediaPlayer alt={5} />
        </XStack>
        <XStack>
          <Theme name="blue">
            <MediaPlayer />
            <MediaPlayer alt={1} />
            <MediaPlayer alt={3} />
            <MediaPlayer alt={4} />
            <MediaPlayer alt={5} />
          </Theme>
        </XStack>
      </YStack>
    </>
  )

  return (
    <Tamagui.Provider injectCSS>
      <YStack>
        <Theme name="dark">{coloredPlayers}</Theme>
        <Theme name="light">{coloredPlayers}</Theme>
      </YStack>
    </Tamagui.Provider>
  )
}

export const MediaPlayer = ({ alt = 0 }: { alt?: number }) => {
  const mainButtonTheme = `alt${alt}`
  const barTheme = `alt${alt + 1}`

  // alternatively have
  // <Scale.Container> for non-viewport usage

  return (
    <Theme name={alt ? `alt${alt}` : null}>
      <YStack bc="$background">
        <YStack py="$6" px="$4">
          <Scale
            // could be `container` as well
            // is container="viewport" default?
            container="viewport"
            scaleProps={['size', 'space']}
            scaleBy={1}
            scaleOffset={{
              size: 2,
            }}
            scaleDirection="vertical"
          >
            <Card flex={1} overflow="visible" bordered size="$6" pl={0} pr={0} pb={0} pt={0}>
              <YStack w="100%" space="$5">
                <XStack ai="center" p="$4" space="$5">
                  <Square br="$2" size="$12">
                    <Image w="150%" h="150%" src="http://placekitten.com/200/200" />
                  </Square>

                  <YStack jc="center" space="$1">
                    <Paragraph fontWeight="700">Spaceship</Paragraph>
                    <Paragraph>Kanye West</Paragraph>
                    <Paragraph>College Dropout</Paragraph>
                  </YStack>

                  {/* <Button als="asdsda" w="100">
                  hello
                </Button> */}
                </XStack>

                <Theme name={barTheme}>
                  <XStack
                    borderTopWidth={1}
                    borderTopColor="$borderColor"
                    w="100%"
                    px="$8"
                    bc="$background"
                    bbrr="$2"
                    bblr="$2"
                    ai="center"
                    p="$2"
                    space="$8"
                    jc="center"
                  >
                    <Rewind />
                    <Button
                      // animation="spring"
                      theme={mainButtonTheme}
                      bordered
                      // bc="$background"
                      hoverStyle={{
                        elevation: '$6',
                        scale: 1.1,
                      }}
                      my="$-6"
                      icon={Pause}
                      scaleIcon={2}
                      circular
                      size="$8"
                      elevation="$4"
                    />
                    <FastForward />
                  </XStack>
                </Theme>
              </YStack>
            </Card>
          </Scale>
        </YStack>
      </YStack>
    </Theme>
  )
}
