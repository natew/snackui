import { useOnIntersecting } from '@tamagui/demos'
import NextLink from 'next/link'
import { useRef, useState } from 'react'
import { Button, Paragraph, XStack, YStack } from 'tamagui'

import { ContainerLarge } from '../components/Container'
import { HomeH2, HomeH3 } from '../components/HomeH2'
import { BenchmarkChartWeb } from './BenchmarkChartWeb'
import { useTint } from './useTint'

export function HeroPerformance() {
  const ref = useRef<HTMLElement>(null)
  const [show, setShow] = useState(false)

  useOnIntersecting(ref, ([entry]) => {
    if (entry?.isIntersecting) {
      setTimeout(() => {
        setShow(true)
      }, 800)
    }
  })

  return (
    <ContainerLarge position="relative">
      <YStack ai="center" zi={1} space="$4">
        <YStack ai="center" space="$2">
          <HomeH2 size="$10" maw={500} ref={ref}>
            Automatically fast
          </HomeH2>
          <HomeH3>
            Partial evaluation, tree flattening, hoisting and dead-code&nbsp;elimination&nbsp;✅
          </HomeH3>
        </YStack>

        <YStack
          pos="relative"
          px="$2"
          $sm={{ px: '$0', mx: -20, width: 'calc(100% + 40px)' }}
          h={131}
          br="$8"
          width="100%"
          ai="stretch"
          jc="center"
        >
          <Paragraph
            pos="absolute"
            b={-20}
            r={20}
            mt={-20}
            theme="alt2"
            size="$2"
            $sm={{ display: 'none' }}
          >
            Lower is better. As of February 2022.
          </Paragraph>

          {show && <BenchmarkChartWeb />}
        </YStack>

        <XStack space flexWrap="wrap">
          <BenchmarksLink />
          <CompilerLink />
        </XStack>
      </YStack>
    </ContainerLarge>
  )
}

const BenchmarksLink = () => {
  const { tint } = useTint()
  return (
    <NextLink legacyBehavior href="/docs/intro/benchmarks" passHref>
      <Button
        accessibilityLabel="Performance benchmarks"
        fontFamily="$silkscreen"
        theme={tint}
        tag="a"
      >
        Benchmarks &raquo;
      </Button>
    </NextLink>
  )
}

const CompilerLink = () => {
  const { tint } = useTint()
  return (
    <NextLink legacyBehavior href="/docs/intro/compiler" passHref>
      <Button accessibilityLabel="Compiler" fontFamily="$silkscreen" theme={tint} tag="a">
        About &raquo;
      </Button>
    </NextLink>
  )
}
