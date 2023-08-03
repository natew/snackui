import { ErrorBoundary } from '@components/ErrorBoundary'
import { PoweredByStripeIcon } from '@components/PoweredByStripeIcon'
import { getDefaultLayout } from '@lib/getDefaultLayout'
import { getTakeoutPriceInfo } from '@lib/getProductInfo'
import { stripe } from '@lib/stripe'
import { Database } from '@lib/supabase-types'
import { getArray } from '@lib/supabase-utils'
import { supabaseAdmin } from '@lib/supabaseAdmin'
import { getSize } from '@tamagui/get-token'
import { LogoIcon, LogoWords, ThemeTint, ThemeTintAlt, useTint } from '@tamagui/logo'
import { Check, Dot, Hammer, Info, PlayCircle, X } from '@tamagui/lucide-icons'
import { useClientValue } from '@tamagui/use-did-finish-ssr'
import { Store, createUseStore } from '@tamagui/use-store'
import { ContainerXL } from 'components/Container'
import { useUser } from 'hooks/useUser'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React, { Suspense, memo, useEffect, useMemo, useState } from 'react'
import Stripe from 'stripe'
import {
  AnimatePresence,
  Button,
  ButtonProps,
  Checkbox,
  Circle,
  Dialog,
  FontSizeTokens,
  GetProps,
  H1,
  H2,
  H3,
  H4,
  H5,
  Input,
  Label,
  Paragraph,
  RadioGroup,
  ScrollView,
  Separator,
  Sheet,
  SizableText,
  Spacer,
  Stack,
  TabLayout,
  Tabs,
  TabsProps,
  TabsTabProps,
  Theme,
  ThemeName,
  TooltipSimple,
  Unspaced,
  XStack,
  XStackProps,
  YStack,
  YStackProps,
  composeRefs,
  isClient,
  styled,
  useMedia,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import { useHoverGlow } from '../components/HoverGlow'
import { LoadCherryBomb, LoadMunro } from '../components/LoadFont'
import { NextLink } from '../components/NextLink'

const points = {
  // this one's only shown on modal
  modal: ['Lifetime rights'],
  monorepo: [
    'Well-isolated configuration.',
    '100% shared code between web and native.',
    'Scripts for running your dev env in one command.',
  ],
  design: [
    'Complete design system with the new ThemeBuilder for easy customization.',
    'Two brand new theme packs - Neon and Pastel.',
  ],
  deploy: [
    'Vercel + Preview Deploys.',
    'Expo EAS + Expo Router.',
    'Script that sets up both local and remote dev environments.',
  ],
  screens: [
    '100% shared native and web, adapted to each platform.',
    'Onboarding, auth, account, settings, profile, feed, edit profile.',
    // 'Adapted to each platform.',
    'Universal form system + validation.',
  ],
  assets: [
    '+150 icon packs, adapted to use themes, sizing, and tree shaking.',
    'All of Google fonts, over +1500 packs.',
    'More every month.',
  ],
  more: [
    'Image upload and Supabase utils.',
    'Reanimated, Solito, React Query, Zod & more',
    'TakeoutBot ongoing updates.',
    // 'Test, lint, CI/CD.',
    'Private Discord channel.',
  ],
}

const ua = (() => {
  if (typeof window === 'undefined') return
  return window.navigator.userAgent
})()

const isWebkit = (() => {
  return !!ua?.match(/WebKit/i)
})()

const isSafariMobile = (() => {
  const iOS = !!ua?.match(/iPad/i) || !!ua?.match(/iPhone/i)
  return isClient && iOS && isWebkit && !ua?.match(/CriOS/i)
})()

const TakeoutBox3D = dynamic(() => import('../components/TakeoutBox3D'), { ssr: false })
const TakeoutGallery = dynamic(() => import('../components/TakeoutGallery'), {
  ssr: false,
})

const heroHeight = 1100

type TakeoutPageProps = {
  starter: Database['public']['Tables']['products']['Row'] & {
    prices: Database['public']['Tables']['prices']['Row'][]
  }
  iconsPack: Database['public']['Tables']['products']['Row'] & {
    prices: Database['public']['Tables']['prices']['Row'][]
  }
  fontsPack: Database['public']['Tables']['products']['Row'] & {
    prices: Database['public']['Tables']['prices']['Row'][]
  }
  coupon: Stripe.Coupon | null
}

const TakeoutCard2Frame = styled(YStack, {
  className: 'blur-8',
  borderWidth: 1,
  borderColor: '$borderColor',
  minWidth: 302,
  maxWidth: 302,
  minHeight: 302,
  maxHeight: 302,
  overflow: 'hidden',

  variants: {
    size: {
      '...size': (val) => ({
        elevation: val,
        p: val as any,
        br: val as any,
      }),
    },
  } as const,

  defaultVariants: {
    size: '$6',
  },
})

type TakeoutCardFrameProps = GetProps<typeof TakeoutCard2Frame> & {
  title: React.ReactNode
  icon?: string
}

const TakeoutCard = ({ children, title, icon, ...props }: TakeoutCardFrameProps) => {
  const innerGlow = useHoverGlow({
    resist: 40,
    size: 150,
    strategy: 'blur',
    blurPct: 100,
    // inverse: true,
    color: 'var(--color10)',
    opacity: 0.5,
    background: 'transparent',
    style: {
      transition: `all ease-out 300ms`,
    },
  })

  const borderGlow = useHoverGlow({
    resist: 0,
    size: 200,
    strategy: 'blur',
    blurPct: 100,
    color: 'var(--color11)',
    opacity: 1,
    background: 'transparent',
  })

  return (
    <>
      <TakeoutCard2Frame
        {...props}
        ref={composeRefs(borderGlow.parentRef, innerGlow.parentRef) as any}
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip">
              <path d="M285,0 C293.284271,-1.52179594e-15 300,6.71572875 300,15 L300,285 C300,293.284271 293.284271,300 285,300 L15,300 C6.71572875,300 1.01453063e-15,293.284271 0,285 L0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 L285,0 Z M285,1 L15,1 C7.2680135,1 1,7.2680135 1,15 L1,15 L1,285 C1,292.731986 7.2680135,299 15,299 L15,299 L285,299 C292.731986,299 299,292.731986 299,285 L299,285 L299,15 C299,7.2680135 292.731986,1 285,1 L285,1 Z"></path>
            </clipPath>
          </defs>
        </svg>

        <innerGlow.Component />
        <YStack
          fullscreen
          style={{
            clipPath: `url(#myClip)`,
          }}
        >
          <borderGlow.Component />
        </YStack>

        <YStack f={1} space zi={100}>
          <H2 color="$color10" fontFamily="$munro" size="$10" my={-8}>
            {title}
          </H2>
          {children}

          {!!icon && (
            <YStack pos="absolute" b={0} r={0}>
              <Image className="pixelate" src={icon} alt="Icon" width={52} height={52} />
            </YStack>
          )}
        </YStack>
      </TakeoutCard2Frame>
    </>
  )
}

const TakeoutHero = ({ coupon }: Pick<TakeoutPageProps, 'coupon'>) => {
  const disableMotion = useDisableMotion()
  const enable3d = useClientValue(
    () => !isSafariMobile && !window.location.search?.includes('disable-3d')
  )

  // unfortunately costs too much perf
  // const glow = useHoverGlow({
  //   resist: 80,
  //   size: 800,
  //   strategy: 'blur',
  //   blurPct: 100,
  //   color: 'var(--color9)',
  //   opacity: 0.09,
  //   offset: {
  //     y: -200,
  //     x: -70,
  //   },
  //   style: {
  //     zIndex: -1,
  //   },
  //   background: 'transparent',
  // })

  return (
    <YStack
      y={heroHeight / 2 - 480}
      ai="center"
      jc="center"
      className="ease-in ms300 all"
      pe="none"
      pos="relative"
      scale={1}
      $xxs={{
        scale: 0.35,
      }}
      $xs={{
        scale: 0.45,
      }}
      $sm={{
        scale: 0.65,
      }}
      $md={{
        scale: 0.85,
      }}
      // ref={glow.parentRef as any}
    >
      {/* <ThemeTint>
        <glow.Component />
      </ThemeTint> */}

      {/* animated borders shine */}
      {/* <YStack pos="absolute" y={5}>
        <ThemeTintAlt>
          <TAKEOUT className="theme-shadow clip-slice" zi={100} color="transparent" />
        </ThemeTintAlt>
      </YStack> */}

      <YStack
        pos="absolute"
        style={{
          clipPath: `polygon(0% 0%, 0% 0%, 100% 100%, 100% 0%, 90% 0, 10% 100%)`,
        }}
      >
        <ThemeTint>
          <TAKEOUT className="text-3d" zi={1000} color="$color10" />
        </ThemeTint>
      </YStack>

      <YStack
        mt={0}
        className="mix-blend"
        style={{
          clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 0% 0%, 90% 0, 10% 100%)`,
        }}
      >
        <TAKEOUT zi={1000} />

        {!disableMotion && (
          <ThemeTint>
            {/* main color slices */}
            <TAKEOUT
              className="clip-slice mix-blend"
              pos="absolute"
              color="$color8"
              scale={1.04}
              o={1}
            />

            {/* alt color slices */}
            <ThemeTintAlt>
              <TAKEOUT
                className="clip-slice mix-blend animate-fade2 slice-alt"
                pos="absolute"
                color="$color8"
                y={2}
                o={1}
              />
            </ThemeTintAlt>

            {/* alt color slices */}

            <ThemeTintAlt offset={3}>
              <TAKEOUT
                className="clip-wave mix-blend"
                pos="absolute"
                color="$color8"
                scale={1}
              />
            </ThemeTintAlt>
          </ThemeTint>
        )}

        {/* <YStack
          pos="absolute"
          fullscreen
          zi={2}
          pe="none"
          ai="center"
          jc="center"
          y={30}
          scaleX={0.95}
        >
          <TAKEOUT className="bg-dot-grid clip-text" />
        </YStack> */}

        {/* takeout shadow */}
        {/* <YStack
          pos="absolute"
          fullscreen
          zi={-1}
          pe="none"
          ai="center"
          jc="center"
          y={-20}
        >
          <TAKEOUT color="$color3" className="" />
        </YStack> */}
      </YStack>
      <YStack
        position="absolute"
        pe="none"
        top={300}
        r="-5%"
        $lg={{ r: '-15%' }}
        $md={{ r: '-50%' }}
        $sm={{ r: '-90%' }}
        zIndex={-1}
      >
        {enable3d && (
          <Suspense fallback={null}>
            <ErrorBoundary noMessage>
              <TakeoutBox3D />
            </ErrorBoundary>
          </Suspense>
        )}
      </YStack>

      <XStack
        zi={1000}
        my={21}
        bottom={-100}
        pos="absolute"
        gap={50}
        f={1}
        alignSelf="center"
        jc="space-between"
        className="mix-blend"
        pe="auto"
        $sm={{
          dsp: 'none',
        }}
      >
        <FeatureIcon
          themeIndex={0}
          title="Monorepo"
          icon="retro-icons/coding-apps-websites-module-21.svg"
        />

        <FeatureIcon
          themeIndex={1}
          title="Design"
          icon="retro-icons/design-color-painting-palette-25.svg"
        />

        <FeatureIcon
          themeIndex={2}
          title="Deploy"
          icon="retro-icons/computers-devices-electronics-vintage-mac-54.svg"
        />

        <FeatureIcon
          themeIndex={3}
          title="Themes"
          icon="retro-icons/design-color-bucket-brush-63.svg"
        />

        <FeatureIcon
          themeIndex={4}
          title="Screens"
          icon="retro-icons/coding-app-website-ui-62.svg"
        />

        <FeatureIcon
          themeIndex={5}
          title="Assets"
          icon="retro-icons/coding-apps-websites-plugin-33.svg"
        />

        <FeatureIcon
          themeIndex={6}
          title="& More"
          icon="retro-icons/coding-apps-websites-programming-hold-code-9.svg"
        />
      </XStack>
    </YStack>
  )
}

const useDisableMotion = () => {
  return useClientValue(
    isClient &&
      (window.matchMedia(`(prefers-reduced-motion: reduce)`)?.matches ||
        window.location.search?.includes('disable-motion') ||
        /firefox/i.test(navigator.userAgent))
  )
}

export default function TakeoutPage({
  starter,
  fontsPack,
  iconsPack,
  coupon,
}: TakeoutPageProps) {
  const store = useTakeoutStore()
  const disableMotion = useDisableMotion()

  return (
    <>
      <>
        <NextSeo
          title="🥡 Tamagui Takeout"
          description="Tamagui Takeout React Native Bootstrap Starter Kit"
        />
        <Head>
          <LoadCherryBomb />
          <LoadCherryBomb />
          <LoadMunro />
          <script src="https://cdn.paritydeals.com/banner.js" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
.parity-banner {
    position: fixed!important;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`,
            }}
          />
        </Head>
      </>

      {/* <Glow /> */}

      <PurchaseModal
        coupon={coupon}
        starter={starter}
        iconsPack={iconsPack}
        fontsPack={fontsPack}
      />
      <FaqModal />
      <AgreementModal />

      {/* gradient on the end of the page */}
      <ThemeTint>
        <YStack
          zi={-1}
          fullscreen
          style={{
            background: `linear-gradient(to bottom, transparent, transparent, var(--color3))`,
          }}
        />
      </ThemeTint>

      <YStack>
        <ContainerXL>
          <YStack h={0} mah={0}>
            <YStack position="absolute" t={20} r="5%">
              <PurchaseButton
                onPress={() => {
                  store.showPurchase = true
                }}
                size="$4"
              >
                Purchase
              </PurchaseButton>
            </YStack>

            {coupon && (
              <YStack
                position="absolute"
                $gtXs={{
                  right: '5%',
                  top: 150,
                }}
                $xs={{
                  top: '65vh',
                  left: 0,
                  right: 0,
                  ai: 'center',
                  jc: 'center',
                }}
                zIndex="$5"
              >
                <DiscountText coupon={coupon} />
              </YStack>
            )}

            <PromoVideo />

            <TakeoutHero coupon={coupon} />
          </YStack>

          <YStack t={heroHeight - 1000} l={-100} pos="absolute" b={0} zi={-3}>
            <Separator o={0.75} vertical h={4100} pos="absolute" l={0.5} />
            <Separator o={0.75} vertical h={4100} pos="absolute" r={0} />

            <YStack t={750} px="$6">
              <Separator o={0.75} w={3000} pos="absolute" t={0.5} l={-1000} />
              <Separator o={0.75} w={3000} pos="absolute" b={0} l={-1000} />

              <YStack mb="$6" space="$4">
                <H2 ta="right" fontFamily="$munro" o={0.1}>
                  x
                </H2>
                <LogoIcon />
              </YStack>

              <H2
                t={-100}
                pos="absolute"
                fontFamily="$munro"
                tt="uppercase"
                x={-650}
                scale={0.5}
                rotate="-90deg"
                o={0.15}
                ls={15}
                w={4000}
              >
                A new take on bootstrapping · A new take on bootstrapping · A new take on
                bootstrapping · A new take on bootstrapping
              </H2>
            </YStack>
          </YStack>

          <XStack mt={heroHeight} space="$10" $md={{ fd: 'column' }}>
            <XStack
              f={1}
              p="$10"
              mt={20}
              $md={{
                flexDirection: 'column-reverse',
              }}
              $lg={{
                p: '$6',
              }}
              $sm={{
                p: '$4',
              }}
            >
              <YStack mt={-500} $md={{ mt: 0 }} ml={20} mr={0}>
                <StarterCard product={starter} />
              </YStack>

              <YStack f={1} space="$5">
                <MunroP
                  className="mix-blend pixelate"
                  mt={-350}
                  mb={-20}
                  size="$7"
                  ls={4}
                  o={0.5}
                  $sm={{
                    size: '$4',
                  }}
                >
                  Universal React Native + Web Starter Kit
                </MunroP>

                <ThemeTint>
                  <H2
                    className="clip-text mix-blend text-wrap-balance"
                    ff="$cherryBomb"
                    size="$12"
                    fontSize={96}
                    lh="$11"
                    color="$color10"
                    mb="$4"
                    style={{
                      // @ts-ignore
                      backgroundImage: `-webkit-linear-gradient(100deg, var(--color9), yellow)`,
                    }}
                    $gtLg={{
                      mr: 100,
                    }}
                    $lg={{
                      size: '$10',
                      mr: 50,
                    }}
                    $sm={{
                      size: '$9',
                      lh: '$8',
                      mr: 0,
                    }}
                  >
                    From idea to shipped in less time than ever
                  </H2>
                </ThemeTint>

                <ThemeTint>
                  <MunroP className="callout" size="$10" $sm={{ size: '$9' }}>
                    We can't promise everything...
                  </MunroP>
                </ThemeTint>

                <ThemeTint>
                  <MunroP
                    style={{ textShadow: '0 1px 1px var(--color9)' }}
                    size="$9"
                    fow="400"
                    $sm={{ size: '$8' }}
                  >
                    Success is up to you. But we can say you've found the cheat code to
                    shipping top quality web and native apps as fast as possible.
                  </MunroP>
                </ThemeTint>

                <HeartsRow />

                <Paragraph size="$9" $sm={{ size: '$8' }} $xs={{ size: '$7' }} fow="400">
                  Takeout 🥡 is a bootstrap that delivers on years of effort to put
                  together a better React Native and web stack.
                </Paragraph>

                <Paragraph
                  theme="alt1"
                  size="$8"
                  $sm={{ size: '$7' }}
                  $xs={{ size: '$6' }}
                  fow="400"
                >
                  Powered by{' '}
                  <LogoWords tag="span" display="inline-flex" mx="$3" scale={1.1} />,
                  within an hour you'll be deploying on the web to Vercel and to
                  iOS/Android app stores via Expo EAS. Featuring all new themes, 150 new
                  icon packs, 1,500 new fonts, and much more.
                </Paragraph>

                <Spacer size="$6" />

                <YStack marginTop={-260} marginBottom={-890} x={700} zi={-1}>
                  <div
                    style={{
                      transform: 'rotateX(41deg) rotateZ(33deg)',
                      transformStyle: 'preserve-3d',
                      width: 715 * 0.75,
                      borderRadius: 78,
                      boxShadow: '0 0 30px 40px rgba(0,0,0,1)',
                    }}
                  >
                    <Image
                      alt="iPhone screenshot of Tamagui"
                      src="/tama-phone.svg"
                      width={715 * 0.75}
                      height={1467 * 0.75}
                    />
                  </div>
                </YStack>

                <XStack fw="wrap" gap="$3" mx="$-10" ai="center" jc="center">
                  <TakeoutCard
                    theme="orange"
                    title="Monorepo"
                    icon="retro-icons/coding-apps-websites-module-21.svg"
                  >
                    <YStack space="$2">
                      {points.monorepo.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                  <TakeoutCard
                    theme="yellow"
                    title="Design"
                    icon="retro-icons/design-color-painting-palette-25.svg"
                  >
                    <YStack space="$2">
                      {points.design.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                  <TakeoutCard
                    theme="green"
                    title="Deploy"
                    icon="retro-icons/computers-devices-electronics-vintage-mac-54.svg"
                  >
                    <YStack space="$2">
                      {points.deploy.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                  <TakeoutCard
                    theme="blue"
                    title="Screens"
                    icon="retro-icons/coding-app-website-ui-62.svg"
                  >
                    <YStack space="$2">
                      {points.screens.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                  <TakeoutCard
                    theme="purple"
                    title="Assets"
                    icon="retro-icons/coding-apps-websites-plugin-33.svg"
                  >
                    <YStack space="$2">
                      {points.assets.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                  <TakeoutCard
                    theme="pink"
                    title="& More"
                    icon="retro-icons/coding-apps-websites-programming-hold-code-9.svg"
                  >
                    <YStack space="$2">
                      {points.more.map((point, idx, arr) => (
                        <Point
                          key={point}
                          size="$4"
                          mr={arr.length === idx + 1 ? '$10' : undefined}
                        >
                          {point}
                        </Point>
                      ))}
                    </YStack>
                  </TakeoutCard>
                </XStack>

                <Spacer />

                <ThemeTint>
                  <YStack
                    p="$6"
                    mt="$8"
                    className="blur-medium"
                    px="$8"
                    space="$5"
                    elevation="$6"
                    br="$10"
                    $sm={{
                      px: '$4',
                      mx: '$-4',
                    }}
                  >
                    <YStack pe="none" br="$10" zi={-1} fullscreen bc="$color6" o={0.2} />
                    <YStack pe="none" br="$10" zi={-1} fullscreen bc="$color" o={0.1} />
                    <YStack
                      pos="absolute"
                      t={-400}
                      o={0.2}
                      r={-400}
                      pe="none"
                      w={1000}
                      h={1000}
                      scale={1.5}
                      style={{
                        background: 'radial-gradient(var(--color9), transparent 70%)',
                      }}
                    />

                    <YStack
                      bc="#000"
                      rotate="-2deg"
                      mt={-130}
                      mb={20}
                      px="$6"
                      py="$2"
                      elevation="$4"
                      als="center"
                      br="$5"
                    >
                      <Paragraph
                        color="$color9"
                        fontFamily="$munro"
                        size="$9"
                        $sm={{ size: '$8' }}
                        fow="800"
                        ta="center"
                      >
                        Speedrun from 0-to-100 🥡
                      </Paragraph>
                      <Paragraph
                        color="$color9"
                        fontFamily="$munro"
                        size="$8"
                        mt={-10}
                        $sm={{ dsp: 'none' }}
                        fow="800"
                        ta="center"
                      >
                        (...but don't forget the long run)
                      </Paragraph>
                    </YStack>

                    <Paragraph
                      fontFamily="$cherryBomb"
                      size="$9"
                      color="$color11"
                      className="text-3d"
                      ls={-1}
                      $sm={{ size: '$8' }}
                      fow="400"
                      mb="$4"
                    >
                      It's not just about shipping fast.
                    </Paragraph>

                    <Paragraph size="$8" $sm={{ size: '$7' }} fow="400">
                      Takeout is a template repo *and a bot* that's designed with
                      pluggable, well-isolated features. Whenever we make significant
                      updates, we trigger the TakeoutBot to send over a PR.
                    </Paragraph>

                    <ThemeTintAlt>
                      <Paragraph
                        className="text-shadow"
                        size="$7"
                        $sm={{ size: '$6' }}
                        fow="400"
                        color="$color9"
                      >
                        That means you get constant improvements to your codebase.
                      </Paragraph>
                    </ThemeTintAlt>

                    <Paragraph size="$7" $sm={{ size: '$6' }} fow="400">
                      It's why we've set up pricing the way we have: lifetime rights,
                      1-year of updates. Each year renewal is only 50% of the original
                      purchase price.
                    </Paragraph>

                    <Paragraph size="$7" $sm={{ size: '$6' }} fow="400">
                      Forever pricing wouldn't incentivize us to keep innovating, and we
                      have big plans to make Takeout the best stack, period.
                    </Paragraph>

                    <Paragraph size="$7" $sm={{ size: '$6' }} fow="400">
                      There's a lot of nice stuff coming soon as a PR to your repo:
                    </Paragraph>

                    <ThemeTintAlt>
                      <XStack tag="ul" fw="wrap" gap="$5" my="$4">
                        <Bullet status="done">Storybook</Bullet>
                        <Bullet status="building">Maestro integration tests</Bullet>
                        <Bullet status="building">Simple state management system</Bullet>
                        <Bullet status="building">Reanimated modules</Bullet>
                        <Bullet status="building">Layout animations</Bullet>
                        <Bullet status="building">Tamagui CLI: Doctor</Bullet>
                        <Bullet status="building">Tamagui CLI: Upgrade</Bullet>
                        <Bullet>Playwright integration tests</Bullet>
                        <Bullet>Notifications</Bullet>
                        <Bullet>Alternative deployment targets</Bullet>
                        <Bullet>Simple data fetching library</Bullet>
                        <Bullet>Premium font add-ons</Bullet>
                        <Bullet>Unified RN and web testing tools</Bullet>
                        <Bullet>Improved CI/CD and caching</Bullet>
                        <Bullet>MDX support via tamagui.dev config</Bullet>
                        <Bullet>Replicache integration</Bullet>
                      </XStack>
                    </ThemeTintAlt>

                    <Spacer />
                  </YStack>
                </ThemeTint>

                <Spacer />

                <ThemeTint>
                  <Paragraph
                    className="text-3d"
                    als="center"
                    fontFamily="$cherryBomb"
                    size="$10"
                  >
                    Take a peek
                  </Paragraph>
                </ThemeTint>

                <Spacer />

                <YStack mih={530}>
                  <Lazy>
                    <TakeoutGallery />
                  </Lazy>
                </YStack>

                <Spacer />
                <Separator />

                <XStack my="$8" gap="$4" f={1} jc="space-around">
                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-app-website-ui-62.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-browser-bugs-2-58.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-database-60.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-bucket-brush-63.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-palette-sample-26.svg"
                    alt="Icon"
                    width={28}
                    height={28}
                  />
                </XStack>

                <MunroP size="$10" $sm={{ size: '$9' }}>
                  A reference design for a building a truly high quality app - that keeps
                  improving.
                </MunroP>

                <HeartsRow />

                <MunroP size="$10" $sm={{ size: '$9' }} color="$yellow10">
                  We hope you enjoy.
                </MunroP>

                <MunroP size="$3" o={0.3}>
                  These statements have not been approved by the FDA. Talk to your doctor
                  before trying Tamagui Takeout. Side effects may include spending way too
                  much time tweaking color palettes when you should be just shipping your
                  damn app.
                </MunroP>
              </YStack>
            </XStack>

            <YStack mt={200} w={3} mih={500} h="100%" $sm={{ display: 'none' }} />
          </XStack>

          <YStack pos="absolute" t={150} r={-520} rotate="120deg" o={0.045} zi={-2}>
            <Image
              alt="mandala"
              width={2500}
              height={2500}
              src="/takeout/geometric.svg"
            />
          </YStack>

          <Spacer size="$10" />
        </ContainerXL>
      </YStack>
    </>
  )
}

const Point = ({
  size = '$4',
  children,
  subtitle,
  ...props
}: XStackProps & {
  children: any
  subtitle?: any
  size?: FontSizeTokens
}) => {
  return (
    <XStack tag="li" ai="flex-start" space f={1} ov="hidden" {...props}>
      <YStack py="$1.5">
        <Check size={16} color="$color10" />
      </YStack>
      <YStack f={1}>
        <Paragraph wordWrap="break-word" size={size}>
          {children}
        </Paragraph>
        {!!subtitle && (
          <Paragraph
            size={
              getSize(size, {
                shift: -2,
              }) as any
            }
            theme="alt2"
            o={0.5}
          >
            {subtitle}
          </Paragraph>
        )}
      </YStack>
    </XStack>
  )
}

const IconFrame = styled(Stack, {
  borderRadius: 1000,
  p: '$2',
  bc: 'rgba(255, 255, 255, 0.035)',
})

class TakeoutStore extends Store {
  showPurchase = false
  showFaq = false
  showAgreement = false
  promoInputIsOpen = false
  appliedCoupon: Stripe.Coupon | null = null
  appliedPromoCode: string | null = null
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount)
}
const useTakeoutStore = createUseStore(TakeoutStore)

const PurchaseModal = ({ starter, iconsPack, fontsPack, coupon }: TakeoutPageProps) => {
  const products = [starter, iconsPack, fontsPack]
  // const prices = products.prices
  const store = useTakeoutStore()
  // const [selectedPriceId, setSelectedPriceId] = useState(prices[prices.length - 1].id)
  const [selectedProductsIds, setSelectedProductsIds] = useState<string[]>(
    products.map((p) => p.id)
  )
  const sortedStarterPrices = starter.prices.sort(
    (a, b) => a.unit_amount! - b.unit_amount!
  )

  const [starterPriceId, setStarterPriceId] = useState(sortedStarterPrices[0].id)
  // const selectedProducts = products.filter((p) => selectedProductsIds.includes(p.id))
  const { data } = useUser()
  const subscriptions = data?.subscriptions
  // const subscription = subscriptions?.find((sub) => {
  //   if (sub.status !== 'active') return false
  //   const price = sub.prices
  //     ? Array.isArray(sub.prices)
  //       ? sub.prices[0]
  //       : sub.prices
  //     : null
  //   if (!price) return false
  //   return price.product_id === products.id
  // })
  // const sortedPrices = prices.sort((a, b) => (a.unit_amount ?? 0) - (b.unit_amount ?? 0))

  const sum = useMemo(() => {
    let final = 0
    if (selectedProductsIds.includes(starter.id)) {
      final += starterPriceId
        ? starter.prices.find((p) => p.id === starterPriceId)?.unit_amount ?? 0
        : 0
    }
    if (selectedProductsIds.includes(iconsPack.id)) {
      final += iconsPack.prices[0].unit_amount ?? 0
    }
    if (selectedProductsIds.includes(fontsPack.id)) {
      final += fontsPack.prices[0].unit_amount ?? 0
    }
    return final
  }, [selectedProductsIds, starterPriceId, starter, iconsPack, fontsPack])

  // with discount applied
  const finalPrice = useMemo(() => {
    const appliedCoupon = store.appliedCoupon ?? coupon
    if (appliedCoupon) {
      if (appliedCoupon.amount_off) return sum - appliedCoupon.amount_off
      if (appliedCoupon.percent_off)
        return (sum * (100 - appliedCoupon.percent_off)) / 100
    }

    return sum
  }, [sum, store.appliedCoupon, coupon])
  const hasDiscountApplied = finalPrice !== sum

  const noProductSelected = selectedProductsIds.length === 0
  const showTeamSelect = selectedProductsIds.includes(starter.id)

  const takeoutPriceInfo = getTakeoutPriceInfo(
    starter.prices.find((price) => price.id === starterPriceId)?.description ?? ''
  )
  return (
    <Dialog
      modal
      open={store.showPurchase}
      onOpenChange={(val) => {
        store.showPurchase = val
      }}
    >
      <Dialog.Adapt when="sm">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Sheet.ScrollView>
              <Dialog.Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Dialog.Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          className="blur-medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          // animateOnly={['transform']}
          enterStyle={{ opacity: 0, scale: 0.975 }}
          exitStyle={{ opacity: 0, scale: 0.975 }}
          w="90%"
          maw={900}
        >
          <ScrollView $gtSm={{ maxHeight: '90vh' }}>
            <YStack space>
              <XStack ai="center" jc="center" gap="$6" mx="$8">
                <Dialog.Title py="$2" size="$9" $sm={{ size: '$7' }} my="$1" als="center">
                  Purchase 🥡
                </Dialog.Title>
              </XStack>

              <YStack my="$2">
                <YStack gap="$4" $gtSm={{ fd: 'row' }} flexWrap="wrap">
                  {products.map((product) => {
                    const active = selectedProductsIds.includes(product.id)
                    const price = product.prices[0]
                    const htmlId = `check-${price.id}`
                    // const hasSubscription =
                    const subscription = subscriptions?.find((sub) => {
                      if (sub.status !== 'active') return false
                      const items = sub.subscription_items
                        ? Array.isArray(sub.subscription_items)
                          ? sub.subscription_items
                          : [sub.subscription_items]
                        : []
                      return !!items.find((i) =>
                        Array.isArray(i.prices) ? i.prices[0] : i.prices
                      )
                      //   const price = sub.prices
                      //   ? Array.isArray(sub.prices)
                      //     ? sub.prices[0]
                      //     : sub.prices
                      //   : null
                      // if (!price) return false
                      // return price.product_id === product.id
                    })

                    const onChange = (value: boolean) => {
                      setSelectedProductsIds(
                        active
                          ? selectedProductsIds.filter((id) => id !== product.id)
                          : [...selectedProductsIds, product.id]
                      )
                    }

                    return (
                      <ThemeTint key={price.id} disable={!active}>
                        <Label
                          f={1}
                          htmlFor={htmlId}
                          p="$4"
                          height="unset"
                          display="flex"
                          borderWidth="$0.25"
                          backgroundColor={active ? '$color7' : '$color5'}
                          borderColor={active ? '$color8' : '$color7'}
                          borderRadius="$4"
                          space="$4"
                          ai="flex-start"
                          $gtSm={{
                            maw: 'calc(33% - 8px)',
                          }}
                          hoverStyle={{
                            borderColor: active ? '$color10' : '$color7',
                          }}
                        >
                          <Checkbox
                            checked={active}
                            onCheckedChange={onChange}
                            id={htmlId}
                            size="$6"
                            value={price.id}
                          >
                            <Checkbox.Indicator
                            // backgroundColor={active ? '$color8' : '$color1'}
                            >
                              <Check />
                            </Checkbox.Indicator>
                          </Checkbox>

                          <YStack gap="$2" f={1}>
                            <H3 lh="$6">{product.name}</H3>
                            <Paragraph size="$3" lh="$1" theme="alt2">
                              {product.description}
                            </Paragraph>
                          </YStack>
                        </Label>
                      </ThemeTint>
                    )
                  })}
                </YStack>
              </YStack>

              <XStack
                f={1}
                space
                separator={<Separator vertical />}
                $sm={{ fd: 'column-reverse' }}
              >
                <ScrollView space $gtSm={{ w: '55%' }} ov="hidden">
                  <YStack
                    separator={<Separator o={0.35} />}
                    borderWidth="$0.5"
                    borderRadius="$4"
                    borderColor="$borderColor"
                  >
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6" fow="bold">
                          Lifetime access + 1 year of updates
                        </Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          You own the code for life, with updates for a year
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">✅</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">License Seats</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Number of people that are allowed to develop on the starter
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{takeoutPriceInfo.licenseSeats}</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Public Releases</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Number public domains deployed to
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">
                          {takeoutPriceInfo.publicDomainUses}
                        </Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Play Store Apps</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Number of Android apps to publish
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">
                          {takeoutPriceInfo.androidAppsPublished}
                        </Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">App Store Apps</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Number of iOS apps to publish
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">
                          {takeoutPriceInfo.iosAppsPublished}
                        </Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Discord Seats</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Access to the Takeout channel
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{takeoutPriceInfo.discordSeats}</Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">Discord Private Channel</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Private chat for your team only
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">
                          {takeoutPriceInfo.hasDiscordPrivateChannels ? '✅' : '❌'}
                        </Paragraph>
                      </XStack>
                    </XStack>
                    <XStack px="$4" py="$3" gap="$3">
                      <YStack width="80%">
                        <Paragraph size="$6">GitHub Seats</Paragraph>
                        <Paragraph size="$2" theme="alt2">
                          Direct access to source code and issues
                        </Paragraph>
                      </YStack>
                      <XStack f={1} ai="center" gap="$2" jc="center">
                        <Paragraph size="$8">{takeoutPriceInfo.githubSeats}</Paragraph>
                      </XStack>
                    </XStack>
                  </YStack>
                  {/* <YStack space="$4">
                    <Points />
                  </YStack> */}
                </ScrollView>

                <YStack f={1} space="$4">
                  <YStack
                    opacity={showTeamSelect ? 1 : 0.25}
                    pointerEvents={showTeamSelect ? 'auto' : 'none'}
                  >
                    <RadioGroup
                      gap="$2"
                      value={starterPriceId}
                      onValueChange={(val) => setStarterPriceId(val)}
                    >
                      {sortedStarterPrices.map((price) => {
                        const active = starterPriceId === price.id
                        const htmlId = `price-${price.id}`
                        return (
                          <ThemeTint key={price.id} disable={!active}>
                            <Label
                              f={1}
                              htmlFor={htmlId}
                              p="$4"
                              height="unset"
                              display="flex"
                              borderWidth="$0.25"
                              borderColor={active ? '$color8' : '$color5'}
                              borderRadius="$4"
                              space="$4"
                              ai="center"
                              hoverStyle={{
                                borderColor: active ? '$color10' : '$color7',
                              }}
                            >
                              <RadioGroup.Item id={htmlId} size="$6" value={price.id}>
                                <RadioGroup.Indicator />
                              </RadioGroup.Item>

                              <YStack gap="$0" f={1}>
                                <H4 mt="$-1">{price.description}</H4>

                                <Paragraph theme="alt1">
                                  {formatPrice(price.unit_amount! / 100, 'usd')} base + 1
                                  year of updates
                                </Paragraph>
                                <Paragraph theme="alt1" size="$2">
                                  {formatPrice(price.unit_amount! / (100 * 2), 'usd')}{' '}
                                  annual renewal (cancel anytime)
                                </Paragraph>
                              </YStack>
                            </Label>
                          </ThemeTint>
                        )
                      })}
                    </RadioGroup>
                  </YStack>

                  <Spacer size="$1" />

                  <YStack space>
                    <XStack ai="flex-end" jc="flex-end" gap="$2">
                      {hasDiscountApplied ? (
                        <>
                          <H3 textDecorationLine="line-through" size="$8" theme="alt2">
                            {formatPrice(sum! / 100, 'usd')}
                          </H3>
                          <H3 size="$10">{formatPrice(finalPrice! / 100, 'usd')}</H3>
                        </>
                      ) : (
                        <H3 size="$10">{formatPrice(finalPrice! / 100, 'usd')}</H3>
                      )}
                    </XStack>
                    <Unspaced>
                      <YStack mt="$2">
                        <PromotionInput />
                      </YStack>
                    </Unspaced>

                    {/* <Separator /> */}

                    <YStack pb="$8" px="$4" space>
                      <NextLink
                        href={`api/checkout?${(function () {
                          const params = new URLSearchParams({
                            // product_id: products.id,
                            // price_id: selectedPriceId,
                            // quantity: seats.toString(),
                          })
                          for (const productId of selectedProductsIds) {
                            params.append('product_id', productId)
                          }
                          params.append(`price-${starter.id}`, starterPriceId)
                          if (store.appliedPromoCode) {
                            // the coupon user applied
                            params.append(`promotion_code`, store.appliedPromoCode)
                          } else if (coupon) {
                            // the coupon that's applied by default (special event, etc.)
                            params.append(`coupon_id`, coupon.id)
                          }

                          return params.toString()
                        })()}`}
                      >
                        <PurchaseButton
                          disabled={noProductSelected}
                          opacity={noProductSelected ? 0.5 : undefined}
                        >
                          Purchase
                        </PurchaseButton>
                      </NextLink>
                      <XStack jc="space-between" space="$2" ai="center">
                        <XStack
                          ai="center"
                          separator={<Separator vertical bc="$color8" my="$2" />}
                          space="$2"
                        >
                          <SizableText
                            theme="alt1"
                            cursor="pointer"
                            onPress={() => {
                              store.showFaq = true
                            }}
                            style={{ textDecorationLine: 'underline' }}
                            hoverStyle={{
                              color: '$color11',
                            }}
                            size="$2"
                          >
                            FAQ
                          </SizableText>

                          <SizableText
                            theme="alt1"
                            cursor="pointer"
                            onPress={() => {
                              store.showAgreement = true
                            }}
                            style={{ textDecorationLine: 'underline' }}
                            hoverStyle={{
                              color: '$color11',
                            }}
                            size="$2"
                          >
                            License Agreement
                          </SizableText>
                        </XStack>
                        <Theme name="alt1">
                          <PoweredByStripeIcon width={96} />
                        </Theme>
                      </XStack>
                    </YStack>
                  </YStack>
                </YStack>
              </XStack>
            </YStack>
          </ScrollView>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$4"
                right="$4"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

const StarterCard = memo(({ product }: { product: TakeoutPageProps['starter'] }) => {
  const media = useMedia()
  const [ref, setRef] = useState<any>()

  const store = useTakeoutStore()

  useEffect(() => {
    if (!ref) return
    if (!isClient) return

    if (media.md) {
      // disable on medium
      return
    }

    let dispose = () => {}

    // @ts-ignore
    import('../lib/sticksy').then(({ Sticksy }) => {
      new Sticksy(ref as any)

      dispose = () => {
        Sticksy.disableAll()
      }
    })

    return dispose
  }, [ref, media.md])

  return (
    <div ref={setRef}>
      <ThemeTint>
        <TakeoutCardFrame
          className="blur-medium"
          zi={1000}
          maw={310}
          als="center"
          shadowRadius={30}
          shadowOffset={{ height: 20, width: 0 }}
          shadowColor="#000"
          x={-50}
          y={50}
          mah="calc(min(85vh, 800px))"
          $md={{
            x: -20,
            y: 0,
            // mb: 280,
            mah: 'auto',
            w: '100%',
            maw: '100%',
            mt: 100,
          }}
        >
          <YStack zi={-1} fullscreen bc="$color5" o={0.5} />

          <LinearGradient
            pos="absolute"
            b={0}
            l={0}
            r={0}
            h={200}
            colors={['$backgroundTransparent', 'rgba(0,0,0,1)']}
            zi={100}
          />

          <YStack pos="absolute" b="$4" l="$4" r="$4" zi={100}>
            {/* cant use buttonlink it breaks scroll on press if not enabled, conditionally use a link */}
            {/* subscription ? `/account/subscriptions#${subscription.id}` : '' */}
            <PurchaseButton
              onPress={() => {
                store.showPurchase = true
              }}
            >
              Purchase
            </PurchaseButton>
          </YStack>

          <ScrollView disabled={media.md} showsVerticalScrollIndicator={false}>
            <YStack space="$2" p="$6">
              <MunroP size="$3" o={0.1} mt={-5} mb={-5}>
                Drop 0001
              </MunroP>

              <ThemeTintAlt>
                <MunroP className="callout" color="$color9" size="$11" ls={2}>
                  The Stack
                </MunroP>
              </ThemeTintAlt>

              <YStack>
                <Row
                  title="Template"
                  description="Complete GitHub Template with a built-in bot to send PRs with updates."
                  after="01"
                />

                <Row
                  title="Monorepo"
                  description="Complete with Next.js, Vercel deploy, Expo and EAS."
                  after="01"
                />

                <Row
                  title="Screens"
                  description="Tab bar, Stack view, Onboarding, Auth, Profile, Edit Profile, Account, Settings, Feed and more + carefully crafted layouts to adapt to web and native."
                  after="08"
                />

                <Row
                  title="Data & Auth"
                  description="Supabase pre-configured with migrations, auth, utilities, automatic setup and everything to get rolling immediately."
                  after="01"
                />

                <Row
                  title="Icons"
                  description="A whopping ~180k icons in total across +150 different packs, integrated with your theme color and sizes, tree-shakeable, from iconify.design"
                  after="+150"
                />

                <Row
                  title="Fonts"
                  description="All of Google fonts, more than +1500 font packages."
                  after="+1500"
                />

                <Row
                  title="Themes"
                  description="Two all new themes - Pastel and Neon - that bring a muted or more bright feel."
                  after="03"
                />

                <Row
                  title="Deploy"
                  description="Vercel and Expo EAS configured for you to ship as fast as possible."
                  after="05"
                />

                <Row
                  title="Native"
                  description="Tamagui native components like Sheet and Toast pre-configured, saving you setup and build."
                  after="03"
                />

                <Row
                  title="Form"
                  description="Universal forms with react-hook-form, ts-form and zod, adaptable components for the most native look on web and native."
                  after="01"
                />

                <Row
                  title="Image Upload"
                  description="Component and utilities for uploading images that adapt to the native image picker. Avatar upload with Supabase Storage + RLS included."
                  after="01"
                />
              </YStack>

              <Spacer f={1} minHeight={120} />
            </YStack>
          </ScrollView>
        </TakeoutCardFrame>
      </ThemeTint>
    </div>
  )
})

function PurchaseButton(props: ButtonProps) {
  return (
    <ThemeTint>
      <Button
        size="$6"
        backgroundColor="$color9"
        borderWidth={2}
        borderColor="$color10"
        hoverStyle={{
          backgroundColor: '$color10',
        }}
        pressStyle={{
          backgroundColor: '$color7',
        }}
        {...props}
      >
        <Button.Text ff="$silkscreen" fontWeight="700">
          {props.children}
        </Button.Text>
      </Button>
    </ThemeTint>
  )
}

const Row = (props: { title: any; description: any; after: any }) => {
  const media = useMedia()
  const [showDetail, setShowDetail] = useState(false)

  return (
    <XStack
      bbw={1}
      boc="$borderColor"
      px="$8"
      mx="$-8"
      onPress={() => {
        if (media.md) {
          setShowDetail((x) => !x)
        }
      }}
      $md={{
        cursor: 'pointer',
        // @ts-ignore
        hoverStyle: {
          backgroundColor: 'var(--color2)',
        },
      }}
    >
      <YStack f={1} py="$3" space="$1">
        <Paragraph fontFamily="$cherryBomb" size="$4">
          {props.title}
        </Paragraph>
        <Paragraph
          size="$3"
          color="$color10"
          $md={{
            display: showDetail ? 'flex' : 'none',
          }}
        >
          {props.description}
        </Paragraph>
      </YStack>

      <MunroP my="$4">{props.after}</MunroP>
    </XStack>
  )
}

const TakeoutCardFrame = styled(YStack, {
  boc: '$color3',
  bw: 0.5,
  // br: '$4',
  ov: 'hidden',
})

const TAKEOUT = ({ fontSize = 450, lineHeight = fontSize * 0.64, ...props }) => (
  <H1
    className="mix-blend font-outlined"
    userSelect="none"
    color="$backgroundStrong"
    fontFamily="$cherryBomb"
    fontSize={fontSize}
    lineHeight={lineHeight}
    whiteSpace="nowrap"
    minWidth={970}
    ta="center"
    {...props}
  >
    Take
    <br />
    <span style={{ display: 'inline-flex', transform: 'translateY(-65px)' }}>out</span>
  </H1>
)

TakeoutPage.getLayout = getDefaultLayout

const MunroP = styled(Paragraph, {
  className: 'pixelate',
  fontFamily: '$munro',
})

const tabs = [{ value: '1' }, { value: '2' }, { value: '4' }, { value: '8' }]

const PurchaseSelectTeam = ({
  value: currentTab,
  onValueChange: setCurrentTab,
}: TabsProps) => {
  const [tabRovingState, setTabRovingState] = useState<{
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    intentAt: null,
    prevActiveAt: null,
  })

  const [idPreset, setIsPreset] = useState(true)

  const handleChangePresetValue = (value: string) => {
    setIsPreset(true)
    setCurrentTab?.(value)
  }

  const setIntentIndicator = (intentAt) =>
    setTabRovingState({ ...tabRovingState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabRovingState({
      ...tabRovingState,
      prevActiveAt: tabRovingState.activeAt,
      activeAt,
    })
  const { activeAt, intentAt } = tabRovingState

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  //   const direction = (() => {
  //     if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
  //       return 0
  //     }
  //     return activeAt.x > prevActiveAt.x ? -1 : 1
  //   })()

  //   const enterVariant =
  //     direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  //   const exitVariant =
  //     direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  // const usingPresetValues = tabs.find((t) => t.value === currentTab)

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleChangePresetValue}
      orientation="horizontal"
      size="$4"
      flexDirection="column"
      activationMode="manual"
      position="relative"
      p="$2"
      bc="$backgroundStrong"
      als="center"
      br="$3"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              animation="100ms"
              key="intent-indicator"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          <ThemeTint>
            {activeAt && (
              <TabsRovingIndicator
                key="active-indicator"
                isActive
                width={activeAt.width}
                height={activeAt.height}
                x={activeAt.x}
                y={activeAt.y}
              />
            )}
          </ThemeTint>
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          space="$2"
          backgroundColor="transparent"
        >
          {tabs.map(({ value }) => (
            <Tabs.Tab
              key={value}
              unstyled
              bc="transparent"
              px="$4"
              value={value}
              onInteraction={handleOnInteraction}
            >
              <Paragraph>{value}</Paragraph>
            </Tabs.Tab>
          ))}
          {idPreset ? (
            <Button
              width={100}
              onPress={() => {
                setCurrentTab?.('10')
                setIsPreset(false)
                setIntentIndicator(null)
                setActiveIndicator(null)
              }}
              bc="transparent"
              borderColor="transparent"
              borderRadius="$2"
              px="$4"
            >
              <Paragraph>Custom</Paragraph>
            </Button>
          ) : (
            <ThemeTint>
              <Input
                backgroundColor="$color7"
                autoFocus
                width={100}
                borderRadius="$2"
                value={currentTab}
                onChangeText={(text) => {
                  if (isNaN(Number(text))) return
                  setActiveIndicator(null)
                  setCurrentTab?.(text)
                }}
              />
            </ThemeTint>
          )}
        </Tabs.List>
      </YStack>
    </Tabs>
  )
}

const TabsRovingIndicator = ({
  isActive,
  ...props
}: { isActive?: boolean } & YStackProps) => {
  return (
    <YStack
      borderRadius="$2"
      position="absolute"
      backgroundColor="$color3"
      animation="quicker"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      opacity={0.7}
      {...(isActive && {
        backgroundColor: '$color6',
        opacity: 1,
      })}
      {...props}
    />
  )
}

const Points = () => (
  <YStack tag="ul" gap="$1.5" zi={2} mt="$8" $gtSm={{ maw: 660 }} ov="hidden">
    {/* <Point>React (web, native, ios) monorepo sharing a single codebase</Point>
    <Point>
      All the important screens: Onboard, Register, Login, Forgot Password, Account,
      Settings, Profile, Edit Profile, Feed
    </Point>
    <Point>SSR, RSC, choose from 3 animation drivers</Point> 
    <Point>Complete & fully typed design system</Point>
    <Point>+150 icon packs</Point>
    <Point>2 all new theme suites: Pastel & Neon</Point>
    <Point>All of Google fonts fonts</Point>
    <Point>Github template with PR bot for updates</Point>
    <Point>Fully tested CI/CD: unit, integration, web and native</Point>
    <Point>Preview deploys for web, app-store builds with EAS</Point> */}
    {Object.entries(points).map(([key, group]) => (
      <React.Fragment key={key}>
        {group.map((point) => (
          <Point key={point}>{point}</Point>
        ))}
      </React.Fragment>
    ))}
  </YStack>
)

const HeartsRow = () => (
  <XStack space="$12" my="$4" als="center" spaceDirection="horizontal">
    <img src="/heart.svg" style={{ width: 16, height: 16 }} />
    <img src="/heart.svg" style={{ width: 16, height: 16 }} />
    <img src="/heart.svg" style={{ width: 16, height: 16 }} />
    <img src="/heart.svg" style={{ width: 16, height: 16 }} />
    <img src="/heart.svg" style={{ width: 16, height: 16 }} />
  </XStack>
)

const FaqModal = () => {
  const store = useTakeoutStore()
  return (
    <Dialog
      modal
      open={store.showFaq}
      onOpenChange={(val) => {
        store.showFaq = val
      }}
    >
      <Dialog.Adapt when="sm">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Sheet.ScrollView>
              <Dialog.Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Dialog.Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          className="blur-medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ opacity: 0, scale: 0.975 }}
          exitStyle={{ opacity: 0, scale: 0.975 }}
          w="90%"
          maw={900}
        >
          <ScrollView>
            <YStack $gtSm={{ maxHeight: '90vh' }}>
              <H1 px="$4" $sm={{ size: '$8' }}>
                Frequently Asked Questions
              </H1>
              <XStack mt="$4" flexWrap="wrap" gap="$6" p="$4">
                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>Can I still use the starter after my subscription has ended?</H5>
                  <Paragraph>
                    Of course! the subscription is only for the bot updates. If you cancel
                    your subscription you will stop receiving updates but can still use
                    your starter.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>Can I suggest a feature for the upcoming updates?</H5>
                  <Paragraph>
                    Yes. You will have access to an exclusive Discord channel in which you
                    can chat directly with the creators of the template, suggest features,
                    ask questions and so forth.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>Is there a refund policy?</H5>
                  <Paragraph>
                    No, to prevent abuse we have a no refund policy, but reach out to us
                    if you are non-profit or a student with a .edu email address if you
                    would like a discount.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>
                    Can I use some of the features? What about merge conflicts with the
                    bot?
                  </H5>
                  <Paragraph>
                    Yes. We've designed the repo to be as well isolated as possible. We
                    are working on settings for takeout.json that let you configure which
                    types of updates you'd like to receive.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>How does the GitHub bot work?</H5>
                  <Paragraph>
                    Whenever we make changes to the starter, we may trigger the bot to
                    send update PRs to all the repositories that have the bot installed
                    and have an active subscription. You may tweak the changes on the PR
                    and merge, or just disable it if you want to.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>How often does the bot trigger updates?</H5>
                  <Paragraph>
                    We do this manually to avoid constant PRs and try to schedule them at
                    most once a week. We're also working on a UI for users to manually
                    trigger older updates in case they've missed them.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>What are the next steps after I purchase the starter?</H5>
                  <Paragraph>
                    You will see the full instructions after purchase. You can gain access
                    to the source code repository on GitHub, which allows you to install
                    the starter through the create-tamagui CLI. Simply run `yarn create
                    tamagui --template=takeout-starter` and follow the steps.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>
                    What are the next steps after I purchase the font/icon packages?
                  </H5>
                  <Paragraph>
                    You will see the full instructions after purchase. You can gain access
                    to the source code of icon or font packages on GitHub, which allows
                    you to install packages through the `@tamagui/cli` package. Simply
                    install the cli and run `yarn tamagui add icon` or `yarn tamagui add
                    font` and follow the steps to install the packages.
                  </Paragraph>
                </YStack>

                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5>How many projects can I use this for?</H5>
                  <Paragraph
                    cursor="pointer"
                    textDecorationLine="underline"
                    onPress={() => {
                      store.showAgreement = true
                    }}
                  >
                    See License
                  </Paragraph>
                </YStack>

                {/* 
                <YStack gap="$4" f={1} fb={0} minWidth={300}>
                  <H5 >
                    Can I get auto-updates if I have my repository on a git server that
                    doesn't support GitHub bots?
                  </H5>
                  <Paragraph>
                    You can't use the bot outside of GitHub but you can write a custom
                    script / workflow to look for new changes on the repository source and
                    create PRs.
                  </Paragraph>
                </YStack> */}
              </XStack>
            </YStack>
          </ScrollView>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$2"
                right="$2"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

const Ul = styled(YStack, {
  name: 'ul',
  tag: 'ul',
  paddingLeft: 20,
})

const Li = styled(YStack, {
  name: 'li',
  tag: 'li',
  // @ts-ignore˝
  display: 'list-item',
})

const AgreementModal = () => {
  const store = useTakeoutStore()
  return (
    <Dialog
      modal
      open={store.showAgreement}
      onOpenChange={(val) => {
        store.showAgreement = val
      }}
    >
      <Dialog.Adapt when="sm">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Sheet.ScrollView>
              <Dialog.Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Dialog.Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          className="blur-medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ opacity: 0, scale: 0.975 }}
          exitStyle={{ opacity: 0, scale: 0.975 }}
          w="90%"
          maw={900}
        >
          <ScrollView>
            <YStack $gtSm={{ maxHeight: '90vh' }} space>
              <H1 $sm={{ size: '$8' }}>License Agreement</H1>

              <Paragraph>
                Tamagui Takeout License grants you a non-exclusive license and permission
                to use the Takout products based on the number of purchased licenses.
              </Paragraph>

              <Paragraph>
                Tamagui Takeout License grants the same permissions to all Employees and
                Contractors of the Licensee to access and use the Takeout stack up to the
                number of seats purchased.
              </Paragraph>

              <Paragraph>
                Seats only apply to the subscription - if the number of Employees and
                Contractors who modify the Takeout stack for the the duration of the
                license purchase exceeds your seat limit, you must upgrade or cancel your
                subscription.
              </Paragraph>

              <Paragraph>You can:</Paragraph>

              <Paragraph>
                <Ul>
                  <Li>
                    Use all Takeout stack deliverables within a single code repository for
                    a single public product.
                  </Li>
                  <Li>
                    Use the Takeout stack deliverables for unlimited private projects
                    available to only licensees.
                  </Li>
                  <Li>
                    Deploy all Takeout stack deliverables to one public domain, and one
                    public app within each of the iOS and Android app stores.
                  </Li>
                  <Li>
                    Deliver a product that is commercial in nature with the Takeout stack.
                  </Li>
                  <Li>
                    Re-use all Takeout stack deliverables for a new project after a
                    previous project has been shut down to users.
                  </Li>
                </Ul>
              </Paragraph>

              <Paragraph>You cannot:</Paragraph>

              <Paragraph>
                <Ul>
                  <Li>
                    Re-sell or distribute the Takeout stack available for users to read
                    for any purpose, even with modification.
                  </Li>
                  <Li>
                    Create a service which allows for users to use the Takeout stack to
                    build their own publicly available products.
                  </Li>
                  <Li>
                    Create a code template, UI kit, or starter kit based on the Takeout
                    stack available to users.
                  </Li>
                  <Li>
                    Use the Takeout stack for more than one public domain per license
                    purchase.
                  </Li>
                </Ul>
              </Paragraph>

              <H3>License Definitions</H3>

              <Paragraph>
                <Ul>
                  <Li>
                    Licensee is a person or a business entity who has purchased a License.
                  </Li>
                  <Li>
                    Takeout stack is the code and assets made available to the Licensee
                    after purchasing a Tamagui license.
                  </Li>
                  <Li>
                    Product is any artifact produced that incorporates the Takeout stack.
                  </Li>
                  <Li>User is any person not licensed to use the Takeout stack.</Li>
                  <Li>Employee is a full-time or part-time employee of the Licensee.</Li>
                  <Li>
                    Contractor is an individual or business entity contracted to perform
                    services for the Licensee.
                  </Li>
                  <Li>
                    Client is an individual or entity receiving custom professional
                    services directly from the Licensee, produced specifically for that
                    individual or entity.
                  </Li>
                </Ul>
              </Paragraph>

              <H3>Liability</H3>

              <Paragraph>
                Tamagui's liability to you for costs, damages, or other losses arising
                from your use of the Takeout stack — including third-party claims against
                you — is limited to a refund of your license fee. Tamagui may not be held
                liable for any consequential damages related to your use of the Takeout
                stack. The ownership of the Takeout stack remains with the Tamagui
                development team. You are required to abide by the licensing terms to
                avoid termination in case of non-compliance with the agreed terms.
              </Paragraph>

              <Paragraph>
                Got any further questions?{' '}
                <a href="mailto:support@tamagui.dev">Send us an email</a>
              </Paragraph>
            </YStack>
          </ScrollView>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$2"
                right="$2"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

const DiscountText = ({
  coupon,
}: {
  coupon: NonNullable<TakeoutPageProps['coupon']>
}) => {
  const text = coupon.amount_off
    ? `${formatPrice(coupon.amount_off, 'usd')} ${coupon.name}`
    : coupon.percent_off
    ? `${coupon.percent_off}% ${coupon.name}`
    : ''
  return (
    <ThemeTintAlt offset={6}>
      <YStack m="auto" scale={1} $xs={{ scale: 1.2, rotate: '0deg' }} rotate="7deg">
        <YStack
          fullscreen
          shadowColor="rgba(0,0,0,0.5)"
          shadowRadius={10}
          shadowOffset={{ height: 5, width: 0 }}
          scale={0.95}
        />
        <YStack
          px="$4"
          py="$1"
          backgroundColor="$color8"
          style={{
            clipPath: `polygon(
            0% 3px,
            3px 3px,
            3px 0%,
            calc(100% - 3px) 0%,
            calc(100% - 3px) 3px,
            100% 3px,
            100% calc(100% - 3px),
            calc(100% - 3px) calc(100% - 3px),
            calc(100% - 3px) 100%,
            3px 100%,
            3px calc(100% - 3px),
            0% calc(100% - 3px)
          )`,
          }}
        >
          <Paragraph ff="$munro" color="white" textAlign="center" size="$7">
            {text.trim()}
          </Paragraph>
        </YStack>
      </YStack>
    </ThemeTintAlt>
  )
}

let keepCycling = true

const FeatureIcon = ({
  themeIndex,
  title,
  icon,
}: {
  themeIndex: number
  icon: string
  title: string
}) => {
  const Tint = useTint()
  const store = useTakeoutStore()

  useEffect(() => {
    if (store.showPurchase) return
    if (!keepCycling) return

    const id = setTimeout(() => {
      Tint.setNextTint()
    }, 10_000)

    return () => clearTimeout(id)
  }, [Tint.tint, store.showPurchase])
  const theme = Tint.tints[themeIndex] as ThemeName
  const active = Tint.tint === theme

  return (
    <YStack>
      <Theme name={theme}>
        <PixelTooltip active={active} label={title}>
          <IconFrame
            onMouseEnter={() => {
              keepCycling = false
              Tint.setTintIndex(themeIndex)
            }}
            backgroundColor={active ? '$color9' : '$color3'}
          >
            <Image className="pixelate" src={icon} alt="Icon" height={18} width={18} />
          </IconFrame>
        </PixelTooltip>
      </Theme>
    </YStack>
  )
}

const PixelTooltip = ({
  children,
  label,
  active,
}: {
  label: string
  children?: any
  active?: boolean
}) => {
  return (
    <YStack
      ai="center"
      jc="center"
      {...(active && {
        scale: 1.1,
      })}
    >
      <Paragraph color="$color12" fontFamily="$munro" size="$4">
        {label}
      </Paragraph>
      {children}
    </YStack>
  )
}

const PromotionInput = () => {
  const store = useTakeoutStore()

  const [localCode, setLocalCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const applyCoupon = (promoCode: string, coupon: Stripe.Coupon) => {
    store.appliedCoupon = coupon
    store.appliedPromoCode = promoCode
  }

  const removeCoupon = () => {
    setLocalCode('')
    store.appliedCoupon = null
    store.appliedPromoCode = null
  }

  const closeField = () => {
    setLocalCode('')
    store.promoInputIsOpen = false
  }

  const checkPromotion = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(
        `/api/check-promo-code?${new URLSearchParams({ code: localCode })}`
      )
      if (res.status === 200) {
        const json = (await res.json()) as Stripe.Coupon
        applyCoupon(localCode, json)
      } else {
        const json = await res.json()
        if (json.message) {
          alert(json.message)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {store.promoInputIsOpen ? (
        <XStack
          key="is-open"
          animation="100ms"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          opacity={1}
          gap="$2"
          jc="center"
          ai="center"
        >
          {store.appliedPromoCode ? (
            <>
              <Paragraph theme="green_alt2">
                Coupon {store.appliedPromoCode} applied.
              </Paragraph>
              <Button chromeless size="$2" onPress={removeCoupon}>
                Remove Coupon
              </Button>
            </>
          ) : (
            <>
              {!store.appliedPromoCode && (
                <Button disabled={isLoading} size="$2" chromeless onPress={closeField}>
                  Cancel
                </Button>
              )}
              <Input
                disabled={!!store.appliedPromoCode}
                value={store.appliedPromoCode ?? localCode}
                onChangeText={(text) => {
                  setLocalCode(text)
                }}
                placeholder="Enter the code"
                size="$2"
              />
              <Button
                disabled={isLoading}
                themeInverse
                size="$2"
                onPress={checkPromotion}
              >
                Submit
              </Button>
            </>
          )}
        </XStack>
      ) : (
        <Paragraph
          key="is-not-open"
          animation="100ms"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          opacity={1}
          ta="right"
          textDecorationLine="underline"
          cursor="pointer"
          theme="alt2"
          size="$2"
          onPress={() => {
            store.promoInputIsOpen = true
          }}
        >
          Have a coupon code?
        </Paragraph>
      )}
    </AnimatePresence>
  )
}

const lazy = globalThis['requestIdleCallback'] || setTimeout

const useLazilyMounted = (extraTime?: number) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (isClient) {
      lazy(() => {
        setTimeout(() => {
          setLoaded(true)
        }, extraTime)
      })
    }
  }, [])
  return loaded
}

const PromoVideo = () => {
  const [open, setOpen] = useState(false)
  const loaded = useLazilyMounted(0)

  return (
    <YStack
      className="all ease-in ms300"
      disableOptimization
      pos="absolute"
      t={200}
      l={-250}
      pe={!loaded ? 'none' : 'auto'}
      zi={1000}
      o={loaded ? 1 : 0}
      scale={!loaded ? 0.5 : 0.22}
      rotate="-5deg"
      $sm={{
        dsp: 'none',
      }}
      {...(open && {
        scale: 1,
        rotate: '0deg',
        x: 600,
        y: -120,
      })}
      cursor="pointer"
      onPress={() => {
        setOpen(true)
      }}
    >
      {open && (
        <Button
          pos="absolute"
          t={-20}
          r={-20}
          elevation="$4"
          zi={100}
          circular
          icon={X}
          onPress={(e) => {
            e.stopPropagation()
            setOpen(false)
          }}
        ></Button>
      )}
      <YStack
        br="$10"
        ov="hidden"
        elevation="$10"
        w={840}
        h={480}
        bc="$color3"
        bw={3}
        boc="$borderColor"
      >
        {!open && (
          <YStack fullscreen ai="center" jc="center" bc="rgba(0,0,0,0.75)">
            <PlayCircle size={150} color="red" />
            <Paragraph
              size="$15"
              pos="absolute"
              rotate="-10deg"
              ta="center"
              ff="$silkscreen"
            >
              WATCH THE VIDEO
            </Paragraph>
          </YStack>
        )}
        <iframe
          width="840"
          height="480"
          style={{
            width: 840,
            height: 480,
          }}
          src={`https://www.youtube.com/embed/Guwa1oPBvmU?modestbranding=1&rel=0&showinfo=0&autoplay=${
            open ? 1 : 0
          }`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </YStack>
    </YStack>
  )
}

const Bullet = ({
  size = '$6',
  children,
  subtitle,
  status,
  ...props
}: XStackProps & {
  children: any
  subtitle?: any
  size?: FontSizeTokens
  status?: 'building' | 'done'
}) => {
  return (
    <XStack
      tag="li"
      ai="flex-start"
      space
      f={1}
      {...props}
      w="100%"
      $gtSm={{ w: 'calc(50% - 20px)' }}
    >
      <YStack y={-1}>
        <Circle size={42} my={-6} boc="$borderColor" bw={1}>
          {status === 'done' ? (
            <Check size={24} color="$color10" />
          ) : status === 'building' ? (
            <Hammer size={24} color="$color10" />
          ) : (
            <Dot size={24} color="$color10" />
          )}
        </Circle>
      </YStack>
      <YStack f={1}>
        <Paragraph wordWrap="break-word" size={size}>
          {children}
        </Paragraph>
        {!!subtitle && (
          <Paragraph
            size={
              getSize(size, {
                shift: -2,
              }) as any
            }
            theme="alt2"
            o={0.5}
          >
            {subtitle}
          </Paragraph>
        )}
      </YStack>
    </XStack>
  )
}

const Lazy = (props: { children: any }) => {
  const loaded = useLazilyMounted(100)
  return loaded ? props.children : null
}

export const getStaticProps: GetStaticProps<TakeoutPageProps | any> = async () => {
  try {
    const props = await getTakeoutProducts()
    return {
      props,
    }
  } catch (err) {
    console.error(`Error getting props`, err)
    return {
      notFound: true,
    }
  }
}

const getTakeoutProducts = async (): Promise<TakeoutPageProps> => {
  const promoListPromise = stripe.promotionCodes.list({
    code: 'SITE', // ones with code site are considered public and will be shown here
    active: true,
    expand: ['data.coupon'],
  })
  const productPromises = [
    supabaseAdmin
      .from('products')
      .select('*, prices(*)')
      .eq('metadata->>slug', 'universal-starter')
      .single(),
    supabaseAdmin
      .from('products')
      .select('*, prices(*)')
      .eq('metadata->>slug', 'icon-packs')
      .single(),
    supabaseAdmin
      .from('products')
      .select('*, prices(*)')
      .eq('metadata->>slug', 'font-packs')
      .single(),
  ]
  const promises = [promoListPromise, ...productPromises]
  const queries = await Promise.all(promises)

  const products = queries.slice(1) as Awaited<(typeof productPromises)[number]>[]
  const couponsList = queries[0] as Awaited<typeof promoListPromise>

  let coupon: Stripe.Coupon | null = null

  if (couponsList.data.length > 0) {
    coupon = couponsList.data[0].coupon
  }

  for (const product of products) {
    if (product.error) throw product.error
    if (
      !product.data.prices ||
      !Array.isArray(product.data.prices) ||
      product.data.prices.length === 0
    ) {
      throw new Error('No prices are attached to the product.')
    }
  }

  return {
    starter: {
      ...products[0].data!,
      prices: getArray(products[0].data!.prices!).filter((p) => p.active),
    },
    iconsPack: {
      ...products[1].data!,
      prices: getArray(products[1].data!.prices!).filter((p) => p.active),
    },
    fontsPack: {
      ...products[2].data!,
      prices: getArray(products[2].data!.prices!).filter((p) => p.active),
    },
    coupon,
  }
}
