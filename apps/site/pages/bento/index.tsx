import { NextLink } from '@components/NextLink'
import * as sections from '@tamagui/bento'
import { ButtonDemo, InputsDemo, SelectDemo } from '@tamagui/demos'
import { ThemeTint, ThemeTintAlt } from '@tamagui/logo'
import { ShoppingCart } from '@tamagui/lucide-icons'
import { useBentoStore } from 'hooks/useBentoStore'
import type Stripe from 'stripe'

import { useEffect } from 'react'
import {
  Button,
  Card,
  Circle,
  EnsureFlexed,
  H2,
  H4,
  H5,
  Paragraph,
  Spacer,
  Stack,
  Theme,
  XStack,
  YStack,
  useTheme,
} from 'tamagui'
// import * as S from '@tamagui/studio/components'
// console.log('SSSSSSSS', S)

import { PurchaseModal } from '@components/BentoPurchaseModal'
import { BentoLogo } from '../../components/BentoLogo'
import { BentoPageFrame } from '../../components/BentoPageFrame'
import { ContainerLarge } from '../../components/Container'
import { getDefaultLayout } from '../../lib/getDefaultLayout'
import type { Database } from '@lib/supabase-types'
import type { GetStaticProps } from 'next'
import { stripe } from '@lib/stripe'
import { supabaseAdmin } from '@lib/supabaseAdmin'
import { getArray } from '@lib/supabase-utils'

export const ThemeTintEffect = () => {
  const theme = useTheme()
  const color = theme.color5.val

  useEffect(() => {
    document.querySelector('#theme-color')?.setAttribute('content', color)
    document.body.style.backgroundColor = color
  }, [color])

  return null
}

export type ProComponentsProps = {
  proComponents?: Database['public']['Tables']['products']['Row'] & {
    prices: Database['public']['Tables']['prices']['Row'][]
  }
  coupon?: Stripe.Coupon | null
}

export default function ProPage(props: ProComponentsProps) {
  const store = useBentoStore()

  if (!process.env.NEXT_PUBLIC_IS_TAMAGUI_DEV) {
    return null
  }

  return (
    <BentoPageFrame>
      <YStack pe="none" fullscreen zi={100} rotateZ="20deg">
        {/* <StudioPreviewComponents /> */}
      </YStack>

      <Hero />
      <Body />
      <PurchaseModal coupon={props.coupon} mainProduct={props.proComponents} />
      <Spacer size="$10" />
    </BentoPageFrame>
  )
}

ProPage.getLayout = getDefaultLayout

const Hero = () => {
  const store = useBentoStore()

  return (
    <YStack pos="relative" pb="$4" zi={0}>
      <ContainerLarge>
        <XStack gap="$6" py="$12" bc="transparent" jc="space-between" w={'100%'}>
          <YStack maw="55%" zi={100} jc="space-between" f={10} ai="flex-start" gap="$6">
            <BentoLogo />

            <Theme name="tan">
              <YStack gap="$6">
                <XStack gap="$6">
                  <Stack bc="$color7" w={10} br="$10" my={10} />

                  <Paragraph ff="$munro" size="$9" fos={32} lh={50} color="$color11">
                    Boost your React Native development with a suite of copy-paste
                    primitives.
                  </Paragraph>
                </XStack>
                <XStack jc="space-between" ai="center" ml="$8" mr="$4">
                  <Paragraph color="$color10" size="$5">
                    $200 one-time Purchase
                  </Paragraph>

                  <Circle size={4} bc="$color10" />
                  <Circle size={4} bc="$color10" />
                  <Circle size={4} bc="$color10" />

                  <Paragraph color="$color10" size="$5">
                    $10/mo for early releases
                  </Paragraph>
                </XStack>
              </YStack>
            </Theme>

            <Theme name="green">
              <Button
                iconAfter={ShoppingCart}
                fontFamily="$mono"
                size="$5"
                fontSize={22}
                bg="$color8"
                color="#fff"
                fontWeight="600"
                scaleSpace={1}
                scaleIcon={1.4}
                als="flex-end"
                mr="$4"
                hoverStyle={{
                  bg: '$color9',
                  boc: '$color9',
                }}
                pressStyle={{
                  bg: '$color6',
                }}
                onPress={() => {
                  store.showPurchase = true
                }}
              >
                $200
              </Button>
            </Theme>
          </YStack>

          <YStack
            mr={-400}
            maw={840}
            mt={0}
            pl="$4"
            x={20}
            mb={-300}
            y={-20}
            style={{
              maskImage: `linear-gradient(rgba(0, 0, 0, 1) 80%, transparent)`,
            }}
          >
            <XStack
              fw="wrap"
              zi={1}
              gap="$4"
              mah={300}
              transformOrigin="left top"
              als="center"
              scale={0.75}
            >
              <ThemeTint>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTint>
              <ThemeTintAlt>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={2}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={3}>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={4}>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={5}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTint>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTint>
              <ThemeTintAlt>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={2}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={3}>
                <Card elevate>
                  <ButtonDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={4}>
                <Card elevate>
                  <InputsDemo />
                </Card>
              </ThemeTintAlt>
              <ThemeTintAlt offset={5}>
                <Card p="$4" elevate>
                  <SelectDemo />
                </Card>
              </ThemeTintAlt>
            </XStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}

const Body = () => {
  return (
    <YStack
      pos="relative"
      py="$4"
      // style={{
      //   backdropFilter: 'blur(100px)',
      //   boxShadow: `0 0 200px rgba(0,0,0,0.2), 0 0 100px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.125), 0 0 10px rgba(0,0,0,0.125)`,
      // }}
      // py="$10"
    >
      {/* <YStack fullscreen bg="$color12" o={0.1} /> */}

      <ContainerLarge gap="$2">
        {/* <H2>Sections</H2>
      <Paragraph size="$6" color={'$gray11'}>
        Components are divided into sections and each section has multiple groups of
        related components.
      </Paragraph>

      <Spacer size="$8" /> */}

        <YStack gap="$12" px="$6">
          {sections.listingData.sections.map(({ sectionName, parts }) => {
            return (
              <YStack key={sectionName} gap="$6" jc={'space-between'}>
                <H2 fontSize="$9" f={2}>
                  {`${sectionName[0].toUpperCase()}${sectionName.slice(1)}`}
                </H2>
                <XStack gap={'$6'} f={4} fw="wrap" fs={1}>
                  {parts.map(
                    ({ name: partsName, numberOfComponents, route, preview }) => (
                      <ComponentGroupsBanner
                        key={route + partsName + numberOfComponents.toString()}
                        path={route}
                        name={partsName}
                        numberOfComponents={numberOfComponents}
                        preview={preview}
                      />
                    )
                  )}
                </XStack>
              </YStack>
            )
          })}
        </YStack>

        <Spacer size="$12" />
      </ContainerLarge>
    </YStack>
  )
}

const EmptyFn = () => (
  <XStack w={200} br="$10" bg="$color8" h="$4" elevation="$4" bw={1} boc="$color10" />
)

function ComponentGroupsBanner({
  name,
  numberOfComponents,
  path,
  preview,
}: {
  name: string
  numberOfComponents: number
  path: string
  preview?: () => JSX.Element
}) {
  const Preview = preview || EmptyFn

  return (
    <NextLink href={BASE_PATH + path} passHref>
      <YStack
        tag="a"
        animation="quicker"
        maw="calc(34% - 32px)"
        ov="hidden"
        elevation="$6"
        bc="$color2"
        mih={300}
        br="$9"
        accessible
        cursor="pointer"
        pos="relative"
        btc="$color5"
        btw={1}
        hoverStyle={{
          y: -2,
          bc: '$color3',
          outlineWidth: 0.5,
          outlineStyle: 'solid',
          outlineColor: '$color9',
        }}
        pressStyle={{
          bc: '$color1',
          y: 3,
        }}
      >
        <EnsureFlexed />
        <YStack
          fullscreen
          className="bg-grid mask-gradient-down"
          style={{ backgroundPosition: 'top left' }}
          o={0.085}
        />
        <YStack fullscreen ai="center" jc="center">
          <Preview />
        </YStack>
        <YStack p="$5" gap="$2">
          <H4 fontWeight={'normal'} fontSize="$7">
            {name}
          </H4>
          <H5 theme="alt1" fontWeight={'normal'} fontSize={'$2'}>
            {numberOfComponents} components
          </H5>
        </YStack>
      </YStack>
    </NextLink>
  )
}

const BASE_PATH = ' /bento'

ProPage.getLayout = getDefaultLayout

export const getStaticProps: GetStaticProps<ProComponentsProps | any> = async () => {
  try {
    const props = await getTakeoutProducts()
    return {
      props,
    }
  } catch (err) {
    console.error(`Error getting props`, err)
    return {
      props: {},
    }
  }
}

const getTakeoutProducts = async (): Promise<ProComponentsProps> => {
  const promoListPromise = stripe.promotionCodes.list({
    code: 'SITE-PRO-COMPONENTS', // ones with code SITE-PRO-COMPONENTS are considered public and will be shown here
    active: true,
    expand: ['data.coupon'],
  })
  const productPromises = [
    supabaseAdmin
      .from('products')
      .select('*, prices(*)')
      .eq('metadata->>slug', 'bento')
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

  if (!products.length) {
    throw new Error(`No products found`)
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
    proComponents: {
      ...products[0].data!,
      prices: getArray(products[0].data!.prices!).filter(
        (p) => p.active && !(p.metadata as Record<string, any>).hide_from_lists
      ),
    },
    coupon,
  }
}
