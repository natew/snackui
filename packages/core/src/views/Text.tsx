import { stylePropsTextOnly, validStyles } from '@tamagui/helpers'

import { isWeb } from '../constants/platform'
import { createComponent } from '../createComponent'
import { TextProps } from '../types'

const ellipseStyle = {
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const Text = createComponent<TextProps>({
  isText: true,
  defaultProps: {
    display: isWeb ? 'inline' : 'flex',
    boxSizing: 'border-box',
    fontFamily: 'System',
    wordWrap: 'break-word',
    cursor: 'text',
  },
  variants: {
    numberOfLines: {
      1: ellipseStyle,
      // TODO imply fn, test 1, could do types `>1` `<2`
      '[number]': (lines) => (lines > 1 ? { WebkitLineClamp: 1 } : null),
    },

    selectable: {
      true: {
        userSelect: 'text',
      },
      false: {
        userSelect: 'none',
      },
    },

    pressable: {
      true: {
        cursor: 'pointer',
      },
    },

    ellipse: {
      true: isWeb
        ? ellipseStyle
        : {
            numberOfLines: 1,
            lineBreakMode: 'clip',
          },
    },
  },
  deoptProps: new Set(isWeb ? [] : ['ellipse']),
  validStyles: {
    ...validStyles,
    ...stylePropsTextOnly,
    ...(isWeb && {
      userSelect: true,
      textOverflow: true,
      whiteSpace: true,
      wordWrap: true,
      selectable: true,
      cursor: true,
    }),
  },
})
