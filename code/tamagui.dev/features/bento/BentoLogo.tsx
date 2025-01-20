import { useTint } from '@tamagui/logo'
import { H1, type ThemeProps, YStack, Theme } from 'tamagui'

const offsetAdjust = 1

export const BentoLogoTheme = ({
  children,
  disable,
  offset = 1,
  ...rest
}: ThemeProps & {
  disable?: boolean
  offset?: number
}) => {
  const curTint = useTint(offset).tintAlt
  const name = disable ? null : curTint
  return (
    <Theme name={name} {...rest}>
      {children}
    </Theme>
  )
}

export const BentoLogo = ({
  children = 'BENTO',
  scale = 1,
  noShadow,
  backgrounded,
}: { children?: string; scale?: number; noShadow?: boolean; backgrounded?: boolean }) => {
  return (
    <YStack
      pe="none"
      h={200}
      w={550}
      x={20}
      my={-(1 - scale) * 100}
      mx={-(1 - scale) * 270}
      scale={scale}
      {...(backgrounded && {
        backgroundColor: '$background',
      })}
    >
      <BentoLogoTheme offset={1 - offsetAdjust}>
        <H1
          componentName="span"
          ff="$cherryBomb"
          px="$3"
          mx="$-3"
          whiteSpace="pre"
          color="$color1"
          $theme-dark={{
            color: '$color8',
          }}
          maw="100%"
          f={1}
          ls={-16}
          lh={280}
          my={-45}
          fos={180}
          ussel="none"
          pe="none"
          className="bento-shadow"
          // o={0}
        >
          {children}&nbsp;
        </H1>
      </BentoLogoTheme>

      <BentoLogoTheme offset={1 + offsetAdjust}>
        <H1
          // o={0}
          pos="absolute"
          t={0}
          x={2}
          l={0}
          zi={1100}
          ff="$cherryBomb"
          px="$3"
          mx="$-3"
          whiteSpace="pre"
          color="$color5"
          $theme-dark={{
            color: '$color8',
          }}
          maw="100%"
          f={1}
          ls={-16}
          lh={280}
          my={-45}
          fos={180}
          ussel="none"
          pe="none"
          style={{
            // backgroundImage: 'linear-gradient(var(--color8), transparent)',
            maskImage: `linear-gradient(transparent 20%, rgba(0, 0, 0, 1))`,
          }}
        >
          {children}&nbsp;
        </H1>
      </BentoLogoTheme>

      {/* <BentoLogoTheme offset={2 + offsetAdjust}>
        <H1
          pos="absolute"
          t={0}
          x={-1}
          l={0}
          zi={10}
          ff="$cherryBomb"
          px="$3"
          mx="$-3"
          whiteSpace="pre"
          maw="100%"
          f={1}
          ls={-16}
          lh={280}
          my={-45}
          fos={180}
          o={0.5}
          ussel="none"
          pe="none"
          className="clip-text mask-gradient-down bento-text-3"
        >
          {children}&nbsp;
        </H1>
      </BentoLogoTheme> */}

      <BentoLogoTheme offset={-1 + offsetAdjust}>
        <H1
          pos="absolute"
          t={0}
          l={0}
          x={1}
          zi={1100000000}
          ff="$cherryBomb"
          px="$3"
          mx="$-3"
          whiteSpace="pre"
          color="$color9"
          maw="100%"
          f={1}
          ls={-16}
          lh={280}
          my={-45}
          fos={180}
          ussel="none"
          pe="none"
          style={{
            maskImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0) 60%)`,
          }}
        >
          {children}&nbsp;
        </H1>
      </BentoLogoTheme>
    </YStack>
  )
}
