import { codeToHTML } from '@tamagui/code-to-html'

let cache: any = null

export function useCodeExamples() {
  if (cache) {
    return cache as typeof next
  }

  const compilationExamples = compilationCode.map((item) => {
    return {
      ...item,
      input: {
        ...item.input,
        examples: item.input.examples.map((ex) => {
          return {
            ...ex,
            code: codeToHTML(ex.code, ex.language),
          }
        }),
      },
      output: {
        ...item.output,
        examples: item.output.examples.map((ex) => {
          return {
            ...ex,
            code: codeToHTML(ex.code, ex.language),
          }
        }),
      },
    }
  })

  const next = { compilationExamples, animationCode: codeToHTML(animationCode, 'tsx') }

  cache = next

  return next
}

const animationCode = `import { Button, Square } from 'tamagui'

export default () => {
  const [positionI, setPositionI] = React.useState(0)
  return (
    <>
      <Square
        animation="bouncy"
        size={110}
        bc="$pink10"
        br="$9"
        hoverStyle={{
          scale: 1.1,
        }}
        pressStyle={{
          scale: 0.9,
        }}
        {...positions[positionI]}
      >
        <LogoIcon />
      </Square>

      <Button
        pos="absolute"
        b={20}
        l={20}
        icon={require('@tamagui/lucide-icons').Play}
        size="$6"
        circular
        onPress={() => setPositionI(i => (i + 1) % positions.length)}
      />
    </>
  )
}

export const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: '0deg',
  },
  {
    x: -50,
    y: -50,
    scale: 0.5,
    rotate: '-45deg',
    hoverStyle: {
      scale: 0.6,
    },
    pressStyle: {
      scale: 0.4,
    },
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: '180deg',
    hoverStyle: {
      scale: 1.1,
    },
    pressStyle: {
      scale: 0.9,
    },
  },
]
`

const compilationCode = [
  {
    name: 'Shorthands',
    input: {
      description:
        'Fully typed shorthands you can set up yourself work with all the features of Tamagui.',
      examples: [
        {
          name: 'app.tsx',
          language: 'tsx',
          code: `import { YStack, Text } from 'tamagui'

const App = () => (
  <YStack px="$2" w={550} $gtSm={{ px: '$6' }}>
    <Text fs="$2">
      Lorem ipsum dolor.
    </Text>
  </YStack>
)`,
        },

        {
          name: 'tamagui.config.ts',
          language: 'tsx',
          code: `export default createTamagui({
  shorthands: {
    px: 'paddingHorizontal',
    w: 'width',
    c: 'color',
    fs: 'fontSize',
  }
})`,
        },
      ],
    },
    output: {
      description:
        'Shorthands work with the compiler support of media queries, pseudo styling and conditional logic.',
      examples: [
        {
          name: 'app.js',
          code: `const _cn2 = " _color-scmqyp _display-1471scf _fontFamily-187pbxx _fontSize-7uzi8p"
const _cn = " _display-6koalj _flexDirection-eqz5dr _flexShrink-1q142lx _paddingLeft-11jtx42 _paddingRight-4a8ukp _width-11mp6g5 _paddingLeft-_gtSm_1hxi05q _paddingRight-_gtSm_poy3ov"
import { Text, YStack } from 'tamagui'

const App = () => <div className={_cn}>
  <span className={_cn2}>
    Lorem ipsum dolor.
  </span>
</div>`,
          language: 'tsx',
        },
        {
          name: 'app.css',
          code: `._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
._paddingLeft-11jtx42{padding-left:var(--space-2);}
._paddingRight-4a8ukp{padding-right:var(--space-2);}
._width-11mp6g5{width:550px;}
@media screen and (min-width: 861px) { :root:root ._paddingLeft-_gtSm_1hxi05q{padding-left:var(--space-6);} }
@media screen and (min-width: 861px) { :root:root ._paddingRight-_gtSm_poy3ov{padding-right:var(--space-6);} }
._display-1471scf{display:inline;}
._fontFamily-187pbxx{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
._fontSize-7uzi8p{font-size:var(--fontSize-2);}`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Logic',
    input: {
      description: `use logical statements, spreads, imported constants, and other expressions as you would normally.`,
      examples: [
        {
          name: 'app.tsx',
          language: 'tsx',
          code: `import { Paragraph, YStack } from 'tamagui'

const App = (props) => (
  <YStack
    padding={props.big ? '$5' : '$3'}
    {...(props.colored && {
      backgroundColor: 'green',
    })}
  >
    <Paragraph size="$2">
      Lorem ipsum dolor.
    </Paragraph>
  </YStack>
)
`,
        },
      ],
    },
    output: {
      description:
        'the compiler evaluates ternaries, spreads, and nested logic, reducing objects and runtime CSS insertion.',
      examples: [
        {
          name: 'app.js',
          code: `const _cn5 = " _color-scmqyp _display-1471scf _fontFamily-xeweqh _fontSize-7uzi8p _lineHeight-1l6ykvy"
const _cn4 = "  _backgroundColor-1542mo4"
const _cn3 = " _paddingBottom-12bic3x _paddingLeft-7ztw5e _paddingRight-g6vdx7 _paddingTop-1vq430g"
const _cn2 = " _paddingBottom-z3qxl0 _paddingLeft-14km6ah _paddingRight-1qpq1qc _paddingTop-1medp4i"
const _cn = " _display-6koalj _flexDirection-eqz5dr _flexShrink-1q142lx "
import { concatClassName } from "@tamagui/helpers"
import { Paragraph, YStack } from 'tamagui'

const App = props => <div className={concatClassName(_cn + (props.big ? _cn2 : _cn3) + (" " + (props.colored ? _cn4 : " ")))}>
    <span className={_cn5}>
      Lorem ipsum dolor.
    </span>
  </div>
`,
          language: 'tsx',
        },
        {
          name: 'app.css',
          code: `._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
._paddingBottom-z3qxl0{padding-bottom:var(--space-5);}
._paddingLeft-14km6ah{padding-left:var(--space-5);}
._paddingRight-1qpq1qc{padding-right:var(--space-5);}
._paddingTop-1medp4i{padding-top:var(--space-5);}
._paddingBottom-12bic3x{padding-bottom:var(--space-3);}
._paddingLeft-7ztw5e{padding-left:var(--space-3);}
._paddingRight-g6vdx7{padding-right:var(--space-3);}
._paddingTop-1vq430g{padding-top:var(--space-3);}
._backgroundColor-1542mo4{background-color:rgba(0,128,0,1.00);}
._display-1471scf{display:inline;}
._fontFamily-xeweqh{font-family:var(--font-body);}
._fontSize-7uzi8p{font-size:var(--fontSize-2);}
._lineHeight-1l6ykvy{line-height:var(--lineHeight-2);}`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Media',
    input: {
      description:
        'Pseudo and media query styles extract at compile-time, fallback gracefully at runtime.',
      examples: [
        {
          name: 'app.tsx',
          language: 'tsx',
          code: `import { YStack } from 'tamagui'

const App = () => (
  <YStack
    backgroundColor="red"
    hoverStyle={{
      backgroundColor: 'blue',
    }}
    $gtSm={{
      backgroundColor: 'green',
      pressStyle: {
        backgroundColor: 'yellow',
      }
    }}
  />
)
`,
        },
      ],
    },
    output: {
      description:
        'Custom defined media queries output to clean CSS that runs much faster (try resizing this site).',
      examples: [
        {
          name: 'app.js',
          code: `const _cn = " _backgroundColor-1g6456j _display-6koalj _flexDirection-eqz5dr _flexShrink-1q142lx _backgroundColor--hover-57dg7b _backgroundColor-_gtSm_1542mo4 _backgroundColor-_gtSm_-active-98uye2"
import { YStack } from 'tamagui'

const App = () => <div className={_cn} />`,
          language: 'tsx',
        },
        {
          name: 'app.css',
          code: `
._backgroundColor-1g6456j{background-color:rgba(255,0,0,1.00);}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
@media not all and (hover: none) { :root  ._backgroundColor--hover-57dg7b:hover{background-color:rgba(0,0,255,1.00);} }
@media screen and (min-width: 861px) { :root:root ._backgroundColor-_gtSm_1542mo4{background-color:rgba(0,128,0,1.00);} }
@media screen and (min-width: 861px) { :root:root :root:root  ._backgroundColor-_gtSm_-active-98uye2:active{background-color:rgba(255,255,0,1.00);} }`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Hooks',
    input: {
      description:
        'Theme and media query hooks, fully typed that work the same across native and web.',
      examples: [
        {
          name: 'app.tsx',
          language: 'tsx',
          code: `import { useMedia, useTheme, YStack } from 'tamagui'

const App = () => {
  const theme = useTheme()
  const media = useMedia()

  return (
    <YStack
      y={media.sm ? 10 : 0}
      backgroundColor={media.lg ? theme.red : theme.blue}
      {...media.xl && {
        y: theme.space2
      }}
    />
  )
}`,
        },
      ],
    },
    output: {
      description:
        'If all hooks are used purely for styling, the compiler will remove the hook call entirely.',
      examples: [
        {
          name: 'app.js',
          code: `const _cn = " _display-6koalj _flexDirection-eqz5dr _flexShrink-1q142lx _transform-_sm_1exagq _transform-_sm0_1wpzndr _backgroundColor-_lg_no4z4g _backgroundColor-_lg0_1qoifqd _transform-_xl_gqa6p0"
import { YStack, useMedia, useTheme } from 'tamagui'

const App = () => {
  return <div className={_cn} />
}`,
          language: 'tsx',
        },
        {
          name: 'app.css',
          code: `._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
@media screen and (max-width: 860px) { :root:root ._transform-_sm_1exagq{-webkit-transform:translateY(10px);transform:translateY(10px);} }
@media not all and (max-width: 860px) { :root:root ._transform-_sm0_1wpzndr{-webkit-transform:translateY(0px);transform:translateY(0px);} }
@media screen and (min-width: 1120px) { :root:root:root ._backgroundColor-_lg_no4z4g{background-color:var(--red);} }
@media not all and (min-width: 1120px) { :root:root:root ._backgroundColor-_lg0_1qoifqd{background-color:var(--blue);} }
@media screen and (min-width: 1280px) { :root:root:root:root ._transform-_xl_gqa6p0{-webkit-transform:translateY(var(--space2));transform:translateY(var(--space2));} }`,
          language: 'css',
        },
      ],
    },
  },
]
