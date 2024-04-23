import type { MetaFunction } from '@remix-run/node'

import { YStack } from 'tamagui'
import { Hero } from '~/components/Hero'
import { Community } from '~/components/HeroCommunity'
import { FeaturesGrid } from '~/components/HeroFeaturesGrid'

import { ThemeTint } from '@tamagui/logo'
import { HeroBelow } from '~/components/HeroBelow'
import { HeroExampleAnimations } from '~/components/HeroExampleAnimations'
import { HeroExampleCode } from '~/components/HeroExampleCode'
import { HeroExampleProps } from '~/components/HeroExampleProps'
import { HeroExampleThemes } from '~/components/HeroExampleThemes'
import { HeroPerformance } from '~/components/HeroPerformance'
import { HeroResponsive } from '~/components/HeroResponsive'
import { HeroTypography } from '~/components/HeroTypography'
import { HomeGlow } from '~/components/HomeGlow'
import { ThemeNameEffect } from '~/components/ThemeNameEffect'
import { HomeSection, SectionTinted, TintSection } from '~/components/TintSection'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <>
      <ThemeNameEffect colorKey="$color2" />
      <ThemeTint>
        <HomeGlow />
        <YStack
          fullscreen
          className="grain"
          o={0.2}
          style={{
            mixBlendMode: 'hard-light',
            maskImage: `linear-gradient(transparent, rgba(0, 0, 0, 1) 100px)`,
          }}
          // o={0}
        />
        <TintSection index={0} p={0}>
          <Hero />
        </TintSection>
        <HeroBelow />
        <TintSection index={2} contain="paint layout" zi={1000}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HeroExampleCode examples={[]} />
        </TintSection>
        <TintSection my={-50} index={3} contain="paint layout" pos="relative" zi={100}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HeroExampleThemes />
        </TintSection>
        <TintSection index={4} mb={-120} zIndex={10000}>
          <HeroResponsive />
        </TintSection>
        <TintSection index={5} p={0} zIndex={0}>
          <SectionTinted gradient bubble>
            <HeroPerformance />
          </SectionTinted>
        </TintSection>
        <TintSection index={6} zi={100}>
          <YStack
            fullscreen
            className="bg-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HeroExampleAnimations animationCode={``} />
        </TintSection>
        <TintSection index={7} zi={1}>
          <FeaturesGrid />
          <YStack
            pe="none"
            zi={2}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
        </TintSection>
        <TintSection index={8} my="$-4" p={0} zIndex={100}>
          <SectionTinted zi={1000} bubble gradient>
            <HeroTypography />
          </SectionTinted>
        </TintSection>
        <HomeSection zi={10}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HeroExampleProps />
        </HomeSection>
        <HomeSection zi={0}>
          <Community />
        </HomeSection>
      </ThemeTint>
    </>
  )
}
