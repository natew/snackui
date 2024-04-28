import { Link as RouterLink } from '@vxrn/router'
import type { GestureResponderEvent, ViewProps } from 'react-native'
import { Paragraph } from 'tamagui'

// TODO export from package
type Href = string | HrefObject

interface HrefObject {
  /** Path representing the selected route `/[id]`. */
  pathname?: string
  /** Query parameters for the path. */
  params?: Record<string, any>
}

export type LinkProps = ViewProps & {
  /** Path to route to. */
  href: Href

  // TODO(EvanBacon): This may need to be extracted for React Native style support.
  /** Forward props to child component. Useful for custom buttons. */
  asChild?: boolean

  /** Should replace the current route without adding to the history. */
  replace?: boolean

  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void
}

export const Link = (props: LinkProps) => {
  return <RouterLink {...props} />
}

export const ParagraphLink = ({
  href = '',
  replace,
  onPress,
  children,
  ...props
}: LinkProps) => {
  return (
    <Link {...{ href, replace, onPress }} asChild>
      <Paragraph
        cursor="pointer"
        tag="a"
        color="$color"
        hoverStyle={{ color: '$color', outlineColor: 'red' }}
        {...props}
      >
        {children}
      </Paragraph>
    </Link>
  )
}
