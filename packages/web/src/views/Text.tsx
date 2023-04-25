import { isWeb } from '@tamagui/constants'
import { stylePropsTextOnly, validStyles } from '@tamagui/helpers'

import { createComponent } from '../createComponent.js'
import { TextProps, TextPropsBase } from '../types.js'

const ellipseStyle = {
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const Text = createComponent<TextProps, React.Component<TextProps>, TextPropsBase>(
  {
    acceptsClassName: true,
    isText: true,

    defaultProps: {
      // @ts-ignore
      display: 'flex',
      fontFamily: 'System',
      ...(isWeb
        ? {
            display: 'inline',
            boxSizing: 'border-box',
            wordWrap: 'break-word',
            margin: 0,
          }
        : {
            suppressHighlighting: true,
          }),
    },

    inlineWhenUnflattened: new Set(['fontFamily']),

    variants: {
      ...(isWeb && {
        numberOfLines: {
          1: ellipseStyle,

          ':number': (numberOfLines) =>
            numberOfLines >= 1
              ? {
                  WebkitLineClamp: numberOfLines,
                  WebkitBoxOrient: 'vertical',
                  display: '-webkit-box',
                  overflow: 'hidden',
                }
              : null,
        },
      }),

      // ??
      ellipsizeMode: {
        '...': () => null,
      },

      selectable: {
        true: {
          userSelect: 'text',
          cursor: 'text',
        },
        false: {
          userSelect: 'none',
          cursor: 'default',
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
    },
  }
)
