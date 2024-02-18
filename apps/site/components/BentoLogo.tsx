import { ThemeTintAlt, ThemeTint } from '@tamagui/logo'
import { H1, YStack } from 'tamagui'

export const BentoLogo = ({
  children = 'BENTO',
  scale = 1,
}: { children?: string; scale?: number }) => (
  <YStack h={200} w={600} my={-(1 - scale) * 100} mx={-(1 - scale) * 270} scale={scale}>
    <ThemeTint>
      <H1
        ff="$cherryBomb"
        px="$3"
        mx="$-3"
        whiteSpace="pre"
        color="$color1"
        $theme-dark={{
          color: '$color7',
        }}
        maw="100%"
        f={1}
        ls={-21}
        lh={280}
        my={-45}
        fos={198}
        ussel="none"
        pe="none"
        className="bento-shadow"
        // o={0}
      >
        {children}&nbsp;
      </H1>

      <H1
        // o={0}
        pos="absolute"
        t={0}
        l={0}
        zi={1100}
        ff="$cherryBomb"
        px="$3"
        mx="$-3"
        whiteSpace="pre"
        color="$color8"
        maw="100%"
        f={1}
        ls={-21}
        lh={280}
        my={-45}
        fos={198}
        ussel="none"
        pe="none"
        className="clip-text mask-gradient-down"
        style={{
          backgroundImage: 'linear-gradient(var(--color10), transparent)',
          textShadow: `0 0 10px var(--color025), 0 0 8px rgba(255,255,255,0.2)`,
          maskImage: `linear-gradient(transparent 20%, rgba(0, 0, 0, 1))`,
          // mixBlendMode: 'hard-light',
        }}
      >
        {children}&nbsp;
      </H1>
    </ThemeTint>

    <ThemeTintAlt offset={-2}>
      <H1
        // o={0}
        pos="absolute"
        t={0}
        l={0}
        zi={10}
        ff="$cherryBomb"
        px="$3"
        mx="$-3"
        whiteSpace="pre"
        maw="100%"
        f={1}
        ls={-21}
        lh={280}
        my={-45}
        fos={198}
        ussel="none"
        pe="none"
        className="clip-text mask-gradient-down bento-text-3"
      >
        {children}&nbsp;
      </H1>
    </ThemeTintAlt>

    <ThemeTintAlt>
      <H1
        className="glow-shadow mask-gradient-up"
        pos="absolute"
        t={0}
        l={0}
        zi={1100}
        ff="$cherryBomb"
        px="$3"
        mx="$-3"
        whiteSpace="pre"
        color="$color8"
        maw="100%"
        f={1}
        ls={-21}
        lh={280}
        my={-45}
        fos={198}
        ussel="none"
        pe="none"
        style={{
          filter: 'blur(7px)',
        }}
      >
        {children}&nbsp;
      </H1>
    </ThemeTintAlt>

    {/* <ThemeTintAlt offset={-5}>
      <H1
        pos="absolute"
        t={0}
        l={0}
        zi={1100000000}
        ff="$cherryBomb"
        px="$3"
        mx="$-3"
        whiteSpace="pre"
        color="$color1"
        maw="100%"
        f={1}
        ls={-21}
        lh={280}
        my={-45}
        fos={198}
        ussel="none"
        pe="none"
        style={{
          maskImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0) 60%)`,
          mixBlendMode: 'multiply',
        }}
      >
        {children}&nbsp;
      </H1>
    </ThemeTintAlt> */}
  </YStack>
)
