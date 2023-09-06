import { forwardRef } from 'react'
// import { SolitoImage } from 'solito/image'
import { LinkCore, LinkCoreProps } from 'solito/link'
import { Anchor, AnchorProps, styled } from 'tamagui'

const StyledTextLink = styled(Anchor, {
  name: 'TextLink',
})

export type TextLinkProps = Pick<LinkCoreProps, 'href' | 'target'> & AnchorProps

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, href, target, ...restProps }, ref) => {
    return (
      <LinkCore
        Component={StyledTextLink}
        componentProps={restProps}
        href={href}
        ref={ref}
        target={target}
      >
        {children}
      </LinkCore>
    )
  }
)

// export const StyledSolitoImage = styled(SolitoImage, {})
