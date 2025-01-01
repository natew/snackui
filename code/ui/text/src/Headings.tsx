import type { GetProps } from '@tamagui/web'
import { styled } from '@tamagui/web'

import { Paragraph } from './Paragraph'

export const Heading = styled(Paragraph, {
  tag: 'span',
  name: 'Heading',
  accessibilityRole: 'header',
  fontFamily: '$heading',
  size: '$8',
  margin: 0,
})

export type HeadingProps = GetProps<typeof Heading>

export const H1 = styled(Heading, {
  name: 'H1',
  tag: 'h1',

  variants: {
    unstyled: {
      false: {
        size: '$10',
      },
    },
  },
})

export const H2 = styled(Heading, {
  name: 'H2',
  tag: 'h2',

  variants: {
    unstyled: {
      false: {
        size: '$9',
      },
    },
  },
})

export const H3 = styled(Heading, {
  name: 'H3',
  tag: 'h3',

  variants: {
    unstyled: {
      false: {
        size: '$8',
      },
    },
  },
})

export const H4 = styled(Heading, {
  name: 'H4',
  tag: 'h4',

  variants: {
    unstyled: {
      false: {
        size: '$7',
      },
    },
  },
})

export const H5 = styled(Heading, {
  name: 'H5',
  tag: 'h5',

  variants: {
    unstyled: {
      false: {
        size: '$6',
      },
    },
  },
})

export const H6 = styled(Heading, {
  name: 'H6',
  tag: 'h6',

  variants: {
    unstyled: {
      false: {
        size: '$5',
      },
    },
  },
})
