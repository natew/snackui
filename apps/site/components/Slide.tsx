import { RootStore } from '@tamagui/site/app/(protected)/studio/state/RootStore'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  EnsureFlexed,
  FontSizeTokens,
  H1,
  H2,
  H4,
  Paragraph,
  SizableTextProps,
  SpaceTokens,
  Spacer,
  Theme,
  ThemeName,
  XStack,
  YStack,
  useComposedRefs,
  usePresence,
  useThemeName,
} from 'tamagui'

import { Code } from './Code'
import { DocCodeBlock } from './DocsCodeBlock'
import { DivProps, useHoverGlow } from './HoverGlow'

export type SlideProps = {
  title?: React.ReactNode
  subTitle?: any
  steps: TextContent[]
  stepsStrategy?: 'replace' | 'additive'
  variant?: 1
  theme?: ThemeName
}

type SlideStepItem =
  | {
      type: 'space'
      size?: SpaceTokens
    }
  | {
      type: 'callout'
      content: any
      image?: {
        width: number
        height: number
        src: string
      }
    }
  | {
      type: 'content'
      content: any
    }
  | {
      type: 'centered'
      content: any
    }
  | {
      type: 'image'
      variant?: 'circled' | 'centered'
      image: {
        width: number
        height: number
        src: string
      }
    }
  | {
      type: 'vertical'
      title?: any
      content: SlideStepItem[]
    }
  | {
      type: 'text-overlay'
      props?: SizableTextProps
      variant?: 'good' | 'bad'
      content: React.ReactNode
    }
  | {
      type: 'text'
      props?: SizableTextProps
      content: React.ReactNode
    }
  | {
      type: 'text-bold'
      props?: SizableTextProps
      content: React.ReactNode
    }
  | {
      type: 'code' | 'code-inline'
      props?: SizableTextProps
      content: string
      lang?: 'tsx'
    }
  | {
      type: 'bullet-point'
      size?: FontSizeTokens
      slim?: boolean
      content: SlideStepItem[]
    }
  | {
      type: 'split-horizontal'
      variant?: 'centered'
      content: SlideStepItem[]
    }

type TextContent = SlideStepItem[]

export const SlideContext = createContext({
  registerSlide(next: (inc: number) => boolean) {},
})

export function Slide(props: SlideProps) {
  const [isPresent] = usePresence()
  const glows = useGlows(props.variant)
  const [step, setStep] = useState(1)
  const context = useContext(SlideContext)

  const max = props.steps.length

  useEffect(() => {
    if (!isPresent) return
    return context.registerSlide((inc) => {
      const next = step + inc
      if (next >= 1 && next <= max) {
        setStep(next)
        return false
      }
      return true
    })
  }, [step, isPresent])

  const getStep = (step: TextContent) =>
    step?.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {getTextContent([item], {
            wrapperStyle:
              props.stepsStrategy === 'replace'
                ? {}
                : {
                    display: 'contents',
                  },
          })}
        </React.Fragment>
      )
    })

  const stepsContent =
    props.stepsStrategy === 'replace'
      ? getStep(props.steps[step - 1])
      : props.steps
          .slice(0, step)
          .map((s, i) => <React.Fragment key={i}>{getStep(s)}</React.Fragment>)

  return (
    <Theme name={props.theme}>
      <YStack fullscreen zi={-1}>
        {glows.elements}
      </YStack>
      <YStack ref={glows.ref as any} space="$4" w="100%" h="100%" p="$12">
        <YStack space="$4">
          {Boolean(props.title) && (
            <H1
              fontSize={90}
              lh={120}
              textShadowColor="$shadowColor"
              textShadowRadius={10}
              textShadowOffset={{ height: 10, width: 0 }}
              als="center"
            >
              {props.title}
            </H1>
          )}

          {Boolean(props.subTitle) && (
            <H2 size="$9" theme="alt2" als="center">
              {props.subTitle}
            </H2>
          )}
        </YStack>

        <YStack f={1} gap="$10" maxHeight="100%" flexWrap="wrap" w="100%">
          {stepsContent}
        </YStack>
      </YStack>
    </Theme>
  )
}

function useGlows(variant: SlideProps['variant']) {
  const themeName = useThemeName()
  const next = RootStore.colors.indexOf(themeName) + 1
  // todo use for glint
  const altColorName = RootStore.colors[next % RootStore.colors.length]

  const glow = useHoverGlow({
    resist: 65,
    size: 700,
    strategy: 'blur',
    blurPct: 100,
    color: 'var(--color10)',
    opacity: 0.4,
    background: 'transparent',
  })

  const glint = useHoverGlow({
    resist: 90,
    size: 200,
    strategy: 'blur',
    color: 'var(--color2)',
    blurPct: 10,
    offset: {
      x: 200,
      y: -200,
    },
    opacity: 0.5,
    background: 'transparent',
    inverse: true,
  })

  const ref = useComposedRefs(glow.parentRef, glint.parentRef)

  return {
    ref,
    elements: (
      <>
        {glow.Component()}
        <Theme name={altColorName as any}>{glint.Component()}</Theme>
      </>
    ),
  }
}

function getTextContent(
  text: TextContent,
  options: { size?: FontSizeTokens; wrapperStyle?: DivProps['style'] } = {}
) {
  const { size, wrapperStyle } = options

  const noWrapper = text.length === 1
  const content = text.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {(() => {
          switch (item.type) {
            case 'content':
              return item.content

            case 'image':
              return (
                <YStack
                  f={1}
                  ai="center"
                  {...(item.variant === 'circled' && {
                    bg: '$backgroundStrong',
                    minWidth: 500,
                    minHeight: 500,
                    maxWidth: 500,
                    maxHeight: 500,
                    ai: 'center',
                    jc: 'center',
                    borderRadius: 10000,
                    als: 'center',
                    mx: 'auto',
                    elevation: '$6',
                    ov: 'hidden',
                    bw: 5,
                    boc: '$borderColor',
                  })}
                  {...(item.variant === 'centered' && {
                    als: 'center',
                    ai: 'center',
                    jc: 'center',
                    h: '100%',
                    maw: '90%',
                    minWidth: '100%',
                  })}
                >
                  <div
                    style={{
                      alignSelf: 'center',
                      minWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      backgroundImage: `url(${item.image.src})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      flex: 1,
                      backgroundSize: 'contain',
                    }}
                  />
                </YStack>
              )

            case 'vertical':
              return (
                <YStack h="100%">
                  {!!item.title && (
                    <H4 size="$10" als="center" mb="$4" color="$color9">
                      {item.title}
                    </H4>
                  )}
                  {getTextContent(item.content)}
                </YStack>
              )

            case 'split-horizontal':
              return (
                <XStack
                  maw="100%"
                  ov="hidden"
                  h="100%"
                  ai="center"
                  f={1}
                  gap="$6"
                  {...(item.variant === 'centered' && {
                    my: 120,
                  })}
                >
                  <YStack jc="center" als="stretch" maw="50%" f={1} ov="hidden">
                    {getTextContent([item.content[0]], options)}
                  </YStack>
                  <YStack jc="center" als="stretch" maw="50%" f={1} ov="hidden">
                    {getTextContent([item.content[1]], options)}
                  </YStack>
                </XStack>
              )

            case 'bullet-point':
              return (
                <YStack
                  pl="$10"
                  pt="$2"
                  pr="$10"
                  {...(item.slim && {
                    pl: '$2',
                    pr: '$2',
                    mb: '$0',
                  })}
                >
                  {getTextContent([{ type: 'text', content: '· ' }, ...item.content], {
                    size: item.size ?? size ?? '$9',
                  })}
                </YStack>
              )
            case 'code-inline':
              return (
                <Code
                  bc="$color8"
                  color="$color11"
                  size={size ?? '$9'}
                  px="$3"
                  py="$2"
                  lineHeight={44}
                  {...item.props}
                >
                  {item.content}
                </Code>
              )

            case 'space':
              return <Spacer />

            case 'code':
              return (
                <DocCodeBlock isHighlightingLines size={size ?? '$8'}>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </DocCodeBlock>
              )

            case 'callout': {
              let size = '$12' as any

              if (typeof item.content === 'string') {
                const sizeNum = Math.min(
                  Math.max(8, Math.round(580 / item.content.length)),
                  16
                )
                size = `$${sizeNum}`
              }

              return (
                <YStack mah="100%" f={1} ai="center" jc="center">
                  <Paragraph
                    theme="yellow"
                    color="$color10"
                    als="center"
                    textShadowColor="rgba(0,0,0,0.35)"
                    textShadowRadius={20}
                    textShadowOffset={{ height: 10, width: 0 }}
                    ta="center"
                    p="$10"
                    mt={-100}
                    size={size}
                  >
                    {item.content}&nbsp;
                  </Paragraph>

                  {item.image && (
                    <img
                      style={{
                        alignSelf: 'center',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        position: 'absolute',
                        zIndex: -1,
                      }}
                      src={item.image.src}
                    />
                  )}
                </YStack>
              )
            }

            case 'centered': {
              let size = '$10' as any

              if (typeof item.content === 'string') {
                const sizeNum = Math.min(
                  Math.max(8, Math.round(700 / item.content.length)),
                  16
                )
                size = `$${sizeNum}`
              }

              return (
                <YStack f={1} ai="center" jc="center" px="$6">
                  <Paragraph als="center" ta="center" size={size}>
                    {item.content}&nbsp;
                  </Paragraph>
                </YStack>
              )
            }

            case 'text':
              return (
                <Paragraph size={size ?? '$9'} fow="400" lh="$10" {...item.props}>
                  {item.content}&nbsp;
                </Paragraph>
              )

            case 'text-bold':
              return (
                <Paragraph fow="800" size={size ?? '$9'} lh="$10" {...item.props}>
                  {item.content}&nbsp;
                </Paragraph>
              )

            case 'text-overlay':
              return (
                <Paragraph
                  pos="absolute"
                  t="20%"
                  r="10%"
                  shadowColor="$shadowColor"
                  shadowRadius="$5"
                  fow="800"
                  size={size ?? '$9'}
                  backgroundColor={
                    item.variant === 'good'
                      ? '$green8'
                      : item.variant === 'bad'
                      ? '$red8'
                      : '$background'
                  }
                  p="$2"
                  br="$6"
                  lh="$10"
                  {...item.props}
                >
                  {item.content}&nbsp;
                </Paragraph>
              )
          }
        })()}
      </React.Fragment>
    )
  })

  if (noWrapper) {
    return content
  }

  return (
    <div
      style={{
        display: 'inline',
        flex: 1,
        maxHeight: '100%',
        ...wrapperStyle,
      }}
    >
      {content}
    </div>
  )
}
