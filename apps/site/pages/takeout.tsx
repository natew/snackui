import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContainerXL } from 'components/Container'
import { getDefaultLayout } from 'components/layouts/DefaultLayout'
import Image from 'next/image'
import { useRef, useState } from 'react'
import StickyBox from 'react-sticky-box'
import {
  Button,
  H1,
  H2,
  Paragraph,
  Separator,
  Spacer,
  XStack,
  YStack,
  styled,
} from 'tamagui'

import { CodeInline } from '../components/Code'
import { LoadGlusp, LoadMunro } from '../components/LoadFont'

export default function TakeoutPage() {
  return (
    <>
      <TitleAndMetaTags title="Tamagui Takeout" description="Tamagui Takeout" />

      <LoadGlusp />
      <LoadMunro />

      <YStack>
        <ContainerXL>
          <YStack h={0} mah={0}>
            <YStack y={100} ai="center" jc="center">
              <Paragraph
                className="mix-blend"
                color="$color"
                size="$1"
                fontSize={20}
                ls={5}
                fontFamily="$glusp"
              >
                Tamagui
              </Paragraph>

              <TAKEOUT />

              <Paragraph
                className="mix-blend"
                color="$color"
                size="$1"
                fontSize={20}
                mt={-10}
                ls={5}
                fontFamily="$glusp"
              >
                Presents
              </Paragraph>

              <YStack
                pos="absolute"
                fullscreen
                zi={2}
                pe="none"
                ai="center"
                jc="center"
                scale={1.15}
              >
                <TAKEOUT className="bg-dot-grid clip-text" />
              </YStack>

              <YStack
                pos="absolute"
                fullscreen
                zi={-1}
                pe="none"
                ai="center"
                jc="center"
                x={-10}
                y={-10}
                o={0.5}
              >
                <TAKEOUT color="$background" className="" />
              </YStack>

              {/* 
            <YStack
              scale={2}
              pos="absolute"
              fullscreen
              zi={-1}
              pe="none"
              ai="center"
              jc="center"
            >
              <TAKEOUT className="" color="$background" />
            </YStack>
             */}
              <YStack
                y={120}
                pos="absolute"
                fullscreen
                zi={-2}
                pe="none"
                ai="center"
                jc="center"
              >
                <TAKEOUT
                  className="font-outlined mix-blend"
                  fontSize={150 * 4}
                  lineHeight={110 * 4}
                  color="#000"
                  o={0.07}
                />
              </YStack>

              <Canvas
                style={{
                  width: 1000,
                  height: 1000,
                  position: 'absolute',
                  top: 0,
                  right: '-25%',
                  zIndex: -1,
                }}
              >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
              </Canvas>
            </YStack>
          </YStack>

          <YStack t={-100} l={-100} pos="absolute" b={0} zi={-1}>
            <Separator o={0.5} vertical h={2000} pos="absolute" l={0.5} />
            <Separator o={0.5} vertical h={2000} pos="absolute" r={0} />

            <YStack t={750} px="$6" bc="$background">
              <Separator o={0.5} w={3000} pos="absolute" t={0.5} l={-1000} />
              <Separator o={0.5} w={3000} pos="absolute" b={0} l={-1000} />

              <H2 my="$4" ta="right" fontFamily="$munro">
                Jan
                <br />
                01
              </H2>

              <H2
                t={-100}
                pos="absolute"
                fontFamily="$munro"
                tt="uppercase"
                x={-20}
                scale={0.5}
                rotate="-90deg"
                o={0.5}
                ls={10}
              >
                Release
              </H2>
            </YStack>
          </YStack>

          <XStack mt={770} space="$10">
            <XStack f={1} p="$6" mt={20}>
              <YStack fullscreen bw={1} boc="$background" o={0.4} />

              <YStack f={1} space="$8">
                <MunroP size="$13">The starter kit, reborn</MunroP>

                <XStack>
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                </XStack>

                <MunroP size="$10" color="$yellow10">
                  A bootstrap made to last.
                </MunroP>
                <MunroP size="$8">
                  The included&nbsp;
                  <CodeInline fontFamily="$munro">tamagui upgrade</CodeInline> command
                  keeps your repo in sync with the starter repo with carefully designed
                  separation of engine and functionality, and a custom diff-merge tool.
                  Avoid painful long-term divergence and manually copy-pasting updates.
                  <br />
                  <br />
                  Besides, it sets you up with the ideal Tamagui stack, already the most
                  productive UI system in existence.
                </MunroP>

                <XStack gap="$4">
                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-app-website-ui-62.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-browser-bugs-2-58.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-database-60.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-bucket-brush-63.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-palette-sample-26.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />
                </XStack>

                <MunroP size="$13">The starter kit, reborn</MunroP>

                <XStack>
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                  <img src="/heart.svg" style={{ width: 24, height: 24 }} />
                </XStack>

                <MunroP size="$10" color="$yellow10">
                  A bootstrap made to last.
                </MunroP>
                <MunroP size="$8">
                  The included&nbsp;
                  <CodeInline fontFamily="$munro">tamagui upgrade</CodeInline> command
                  keeps your repo in sync with the starter repo with carefully designed
                  separation of engine and functionality, and a custom diff-merge tool.
                  Avoid painful long-term divergence and manually copy-pasting updates.
                  <br />
                  <br />
                  Besides, it sets you up with the ideal Tamagui stack, already the most
                  productive UI system in existence.
                </MunroP>

                <XStack gap="$4">
                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-app-website-ui-62.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-browser-bugs-2-58.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/coding-apps-websites-database-60.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-bucket-brush-63.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />

                  <Image
                    className="pixelate"
                    src="/retro-icons/design-color-palette-sample-26.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />
                </XStack>
              </YStack>
            </XStack>

            <YStack mt={200} w={3} mih={500} h="100%" />

            <YStack mt={-120}>
              <StickyBox>
                <TakeoutCardFrame
                  className="blur-medium"
                  zi={1000}
                  maw={340}
                  als="center"
                  h={600}
                  space="$2"
                  shadowRadius={100}
                  shadowColor="#000"
                  x={-100}
                  y={100}
                >
                  <YStack zi={-1} fullscreen bc="$backgroundStrong" o={0.85} />

                  <Paragraph fontFamily="$munro" size="$8" theme="alt2">
                    Drop 0001
                  </Paragraph>

                  <Paragraph fontFamily="$munro" size="$10">
                    Universal App Starter
                  </Paragraph>

                  <Spacer f={1} />

                  <Button fontFamily="$munro" themeInverse>
                    Buy now
                  </Button>
                </TakeoutCardFrame>
              </StickyBox>
            </YStack>
          </XStack>
        </ContainerXL>
      </YStack>
    </>
  )
}

const TakeoutCardFrame = styled(YStack, {
  boc: '$color',
  bw: 1,
  p: '$4',
  // br: '$4',
  ov: 'hidden',
})

const TAKEOUT = (props) => (
  <H1
    className="mix-blend font-outlined"
    color="$backgroundStrong"
    fontFamily="$glusp"
    fontSize={280}
    lineHeight={215}
    mt={40}
    ta="center"
    {...props}
  >
    Take
    <br />
    out
  </H1>
)

function Box(props) {
  const ref = useRef<any>()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => {
    ref.current!.rotation.z += delta * 0.1
    ref.current!.rotation.y += delta * 0.1
    ref.current!.rotation.x += delta * 0.1
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3.5 : 3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'white'} />
    </mesh>
  )
}

TakeoutPage.getLayout = getDefaultLayout

const MunroP = styled(Paragraph, {
  fontFamily: '$munro',
})
