import { TamaguiLogo } from '@tamagui/logo'
import { NextLink } from 'components/NextLink'
import { memo } from 'react'
import { H4, Paragraph, Spacer, Text, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'
import { ExternalIcon } from './ExternalIcon'
import { ParagraphLink } from './Link'

export const Footer = memo(() => {
  return (
    <YStack tag="footer" pos="relative" mb="$10">
      <ContainerLarge>
        <XStack x={40} py="$7" $sm={{ flexDirection: 'column', ai: 'center' }}>
          <YStack
            ai="flex-start"
            $sm={{ ai: 'center' }}
            py="$5"
            flex={2}
            mt="$-1"
            mb="$2"
            px="$4"
            space="$4"
          >
            <Text
              className="clip-invisible"
              position="absolute"
              width={1}
              height={1}
              padding={0}
              margin={-1}
              overflow="hidden"
            >
              homepage
            </Text>
            <NextLink href="/" aria-label="Homepage">
              <TamaguiLogo showWords downscale={1} />
            </NextLink>
            <Paragraph size="$3">built with Tamagui, of course.</Paragraph>
          </YStack>

          <YStack
            ai="flex-start"
            $sm={{ ai: 'center' }}
            px="$4"
            py="$5"
            flex={1.5}
            space="$3"
          >
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Overview
            </H4>
            <ParagraphLink href="/docs/intro/introduction">Introduction</ParagraphLink>
            <ParagraphLink href="/docs/core/configuration">Configuration</ParagraphLink>
            <ParagraphLink href="/privacy">Privacy Policy</ParagraphLink>
            <ParagraphLink href="/takeout-policy">Fulfillment Policy</ParagraphLink>
            {/* <ParagraphLink href="/docs/api">API</ParagraphLink>
          <ParagraphLink href="/docs/frequently-asked-questions">FAQ</ParagraphLink> */}
          </YStack>

          <YStack
            ai="flex-start"
            $sm={{ ai: 'center' }}
            px="$4"
            py="$5"
            flex={1.5}
            space="$3"
          >
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Docs
            </H4>
            <ParagraphLink href="/docs/intro/introduction">Introduction</ParagraphLink>
            <ParagraphLink href="/docs/intro/installation">Installation</ParagraphLink>
            <ParagraphLink href="/docs/core/introduction">Core</ParagraphLink>
            <ParagraphLink href="/docs/core/styled">styled()</ParagraphLink>
            <ParagraphLink href="/docs/intro/why-a-compiler">Compiler</ParagraphLink>
          </YStack>

          <YStack
            ai="flex-start"
            $sm={{ ai: 'center' }}
            px="$4"
            py="$5"
            flex={1.5}
            space="$3"
          >
            <H4 mb="$3" fontFamily="$silkscreen" fontSize={12} ls={0.5} o={0.5}>
              Community
            </H4>
            <XStack space="$1" ai="center">
              <ParagraphLink href="/community">Community</ParagraphLink>
            </XStack>
            <XStack space="$1" ai="center">
              <ParagraphLink href="/blog">Blog</ParagraphLink>
            </XStack>
            <XStack space="$1" ai="center">
              <ParagraphLink href="https://github.com/tamagui/tamagui" target="_blank">
                GitHub
              </ParagraphLink>
              <ExternalIcon />
            </XStack>
            <XStack space="$1" ai="center">
              <ParagraphLink href="https://twitter.com/tamagui_js" target="_blank">
                Twitter
              </ParagraphLink>
              <ExternalIcon />
            </XStack>
            <XStack space="$1" ai="center">
              <ParagraphLink href="https://discord.gg/4qh6tdcVDa" target="_blank">
                Discord
              </ParagraphLink>
              <ExternalIcon />
            </XStack>
          </YStack>
        </XStack>

        <Spacer />
        <Spacer />
        <Spacer />
      </ContainerLarge>
    </YStack>
  )
})
