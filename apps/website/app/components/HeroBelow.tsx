import { ChevronRight, Code, Cpu, Layers } from '@tamagui/lucide-icons'
import { memo } from 'react'
import type { YStackProps } from 'tamagui'
import { H3, Paragraph, XStack, YStack } from 'tamagui'
import { Link } from '~/link'

import { CodeInline } from './Code'
import { ContainerLarge } from './Container'
import { useHeroHovered } from './heroState'
import { IconStack } from './IconStack'

const TitleLink = ({ href, children, ...props }: any) => {
  return (
    <Link prefetch={false} href={href}>
      <H3 cursor="pointer" color="$color" my="$2">
        <CodeInline
          cursor="pointer"
          fontFamily="$silkscreen"
          bg="$color2"
          hoverStyle={{
            backgroundColor: '$color3',
          }}
          size="$9"
          fontSize="$6"
          ls={0}
          {...props}
        >
          {children} <ChevronRight size={12} />
        </CodeInline>
      </H3>
    </Link>
  )
}

export const HeroBelow = memo(() => {
  return (
    <>
      <YStack
        pos="relative"
        zi={1000}
        // elevation="$4"
        // $theme-light={{
        //   elevation: '$1',
        // }}
        py="$4"
        pt="$6"
        pb="$10"
      >
        {/* <YStack fullscreen bg="$color3" zi={-1} o={0.25} btw={1} btc="$borderColor" /> */}

        <HeroBelowContent />
      </YStack>
    </>
  )
})

export const HeroBelowContent = memo(() => {
  const [hovered, setHovered] = useHeroHovered()

  return (
    <ContainerLarge>
      <XStack
        flex={1}
        overflow="hidden"
        maxWidth="100%"
        space="$8"
        flexWrap="nowrap"
        px="$2"
        mb={-8}
        py="$1"
        $sm={{ flexDirection: 'column' }}
        $gtSm={{
          px: '$6',
        }}
      >
        <Section theme="green" onHoverIn={() => setHovered(0)}>
          <IconStack>
            <Code size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/core/configuration">Core</TitleLink>
          <Paragraph o={0.7} size="$5">
            Style React with no outside deps and 100% feature support across web and React
            Native. Adds many missing features to the RN Style API in ~24Kb.
          </Paragraph>
        </Section>

        <Section theme="blue" onHoverIn={() => setHovered(1)}>
          <IconStack>
            <Cpu size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/intro/why-a-compiler">Static</TitleLink>
          <Paragraph o={0.7} size="$5">
            A smart optimizer that does partial analysis, extracts CSS, flattens your
            tree, and removes code. Supports Next, Webpack, Vite, Babel and Metro.
          </Paragraph>
        </Section>

        <Section theme="purple" onHoverIn={() => setHovered(2)}>
          <IconStack>
            <Layers size={16} color="var(--color9)" />
          </IconStack>
          <TitleLink href="/docs/components/stacks">Tamagui</TitleLink>
          <Paragraph o={0.7} size="$5">
            All the components you'd want, cross platform and adaptable to each other.
            Composable Component APIs, styled or unstyled, sizable, themeable, and more.
          </Paragraph>
        </Section>
      </XStack>
    </ContainerLarge>
  )
})

const Section = (props: YStackProps) => (
  <YStack
    width="33%"
    $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }}
    flexShrink={1}
    {...props}
  />
)
