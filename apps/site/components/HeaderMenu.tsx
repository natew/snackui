import { ThemeTintAlt } from '@tamagui/logo'
import { Menu } from '@tamagui/lucide-icons'
import * as React from 'react'
import {
  Adapt,
  Button,
  Circle,
  Popover,
  Sheet,
  SizableText,
  Spacer,
  XStack,
  YStack,
  isTouchable,
} from 'tamagui'
import { Avatar } from 'tamagui'

import { useUser } from '../hooks/useUser'
import { getDefaultAvatarImage } from '../lib/avatar'
import { DocsMenuContents } from './DocsMenuContents'
import { HeaderLinks } from './HeaderLinks'
import { useDocsMenu } from './useDocsMenu'
import { useRouter } from 'next/router'

export const HeaderMenu = React.memo(function HeaderMenu() {
  const { open, setOpen } = useDocsMenu()
  const [state, setState] = React.useState({
    via: undefined as 'hover' | 'press' | undefined,
    viaAt: Date.now(),
  })
  const userSwr = useUser()

  return (
    <HeaderMenuTheme>
      <Popover
        keepChildrenMounted
        hoverable={{
          delay: 50,
          restMs: 40,
          move: false,
        }}
        open={open}
        onOpenChange={(next, via) => {
          if (open && state.via === 'press' && via === 'hover') {
            return
          }
          setState({ ...state, via, viaAt: Date.now() })
          setOpen(next)
        }}
        size="$5"
        stayInFrame={{ padding: 20 }}
      >
        <Popover.Anchor asChild>
          <Button
            size="$3"
            ml="$2"
            bg="transparent"
            noTextWrap
            br="$10"
            bw={2}
            onPress={() => {
              if (isTouchable) {
                setOpen(!open)
                return
              }
              if (open && state.via === 'hover') {
                setState({ ...state, via: 'press', viaAt: Date.now() })
                return
              }
              if (open) {
                setOpen(false)
                return
              }
              // hover handles this
            }}
            theme={open ? 'alt1' : undefined}
            aria-label="Open the main menu"
            hoverStyle={{
              bg: 'transparent',
              // @ts-ignore
              bc: 'color-mix(in srgb, var(--color10) 30%, transparent 60%)',
            }}
          >
            <SizableText size="$2" ff="$silkscreen">
              Menu
            </SizableText>

            <Circle size={28} ai="center" jc="center" ml={-2} mr={-9}>
              {userSwr.data?.userDetails ? (
                <Avatar circular size="$2">
                  <Avatar.Image
                    source={{
                      width: 28,
                      height: 28,
                      uri:
                        userSwr.data.userDetails?.avatar_url ||
                        getDefaultAvatarImage(
                          userSwr.data?.userDetails?.full_name ||
                            userSwr.data?.session?.user?.email ||
                            'User'
                        ),
                    }}
                  />
                </Avatar>
              ) : (
                <Menu size={14} />
              )}
            </Circle>
          </Button>
        </Popover.Anchor>

        <Adapt platform="touch" when="sm">
          <Sheet
            zIndex={100000000}
            modal
            dismissOnSnapToBottom
            animation="bouncy"
            animationConfig={{
              type: 'spring',
              damping: 25,
              mass: 1.2,
              stiffness: 200,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay zIndex={100} />
          </Sheet>
        </Adapt>

        <HeaderMenuContent />
      </Popover>
    </HeaderMenuTheme>
  )
})

const HeaderMenuTheme = (props: { children: any }) => {
  const router = useRouter()
  const isBento = router.pathname.startsWith('/bento')

  return (
    <ThemeTintAlt
      {...(isBento && {
        name: 'tan',
      })}
    >
      {props.children}
    </ThemeTintAlt>
  )
}

const HeaderMenuContent = React.memo(function HeaderMenuContent() {
  return (
    <Popover.Content
      mt={-5}
      bw={0}
      bg="transparent"
      enterStyle={{ x: -10, o: 0 }}
      exitStyle={{ x: 10, o: 0 }}
      x={0}
      y={4}
      o={1}
      animation={[
        'quicker',
        {
          opacity: {
            overshootClamping: true,
          },
        },
      ]}
      animateOnly={['transform', 'opacity']}
      p={0}
      maxHeight="80vh"
      maxWidth={360}
      elevation="$10"
      shadowColor="#000"
      shadowOpacity={0.2}
      zIndex={100000000}
      trapFocus
      br="$6"
      {...{
        style: {
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        },
      }}
    >
      <Popover.Arrow bg="$color5" size="$4" borderWidth={0} o={0.84} />
      <YStack fullscreen bg="$color5" zi={0} br="$6" o={0.84} />

      <Popover.ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <YStack aria-label="Home menu contents" miw={230} p="$3" ai="flex-end">
          <XStack fw="wrap" f={1} gap="$2">
            <HeaderLinks forceShowAllLinks />
          </XStack>

          <Spacer size="$3" />

          <DocsMenuContents inMenu />
        </YStack>
      </Popover.ScrollView>
    </Popover.Content>
  )
})
