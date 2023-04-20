import { getDefaultLayout } from '@components/layouts/DefaultLayout'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { authors } from '@data/authors'
import { getAllFrontmatter } from '@lib/mdx'
import { useTint } from '@tamagui/logo'
import { ChevronRight } from '@tamagui/lucide-icons'
import { NextLink } from 'components/NextLink'
import { format, parseISO } from 'date-fns'
import { useMemo } from 'react'
import { ScrollView } from 'react-native'
import {
  Button,
  EnsureFlexed,
  H1,
  H2,
  H3,
  H4,
  H5,
  Image,
  Paragraph,
  Spacer,
  XStack,
  YStack,
} from 'tamagui'

import { Card } from '../components/Card'
import { ContainerLarge } from '../components/Container'
import { FlatBubbleCard } from '../components/FlatBubbleCard'
import { GithubIcon } from '../components/GithubIcon'
import { SocialLinksRow } from '../components/SocialLinksRow'

export default function Community({ frontmatters }) {
  return (
    <CommunityLayout>
      <TitleAndMetaTags
        title="Community — Tamagui"
        description="Tamagui latest news and discussion."
        pathname="/community"
      />

      <Spacer size="$4" />

      <ContainerLarge space="$4">
        <Spacer />

        <H1 als="center">Community</H1>

        <Spacer />

        <SocialLinksRow />

        <Spacer />

        <XStack $sm={{ flexDirection: 'column' }}>
          <FlatBubbleCard w="50%" $sm={{ w: 'auto' }} ai="center" bw={0}>
            <NextLink href="/blog">
              <Button
                bc="transparent"
                boc="$borderColor"
                bw={1}
                mt="$-3"
                size="$6"
                iconAfter={ChevronRight}
                br="$10"
              >
                <H2 cur="pointer" size="$9" ta="center">
                  The Blog
                </H2>
              </Button>
            </NextLink>
            <Spacer />
            <YStack w="100%" space>
              {frontmatters.map((frontmatter) => (
                <NextLink key={frontmatter.title} href={frontmatter.slug}>
                  <Card bc="transparent" p="$4" f={1}>
                    <YStack space="$2">
                      <H3
                        fontFamily="$silkscreen"
                        size="$6"
                        color="$color"
                        cursor="pointer"
                      >
                        {frontmatter.title}
                      </H3>
                      <XStack ai="center" space="$2">
                        <Paragraph
                          cursor="inherit"
                          tag="time"
                          size="$5"
                          theme="alt2"
                          fow="300"
                        >
                          {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
                        </Paragraph>
                        <Paragraph cursor="inherit" theme="alt2" size="$4" fow="300">
                          &nbsp;by {authors[frontmatter.by].name}
                        </Paragraph>
                      </XStack>
                    </YStack>
                  </Card>
                </NextLink>
              ))}
            </YStack>
          </FlatBubbleCard>

          <Spacer size="$4" />

          <FlatBubbleCard ai="center" feature bw={0} className="hero-gradient">
            <H2 size="$9" ta="center">
              Design Kit
            </H2>
            <Spacer size="$2" />
            <YStack ai="center" space>
              <H4 size="$5">Figma Design Kit</H4>
              <NextLink href="https://www.figma.com/community/file/1125992524818379922">
                <YStack
                  target="_blank"
                  rel="noopener noreferrer"
                  br="$5"
                  overflow="hidden"
                  bw={0.5}
                  boc="$borderColor"
                >
                  <Image
                    animation="quick"
                    cur="pointer"
                    shac="$shadowColor"
                    shar="$4"
                    hoverStyle={{
                      scale: 1.2,
                      borderColor: '$color',
                    }}
                    o={0.5}
                    width={1466 * 0.25}
                    height={776 * 0.25}
                    src={'/sponsors/design-kit.jpg'}
                  />
                </YStack>
              </NextLink>
            </YStack>
          </FlatBubbleCard>
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0.5} space>
          <H3 id="starter-repos" ta="center">
            Starter repos
          </H3>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack py="$2" space="$4">
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/srikanthkh/tamagui-cna"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  create-next-app
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by srikanthkh
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/srikanthkh/tamagui-cra"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  create-react-app
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by srikanthkh
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/criszz77/luna"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  🌘Luna template
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by criszz77
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/chen-rn/create-universal-app"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  create-universal-app
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by Chen
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/tamagui/tamagui/tree/master/apps/site"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  tamagui.dev
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by nate
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/ivopr/tamagui-expo"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  Tamagui Expo
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by Ivo
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/dohomi/tamagui-kitchen-sink"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  Kitchen Sink with Storybook
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by dohomi
                </Paragraph>
              </Card>
              <Card
                f={1}
                maw={250}
                jc="center"
                space="$2"
                tag="a"
                href="https://github.com/ebg1223/t3-tamagui"
                target="_blank"
                p="$5"
              >
                <GithubIcon />
                <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
                  Tamagui t3
                </H4>
                <Paragraph cursor="pointer" theme="alt2">
                  by ebg1223
                </Paragraph>
              </Card>
            </XStack>
          </ScrollView>
        </FlatBubbleCard>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" color="#fff" ta="center" className="rainbow clip-text">
            Gold Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="Manifold Finance"
            link="https://www.manifoldfinance.com"
            image="/sponsors/manifold.png"
            imageWidth={100}
            imageHeight={100}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" color="#fff" ta="center">
            Bronze Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="Bounty"
            link="https://bounty.co"
            image="/sponsors/bounty.png"
            imageWidth={100}
            imageHeight={100}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" color="#fff" ta="center">
            Indie Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="CodingScape"
            link="https://codingscape.com"
            image="/sponsors/coding-scape.png"
            imageWidth={566 * 0.35}
            imageHeight={162 * 0.35}
          />
          <GoldSponsor
            name="Quest Portal"
            link="https://www.questportal.com"
            image="/sponsors/quest-portal.png"
            imageWidth={200 * 0.3}
            imageHeight={200 * 0.3}
          />
          <GoldSponsor
            name="BeatGig"
            link="https://beatgig.com"
            image="/sponsors/beatgig.jpg"
            imageWidth={400 * 0.5}
            imageHeight={84 * 0.5}
          />
          <GoldSponsor
            name="Pineapples.dev"
            link="http://pineapples.dev"
            image="/sponsors/pineapple.jpg"
            imageWidth={520 * 0.5}
            imageHeight={186 * 0.5}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" ta="center">
            Early Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space flexWrap="wrap">
          <IndividualSponsor
            name="@barelyreaper"
            link="https://twitter.com/barelyreaper"
          />
          <IndividualSponsor name="@pontusab" link="https://twitter.com/pontusab" />
          <IndividualSponsor name="@AntelaBrais" link="https://twitter.com/AntelaBrais" />
          <IndividualSponsor name="Hirbod" link="https://twitter.com/nightstomp" />
          <IndividualSponsor name="Dimension" link="https://twitter.com/joindimension" />
        </XStack>
      </ContainerLarge>

      <Spacer size="$10" />
    </CommunityLayout>
  )
}

Community.getLayout = getDefaultLayout

function GoldSponsor(props: {
  name: string
  link: string
  image: string
  imageWidth: number
  imageHeight: number
}) {
  return (
    <FlatBubbleCard mb="$4" flat p={0}>
      <NextLink href={props.link} target="_blank">
        <YStack
          ai="center"
          jc="center"
          f={1}
          cursor="pointer"
          target="_blank"
          p="$8"
          br="$4"
          space
        >
          <Image
            accessibilityLabel={props.name}
            width={props.imageWidth}
            height={props.imageHeight}
            src={props.image}
          />
          <H5 cursor="inherit" als="center" letterSpacing={4} ai="center">
            {props.name}
          </H5>
        </YStack>
      </NextLink>
    </FlatBubbleCard>
  )
}

function IndividualSponsor(props: { name: string; link: string }) {
  return (
    <FlatBubbleCard flat mb="$4">
      <YStack maxWidth="100%" fs={0} als="center">
        <XStack space="$4" $sm={{ flexDirection: 'column' }}>
          <NextLink href={props.link} target="_blank">
            <YStack
              cursor="pointer"
              p="$4"
              br="$4"
              hoverStyle={{ bc: 'rgba(0,0,0,0.1)' }}
              pressStyle={{ bc: 'rgba(0,0,0,0.2)' }}
              space
            >
              <H5 cursor="inherit" als="center" letterSpacing={4} ai="center">
                {props.name}
              </H5>
            </YStack>
          </NextLink>
        </XStack>
      </YStack>
    </FlatBubbleCard>
  )
}

function CommunityLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('blog')
  const sortedFrontmatters = frontmatters.sort(
    (a, b) =>
      Number(new Date(b.publishedAt || '')) - Number(new Date(a.publishedAt || ''))
  )
  return { props: { frontmatters: sortedFrontmatters.slice(0, 3) } }
}
