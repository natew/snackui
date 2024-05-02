import { useOnIntersecting } from '@tamagui/demos'
import { useTint } from '@tamagui/logo'
import { Link } from '~/link'
import { useRef, useState } from 'react'
import { Button, Paragraph, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'
import { HomeH2, HomeH3 } from './HomeH2'
import { BenchmarkChartWeb } from './BenchmarkChartWeb'

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
      <YStack ai="center" zi={1} gap="$4">
        <YStack ai="center" gap="$2">
          <HomeH2 size="$10" maw={500} ref={ref}>
            Automatically fast
          </HomeH2>
          <HomeH3>
            Partial evaluation, tree flattening, hoisting and
            dead-code&nbsp;elimination&nbsp;✅
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
    <Link prefetch={false} href="/docs/intro/benchmarks">
      <Button
        accessibilityLabel="Performance benchmarks"
        fontFamily="$silkscreen"
        theme={tint as any}
      >
        Benchmarks &raquo;
      </Button>
    </Link>
  )
}

const CompilerLink = () => {
  const { tint } = useTint()
  return (
    <Link prefetch={false} href="/docs/intro/why-a-compiler">
      <Button accessibilityLabel="Compiler" fontFamily="$silkscreen" theme={tint as any}>
        About &raquo;
      </Button>
    </Link>
  )
}
