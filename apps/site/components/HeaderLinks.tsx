import { useUser } from 'hooks/useUser'
import { useRouter } from 'next/router'
import * as React from 'react'
import {
  Button,
  Paragraph,
  Popover,
  SizableText,
  TooltipSimple,
  XStack,
  YStack,
  styled,
} from 'tamagui'
import { Text } from 'tamagui'

import { GithubIcon } from './GithubIcon'
import { HeaderProps } from './HeaderProps'
import { NextLink } from './NextLink'

const HeadAnchor = styled(Paragraph, {
  tag: 'a',
  fontFamily: '$silkscreen',
  px: '$3',
  py: '$3',
  cursor: 'pointer',
  size: '$3',
  color: '$color10',
  tabIndex: -1,

  hoverStyle: {
    color: '$color',
    br: '$3',
  },

  pressStyle: {
    opacity: 0.25,
  },

  variants: {
    grid: {
      true: {
        size: '$3',
        miw: '48.9%',
        f: 1,
        p: '$2.5',
        px: '$4',

        hoverStyle: {
          backgroundColor: '$color3',
        },
      },
    },

    dim: {
      true: {
        o: 0.6,
      },
    },
  } as const,
})

export const HeaderLinks = (props: HeaderProps) => {
  const { showExtra, forceShowAllLinks, isHeader } = props
  const userSwr = useUser()
  const router = useRouter()
  // there is user context and supabase setup in the current page
  return (
    <>
      <NextLink passHref prefetch={false} href="/docs/intro/introduction">
        <HeadAnchor
          grid={forceShowAllLinks}
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Docs
        </HeadAnchor>
      </NextLink>

      {/* <NextLink passHref prefetch={false} href="/themes">
        <HeadAnchor

        {...forceShowAllLinks && {
          miw: '50%',
          f: 1,
        }}
        
        
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Themes
        </HeadAnchor>
      </NextLink> */}

      <NextLink passHref prefetch={false} href="/studio">
        <HeadAnchor
          grid={forceShowAllLinks}
          $md={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Studio
        </HeadAnchor>
      </NextLink>

      {!router.asPath.startsWith('/takeout') && (
        <>
          {forceShowAllLinks && (
            <NextLink legacyBehavior={false} prefetch={false} href="/takeout">
              <HeadAnchor
                grid={forceShowAllLinks}
                tag="span"
                $sm={{
                  display: forceShowAllLinks ? 'flex' : 'none',
                }}
              >
                Starter Kit
              </HeadAnchor>
            </NextLink>
          )}
          {!forceShowAllLinks && <TakeoutHeaderLink {...props} />}
        </>
      )}

      {forceShowAllLinks && (
        <NextLink
          prefetch={false}
          legacyBehavior={true}
          passHref
          target="_blank"
          href="https://github.com/tamagui/tamagui"
        >
          <HeadAnchor grid={forceShowAllLinks} tag="span">
            Github{' '}
            <YStack dsp={'inline-block' as any} y={10} my={-20} o={0.8}>
              <GithubIcon width={16} />
            </YStack>
          </HeadAnchor>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <NextLink passHref prefetch={false} href="/community">
          <HeadAnchor grid={forceShowAllLinks}>Community</HeadAnchor>
        </NextLink>
      )}

      {showExtra && (
        <NextLink passHref prefetch={false} href="/studio">
          <HeadAnchor grid={forceShowAllLinks}>Studio</HeadAnchor>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <NextLink passHref prefetch={false} href="/blog">
          <HeadAnchor dim={forceShowAllLinks} grid={forceShowAllLinks}>
            Blog
          </HeadAnchor>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <NextLink
          legacyBehavior={false}
          target="_blank"
          href="https://github.com/sponsors/natew"
        >
          <HeadAnchor dim={forceShowAllLinks} grid={forceShowAllLinks} tag="span">
            Sponsor
          </HeadAnchor>
        </NextLink>
      )}

      {!userSwr.data?.session?.user && !isHeader && (
        <NextLink passHref prefetch={false} href="/login">
          <HeadAnchor
            dim={forceShowAllLinks}
            grid={forceShowAllLinks}
            $md={{
              display: forceShowAllLinks ? 'flex' : 'none',
            }}
          >
            Login
          </HeadAnchor>
        </NextLink>
      )}
    </>
  )
}

const TakeoutHeaderLink = ({ forceShowAllLinks }: HeaderProps) => {
  const router = useRouter()
  const isDisabledRoute = router.asPath === '/'
  const [disabled, setDisabled] = React.useState(isDisabledRoute)
  const [open, setOpen] = React.useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = React.useState(false)

  if (disabled && open) {
    setOpen(false)
  }

  const openIt = () => {
    setOpen(true)
    setHasOpenedOnce(true)
  }

  // open just a touch delayed to show the animation
  React.useEffect(() => {
    if (open || disabled || hasOpenedOnce) return

    const tm = setTimeout(openIt, 0)

    return () => {
      clearTimeout(tm)
    }
  }, [open, disabled])

  // remember if you closed it
  React.useEffect(() => {
    const key = 'tkt-cta-times-close2'
    const timesClosed = +(localStorage.getItem(key) || 0)
    if (timesClosed > 3) {
      setDisabled(true)
    }
    localStorage.setItem(key, `${timesClosed + 1}`)
  }, [])

  return (
    <NextLink legacyBehavior={false} prefetch={false} href="/takeout">
      <Popover
        open={open}
        onOpenChange={(open) => {
          if (open) {
            openIt()
          } else {
            setOpen(false)
          }
        }}
        offset={12}
      >
        <Popover.Trigger asChild>
          <HeadAnchor
            grid={forceShowAllLinks}
            tag="span"
            fontSize={24}
            $sm={{
              display: 'none',
            }}
          >
            <TooltipSimple label="Starter kit">
              <Text>🥡</Text>
            </TooltipSimple>
          </HeadAnchor>
        </Popover.Trigger>

        <Popover.Content
          unstyled
          animation={[
            'bouncy',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ y: -10, opacity: 0 }}
          exitStyle={{ y: -10, opacity: 0 }}
        >
          <Popover.Arrow size="$3" />
          <XStack
            tag="a"
            cur="pointer"
            bg="$background"
            ai="center"
            py="$2"
            px="$3"
            br="$4"
            hoverStyle={{
              bg: '$backgroundHover',
            }}
            elevation="$0.25"
          >
            <SizableText ff="$silkscreen">Takeout </SizableText>
            <Text
              ff="$body"
              fontSize="$3"
              color="$color10"
              $sm={{ dsp: 'none' }}
              y={0.98}
              ml={6}
            >
              starter kit
            </Text>
          </XStack>
        </Popover.Content>
      </Popover>
    </NextLink>
  )
}
