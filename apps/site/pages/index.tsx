import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { Community } from '@tamagui/site/components/HeroCommunity'
import { FeaturesGrid } from '@tamagui/site/components/HeroFeaturesGrid'
import { Button, XStack, YStack } from 'tamagui'

import { ContainerLarge } from '../components/Container'
import { HeroBelow } from '../components/HeroBelow'
import { HeroExampleAnimations } from '../components/HeroExampleAnimations'
import { HeroExampleCode } from '../components/HeroExampleCode'
import { HeroExampleProps } from '../components/HeroExampleProps'
import { HeroExampleThemes } from '../components/HeroExampleThemes'
import { HeroPerformance } from '../components/HeroPerformance'
import { HeroResponsive } from '../components/HeroResponsive'
import { HeroTypography } from '../components/HeroTypography'
import { HomeGlow } from '../components/HomeGlow'
import { MailingListSignup } from '../components/MailingListSignup'
import { NextLink } from '../components/NextLink'
import { HomeSection, SectionTinted, TintSection } from '../components/TintSection'
import { getCompilationExamples } from '../lib/getCompilationExamples'

export default function Home({ animationCode, compilationExamples }) {
  return (
    <>
      <HomeGlow />
      <TitleAndMetaTags title="Tamagui — React Native + Web UI kit" />
      <TintSection index={0} p={0}>
        <Hero />
      </TintSection>
      <ContainerLarge fd="column" pos="relative" zi={2000}>
        <XStack als="center" pos="absolute" y={-26} jc="center" ai="center" space>
          <MailingListSignup />
          <NextLink href="/blog/version-one">
            <Button
              theme="red"
              als="center"
              elevation="$3"
              size="$4"
              fontFamily="$silkscreen"
              bc="$color1"
              borderColor="$borderColor"
              br="$10"
            >
              1.0
            </Button>
          </NextLink>
        </XStack>
      </ContainerLarge>
      <HeroBelow />
      <TintSection index={2} contain="paint layout" zi={1000}>
        <YStack pe="none" zi={0} fullscreen className="bg-dot-grid mask-gradient-down" />
        <HeroExampleCode examples={compilationExamples} />
      </TintSection>
      <TintSection my={-50} index={3} contain="paint layout" pos="relative" zi={100}>
        <YStack pe="none" zi={0} fullscreen className="bg-dot-grid mask-gradient-down" />
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
        <YStack fullscreen className="bg-grid mask-gradient-up" />
        <HeroExampleAnimations animationCode={animationCode} />
      </TintSection>
      <TintSection index={7} zi={-1}>
        <FeaturesGrid />
        <YStack pe="none" zi={0} fullscreen className="bg-dot-grid mask-gradient-up" />
      </TintSection>
      <TintSection index={8} my="$-4" p={0} zIndex={100}>
        <SectionTinted zi={1000} bubble gradient>
          <HeroTypography />
        </SectionTinted>
      </TintSection>
      <HomeSection zi={10}>
        <YStack pe="none" zi={0} fullscreen className="bg-dot-grid mask-gradient-down" />
        <HeroExampleProps />
      </HomeSection>
      <HomeSection zi={0}>
        <Community />
      </HomeSection>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: getCompilationExamples(),
  }
}
