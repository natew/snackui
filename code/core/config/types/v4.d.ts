export { shorthands } from '@tamagui/shorthands/v4'
export { tokens } from '@tamagui/themes/v3-themes'
export { fonts } from './fonts'
export { media, mediaQueryDefaultActive } from './media'
export { animations } from './v4-animations'
export { tamaguiThemes, defaultThemes } from '@tamagui/themes/v4'
export declare const config: {
  animations: import('@tamagui/web').AnimationDriver<{
    '75ms': string
    '100ms': string
    '200ms': string
    bouncy: string
    superBouncy: string
    lazy: string
    medium: string
    slow: string
    quick: string
    quicker: string
    quickest: string
    tooltip: string
  }>
  media: {
    readonly '2xl': {
      readonly maxWidth: number
    }
    readonly xl: {
      readonly maxWidth: number
    }
    readonly lg: {
      readonly maxWidth: number
    }
    readonly md: {
      readonly maxWidth: number
    }
    readonly sm: {
      readonly maxWidth: number
    }
    readonly xs: {
      readonly maxWidth: number
    }
    readonly xxs: {
      readonly maxWidth: number
    }
  }
  shorthands: {
    readonly ussel: 'userSelect'
    readonly cur: 'cursor'
    readonly pe: 'pointerEvents'
    readonly col: 'color'
    readonly ff: 'fontFamily'
    readonly fos: 'fontSize'
    readonly fost: 'fontStyle'
    readonly fow: 'fontWeight'
    readonly ls: 'letterSpacing'
    readonly lh: 'lineHeight'
    readonly ta: 'textAlign'
    readonly tt: 'textTransform'
    readonly ww: 'wordWrap'
    readonly ac: 'alignContent'
    readonly ai: 'alignItems'
    readonly als: 'alignSelf'
    readonly b: 'bottom'
    readonly bg: 'backgroundColor'
    readonly bbc: 'borderBottomColor'
    readonly bblr: 'borderBottomLeftRadius'
    readonly bbrr: 'borderBottomRightRadius'
    readonly bbw: 'borderBottomWidth'
    readonly blc: 'borderLeftColor'
    readonly blw: 'borderLeftWidth'
    readonly bc: 'borderColor'
    readonly br: 'borderRadius'
    readonly bs: 'borderStyle'
    readonly brw: 'borderRightWidth'
    readonly brc: 'borderRightColor'
    readonly btc: 'borderTopColor'
    readonly btlr: 'borderTopLeftRadius'
    readonly btrr: 'borderTopRightRadius'
    readonly btw: 'borderTopWidth'
    readonly bw: 'borderWidth'
    readonly dsp: 'display'
    readonly f: 'flex'
    readonly fb: 'flexBasis'
    readonly fd: 'flexDirection'
    readonly fg: 'flexGrow'
    readonly fs: 'flexShrink'
    readonly fw: 'flexWrap'
    readonly h: 'height'
    readonly jc: 'justifyContent'
    readonly l: 'left'
    readonly m: 'margin'
    readonly mah: 'maxHeight'
    readonly maw: 'maxWidth'
    readonly mb: 'marginBottom'
    readonly mih: 'minHeight'
    readonly miw: 'minWidth'
    readonly ml: 'marginLeft'
    readonly mr: 'marginRight'
    readonly mt: 'marginTop'
    readonly mx: 'marginHorizontal'
    readonly my: 'marginVertical'
    readonly o: 'opacity'
    readonly ov: 'overflow'
    readonly p: 'padding'
    readonly pb: 'paddingBottom'
    readonly pl: 'paddingLeft'
    readonly pos: 'position'
    readonly pr: 'paddingRight'
    readonly pt: 'paddingTop'
    readonly px: 'paddingHorizontal'
    readonly py: 'paddingVertical'
    readonly r: 'right'
    readonly shac: 'shadowColor'
    readonly shar: 'shadowRadius'
    readonly shof: 'shadowOffset'
    readonly shop: 'shadowOpacity'
    readonly t: 'top'
    readonly w: 'width'
    readonly zi: 'zIndex'
  }
  tokens: {
    color: {
      yellow1Light: import('@tamagui/web').Variable<string>
      yellow2Light: import('@tamagui/web').Variable<string>
      yellow3Light: import('@tamagui/web').Variable<string>
      yellow4Light: import('@tamagui/web').Variable<string>
      yellow5Light: import('@tamagui/web').Variable<string>
      yellow6Light: import('@tamagui/web').Variable<string>
      yellow7Light: import('@tamagui/web').Variable<string>
      yellow8Light: import('@tamagui/web').Variable<string>
      yellow9Light: import('@tamagui/web').Variable<string>
      yellow10Light: import('@tamagui/web').Variable<string>
      yellow11Light: import('@tamagui/web').Variable<string>
      yellow12Light: import('@tamagui/web').Variable<string>
      red1Light: import('@tamagui/web').Variable<string>
      red2Light: import('@tamagui/web').Variable<string>
      red3Light: import('@tamagui/web').Variable<string>
      red4Light: import('@tamagui/web').Variable<string>
      red5Light: import('@tamagui/web').Variable<string>
      red6Light: import('@tamagui/web').Variable<string>
      red7Light: import('@tamagui/web').Variable<string>
      red8Light: import('@tamagui/web').Variable<string>
      red9Light: import('@tamagui/web').Variable<string>
      red10Light: import('@tamagui/web').Variable<string>
      red11Light: import('@tamagui/web').Variable<string>
      red12Light: import('@tamagui/web').Variable<string>
      purple1Light: import('@tamagui/web').Variable<string>
      purple2Light: import('@tamagui/web').Variable<string>
      purple3Light: import('@tamagui/web').Variable<string>
      purple4Light: import('@tamagui/web').Variable<string>
      purple5Light: import('@tamagui/web').Variable<string>
      purple6Light: import('@tamagui/web').Variable<string>
      purple7Light: import('@tamagui/web').Variable<string>
      purple8Light: import('@tamagui/web').Variable<string>
      purple9Light: import('@tamagui/web').Variable<string>
      purple10Light: import('@tamagui/web').Variable<string>
      purple11Light: import('@tamagui/web').Variable<string>
      purple12Light: import('@tamagui/web').Variable<string>
      pink1Light: import('@tamagui/web').Variable<string>
      pink2Light: import('@tamagui/web').Variable<string>
      pink3Light: import('@tamagui/web').Variable<string>
      pink4Light: import('@tamagui/web').Variable<string>
      pink5Light: import('@tamagui/web').Variable<string>
      pink6Light: import('@tamagui/web').Variable<string>
      pink7Light: import('@tamagui/web').Variable<string>
      pink8Light: import('@tamagui/web').Variable<string>
      pink9Light: import('@tamagui/web').Variable<string>
      pink10Light: import('@tamagui/web').Variable<string>
      pink11Light: import('@tamagui/web').Variable<string>
      pink12Light: import('@tamagui/web').Variable<string>
      orange1Light: import('@tamagui/web').Variable<string>
      orange2Light: import('@tamagui/web').Variable<string>
      orange3Light: import('@tamagui/web').Variable<string>
      orange4Light: import('@tamagui/web').Variable<string>
      orange5Light: import('@tamagui/web').Variable<string>
      orange6Light: import('@tamagui/web').Variable<string>
      orange7Light: import('@tamagui/web').Variable<string>
      orange8Light: import('@tamagui/web').Variable<string>
      orange9Light: import('@tamagui/web').Variable<string>
      orange10Light: import('@tamagui/web').Variable<string>
      orange11Light: import('@tamagui/web').Variable<string>
      orange12Light: import('@tamagui/web').Variable<string>
      green1Light: import('@tamagui/web').Variable<string>
      green2Light: import('@tamagui/web').Variable<string>
      green3Light: import('@tamagui/web').Variable<string>
      green4Light: import('@tamagui/web').Variable<string>
      green5Light: import('@tamagui/web').Variable<string>
      green6Light: import('@tamagui/web').Variable<string>
      green7Light: import('@tamagui/web').Variable<string>
      green8Light: import('@tamagui/web').Variable<string>
      green9Light: import('@tamagui/web').Variable<string>
      green10Light: import('@tamagui/web').Variable<string>
      green11Light: import('@tamagui/web').Variable<string>
      green12Light: import('@tamagui/web').Variable<string>
      gray1Light: import('@tamagui/web').Variable<string>
      gray2Light: import('@tamagui/web').Variable<string>
      gray3Light: import('@tamagui/web').Variable<string>
      gray4Light: import('@tamagui/web').Variable<string>
      gray5Light: import('@tamagui/web').Variable<string>
      gray6Light: import('@tamagui/web').Variable<string>
      gray7Light: import('@tamagui/web').Variable<string>
      gray8Light: import('@tamagui/web').Variable<string>
      gray9Light: import('@tamagui/web').Variable<string>
      gray10Light: import('@tamagui/web').Variable<string>
      gray11Light: import('@tamagui/web').Variable<string>
      gray12Light: import('@tamagui/web').Variable<string>
      blue1Light: import('@tamagui/web').Variable<string>
      blue2Light: import('@tamagui/web').Variable<string>
      blue3Light: import('@tamagui/web').Variable<string>
      blue4Light: import('@tamagui/web').Variable<string>
      blue5Light: import('@tamagui/web').Variable<string>
      blue6Light: import('@tamagui/web').Variable<string>
      blue7Light: import('@tamagui/web').Variable<string>
      blue8Light: import('@tamagui/web').Variable<string>
      blue9Light: import('@tamagui/web').Variable<string>
      blue10Light: import('@tamagui/web').Variable<string>
      blue11Light: import('@tamagui/web').Variable<string>
      blue12Light: import('@tamagui/web').Variable<string>
      yellow1Dark: import('@tamagui/web').Variable<string>
      yellow2Dark: import('@tamagui/web').Variable<string>
      yellow3Dark: import('@tamagui/web').Variable<string>
      yellow4Dark: import('@tamagui/web').Variable<string>
      yellow5Dark: import('@tamagui/web').Variable<string>
      yellow6Dark: import('@tamagui/web').Variable<string>
      yellow7Dark: import('@tamagui/web').Variable<string>
      yellow8Dark: import('@tamagui/web').Variable<string>
      yellow9Dark: import('@tamagui/web').Variable<string>
      yellow10Dark: import('@tamagui/web').Variable<string>
      yellow11Dark: import('@tamagui/web').Variable<string>
      yellow12Dark: import('@tamagui/web').Variable<string>
      red1Dark: import('@tamagui/web').Variable<string>
      red2Dark: import('@tamagui/web').Variable<string>
      red3Dark: import('@tamagui/web').Variable<string>
      red4Dark: import('@tamagui/web').Variable<string>
      red5Dark: import('@tamagui/web').Variable<string>
      red6Dark: import('@tamagui/web').Variable<string>
      red7Dark: import('@tamagui/web').Variable<string>
      red8Dark: import('@tamagui/web').Variable<string>
      red9Dark: import('@tamagui/web').Variable<string>
      red10Dark: import('@tamagui/web').Variable<string>
      red11Dark: import('@tamagui/web').Variable<string>
      red12Dark: import('@tamagui/web').Variable<string>
      purple1Dark: import('@tamagui/web').Variable<string>
      purple2Dark: import('@tamagui/web').Variable<string>
      purple3Dark: import('@tamagui/web').Variable<string>
      purple4Dark: import('@tamagui/web').Variable<string>
      purple5Dark: import('@tamagui/web').Variable<string>
      purple6Dark: import('@tamagui/web').Variable<string>
      purple7Dark: import('@tamagui/web').Variable<string>
      purple8Dark: import('@tamagui/web').Variable<string>
      purple9Dark: import('@tamagui/web').Variable<string>
      purple10Dark: import('@tamagui/web').Variable<string>
      purple11Dark: import('@tamagui/web').Variable<string>
      purple12Dark: import('@tamagui/web').Variable<string>
      pink1Dark: import('@tamagui/web').Variable<string>
      pink2Dark: import('@tamagui/web').Variable<string>
      pink3Dark: import('@tamagui/web').Variable<string>
      pink4Dark: import('@tamagui/web').Variable<string>
      pink5Dark: import('@tamagui/web').Variable<string>
      pink6Dark: import('@tamagui/web').Variable<string>
      pink7Dark: import('@tamagui/web').Variable<string>
      pink8Dark: import('@tamagui/web').Variable<string>
      pink9Dark: import('@tamagui/web').Variable<string>
      pink10Dark: import('@tamagui/web').Variable<string>
      pink11Dark: import('@tamagui/web').Variable<string>
      pink12Dark: import('@tamagui/web').Variable<string>
      orange1Dark: import('@tamagui/web').Variable<string>
      orange2Dark: import('@tamagui/web').Variable<string>
      orange3Dark: import('@tamagui/web').Variable<string>
      orange4Dark: import('@tamagui/web').Variable<string>
      orange5Dark: import('@tamagui/web').Variable<string>
      orange6Dark: import('@tamagui/web').Variable<string>
      orange7Dark: import('@tamagui/web').Variable<string>
      orange8Dark: import('@tamagui/web').Variable<string>
      orange9Dark: import('@tamagui/web').Variable<string>
      orange10Dark: import('@tamagui/web').Variable<string>
      orange11Dark: import('@tamagui/web').Variable<string>
      orange12Dark: import('@tamagui/web').Variable<string>
      green1Dark: import('@tamagui/web').Variable<string>
      green2Dark: import('@tamagui/web').Variable<string>
      green3Dark: import('@tamagui/web').Variable<string>
      green4Dark: import('@tamagui/web').Variable<string>
      green5Dark: import('@tamagui/web').Variable<string>
      green6Dark: import('@tamagui/web').Variable<string>
      green7Dark: import('@tamagui/web').Variable<string>
      green8Dark: import('@tamagui/web').Variable<string>
      green9Dark: import('@tamagui/web').Variable<string>
      green10Dark: import('@tamagui/web').Variable<string>
      green11Dark: import('@tamagui/web').Variable<string>
      green12Dark: import('@tamagui/web').Variable<string>
      gray1Dark: import('@tamagui/web').Variable<string>
      gray2Dark: import('@tamagui/web').Variable<string>
      gray3Dark: import('@tamagui/web').Variable<string>
      gray4Dark: import('@tamagui/web').Variable<string>
      gray5Dark: import('@tamagui/web').Variable<string>
      gray6Dark: import('@tamagui/web').Variable<string>
      gray7Dark: import('@tamagui/web').Variable<string>
      gray8Dark: import('@tamagui/web').Variable<string>
      gray9Dark: import('@tamagui/web').Variable<string>
      gray10Dark: import('@tamagui/web').Variable<string>
      gray11Dark: import('@tamagui/web').Variable<string>
      gray12Dark: import('@tamagui/web').Variable<string>
      blue1Dark: import('@tamagui/web').Variable<string>
      blue2Dark: import('@tamagui/web').Variable<string>
      blue3Dark: import('@tamagui/web').Variable<string>
      blue4Dark: import('@tamagui/web').Variable<string>
      blue5Dark: import('@tamagui/web').Variable<string>
      blue6Dark: import('@tamagui/web').Variable<string>
      blue7Dark: import('@tamagui/web').Variable<string>
      blue8Dark: import('@tamagui/web').Variable<string>
      blue9Dark: import('@tamagui/web').Variable<string>
      blue10Dark: import('@tamagui/web').Variable<string>
      blue11Dark: import('@tamagui/web').Variable<string>
      blue12Dark: import('@tamagui/web').Variable<string>
      white0: import('@tamagui/web').Variable<string>
      white075: import('@tamagui/web').Variable<string>
      white05: import('@tamagui/web').Variable<string>
      white025: import('@tamagui/web').Variable<string>
      black0: import('@tamagui/web').Variable<string>
      black075: import('@tamagui/web').Variable<string>
      black05: import('@tamagui/web').Variable<string>
      black025: import('@tamagui/web').Variable<string>
      white1: import('@tamagui/web').Variable<string>
      white2: import('@tamagui/web').Variable<string>
      white3: import('@tamagui/web').Variable<string>
      white4: import('@tamagui/web').Variable<string>
      white5: import('@tamagui/web').Variable<string>
      white6: import('@tamagui/web').Variable<string>
      white7: import('@tamagui/web').Variable<string>
      white8: import('@tamagui/web').Variable<string>
      white9: import('@tamagui/web').Variable<string>
      white10: import('@tamagui/web').Variable<string>
      white11: import('@tamagui/web').Variable<string>
      white12: import('@tamagui/web').Variable<string>
      black1: import('@tamagui/web').Variable<string>
      black2: import('@tamagui/web').Variable<string>
      black3: import('@tamagui/web').Variable<string>
      black4: import('@tamagui/web').Variable<string>
      black5: import('@tamagui/web').Variable<string>
      black6: import('@tamagui/web').Variable<string>
      black7: import('@tamagui/web').Variable<string>
      black8: import('@tamagui/web').Variable<string>
      black9: import('@tamagui/web').Variable<string>
      black10: import('@tamagui/web').Variable<string>
      black11: import('@tamagui/web').Variable<string>
      black12: import('@tamagui/web').Variable<string>
    }
    space: {
      0: import('@tamagui/web').Variable<number>
      0.25: import('@tamagui/web').Variable<number>
      0.5: import('@tamagui/web').Variable<number>
      0.75: import('@tamagui/web').Variable<number>
      1: import('@tamagui/web').Variable<number>
      1.5: import('@tamagui/web').Variable<number>
      2: import('@tamagui/web').Variable<number>
      2.5: import('@tamagui/web').Variable<number>
      3: import('@tamagui/web').Variable<number>
      3.5: import('@tamagui/web').Variable<number>
      4: import('@tamagui/web').Variable<number>
      true: import('@tamagui/web').Variable<number>
      4.5: import('@tamagui/web').Variable<number>
      5: import('@tamagui/web').Variable<number>
      6: import('@tamagui/web').Variable<number>
      7: import('@tamagui/web').Variable<number>
      8: import('@tamagui/web').Variable<number>
      9: import('@tamagui/web').Variable<number>
      10: import('@tamagui/web').Variable<number>
      11: import('@tamagui/web').Variable<number>
      12: import('@tamagui/web').Variable<number>
      13: import('@tamagui/web').Variable<number>
      14: import('@tamagui/web').Variable<number>
      15: import('@tamagui/web').Variable<number>
      16: import('@tamagui/web').Variable<number>
      17: import('@tamagui/web').Variable<number>
      18: import('@tamagui/web').Variable<number>
      19: import('@tamagui/web').Variable<number>
      20: import('@tamagui/web').Variable<number>
      [-0.25]: import('@tamagui/web').Variable<number>
      [-0.5]: import('@tamagui/web').Variable<number>
      [-0.75]: import('@tamagui/web').Variable<number>
      [-1]: import('@tamagui/web').Variable<number>
      [-1.5]: import('@tamagui/web').Variable<number>
      [-2]: import('@tamagui/web').Variable<number>
      [-2.5]: import('@tamagui/web').Variable<number>
      [-3]: import('@tamagui/web').Variable<number>
      [-3.5]: import('@tamagui/web').Variable<number>
      [-4]: import('@tamagui/web').Variable<number>
      '-true': import('@tamagui/web').Variable<number>
      [-4.5]: import('@tamagui/web').Variable<number>
      [-5]: import('@tamagui/web').Variable<number>
      [-6]: import('@tamagui/web').Variable<number>
      [-7]: import('@tamagui/web').Variable<number>
      [-8]: import('@tamagui/web').Variable<number>
      [-9]: import('@tamagui/web').Variable<number>
      [-10]: import('@tamagui/web').Variable<number>
      [-11]: import('@tamagui/web').Variable<number>
      [-12]: import('@tamagui/web').Variable<number>
      [-13]: import('@tamagui/web').Variable<number>
      [-14]: import('@tamagui/web').Variable<number>
      [-15]: import('@tamagui/web').Variable<number>
      [-16]: import('@tamagui/web').Variable<number>
      [-17]: import('@tamagui/web').Variable<number>
      [-18]: import('@tamagui/web').Variable<number>
      [-19]: import('@tamagui/web').Variable<number>
      [-20]: import('@tamagui/web').Variable<number>
    }
    size: {
      $0: import('@tamagui/web').Variable<number>
      '$0.25': import('@tamagui/web').Variable<number>
      '$0.5': import('@tamagui/web').Variable<number>
      '$0.75': import('@tamagui/web').Variable<number>
      $1: import('@tamagui/web').Variable<number>
      '$1.5': import('@tamagui/web').Variable<number>
      $2: import('@tamagui/web').Variable<number>
      '$2.5': import('@tamagui/web').Variable<number>
      $3: import('@tamagui/web').Variable<number>
      '$3.5': import('@tamagui/web').Variable<number>
      $4: import('@tamagui/web').Variable<number>
      $true: import('@tamagui/web').Variable<number>
      '$4.5': import('@tamagui/web').Variable<number>
      $5: import('@tamagui/web').Variable<number>
      $6: import('@tamagui/web').Variable<number>
      $7: import('@tamagui/web').Variable<number>
      $8: import('@tamagui/web').Variable<number>
      $9: import('@tamagui/web').Variable<number>
      $10: import('@tamagui/web').Variable<number>
      $11: import('@tamagui/web').Variable<number>
      $12: import('@tamagui/web').Variable<number>
      $13: import('@tamagui/web').Variable<number>
      $14: import('@tamagui/web').Variable<number>
      $15: import('@tamagui/web').Variable<number>
      $16: import('@tamagui/web').Variable<number>
      $17: import('@tamagui/web').Variable<number>
      $18: import('@tamagui/web').Variable<number>
      $19: import('@tamagui/web').Variable<number>
      $20: import('@tamagui/web').Variable<number>
    }
    radius: {
      0: import('@tamagui/web').Variable<number>
      2: import('@tamagui/web').Variable<number>
      3: import('@tamagui/web').Variable<number>
      1: import('@tamagui/web').Variable<number>
      4: import('@tamagui/web').Variable<number>
      8: import('@tamagui/web').Variable<number>
      true: import('@tamagui/web').Variable<number>
      12: import('@tamagui/web').Variable<number>
      5: import('@tamagui/web').Variable<number>
      7: import('@tamagui/web').Variable<number>
      9: import('@tamagui/web').Variable<number>
      10: import('@tamagui/web').Variable<number>
      6: import('@tamagui/web').Variable<number>
      11: import('@tamagui/web').Variable<number>
    }
    zIndex: {
      0: import('@tamagui/web').Variable<number>
      1: import('@tamagui/web').Variable<number>
      2: import('@tamagui/web').Variable<number>
      3: import('@tamagui/web').Variable<number>
      4: import('@tamagui/web').Variable<number>
      5: import('@tamagui/web').Variable<number>
    }
  } & Omit<
    {
      color: {
        yellow1Light: import('@tamagui/web').Variable<string>
        yellow2Light: import('@tamagui/web').Variable<string>
        yellow3Light: import('@tamagui/web').Variable<string>
        yellow4Light: import('@tamagui/web').Variable<string>
        yellow5Light: import('@tamagui/web').Variable<string>
        yellow6Light: import('@tamagui/web').Variable<string>
        yellow7Light: import('@tamagui/web').Variable<string>
        yellow8Light: import('@tamagui/web').Variable<string>
        yellow9Light: import('@tamagui/web').Variable<string>
        yellow10Light: import('@tamagui/web').Variable<string>
        yellow11Light: import('@tamagui/web').Variable<string>
        yellow12Light: import('@tamagui/web').Variable<string>
        red1Light: import('@tamagui/web').Variable<string>
        red2Light: import('@tamagui/web').Variable<string>
        red3Light: import('@tamagui/web').Variable<string>
        red4Light: import('@tamagui/web').Variable<string>
        red5Light: import('@tamagui/web').Variable<string>
        red6Light: import('@tamagui/web').Variable<string>
        red7Light: import('@tamagui/web').Variable<string>
        red8Light: import('@tamagui/web').Variable<string>
        red9Light: import('@tamagui/web').Variable<string>
        red10Light: import('@tamagui/web').Variable<string>
        red11Light: import('@tamagui/web').Variable<string>
        red12Light: import('@tamagui/web').Variable<string>
        purple1Light: import('@tamagui/web').Variable<string>
        purple2Light: import('@tamagui/web').Variable<string>
        purple3Light: import('@tamagui/web').Variable<string>
        purple4Light: import('@tamagui/web').Variable<string>
        purple5Light: import('@tamagui/web').Variable<string>
        purple6Light: import('@tamagui/web').Variable<string>
        purple7Light: import('@tamagui/web').Variable<string>
        purple8Light: import('@tamagui/web').Variable<string>
        purple9Light: import('@tamagui/web').Variable<string>
        purple10Light: import('@tamagui/web').Variable<string>
        purple11Light: import('@tamagui/web').Variable<string>
        purple12Light: import('@tamagui/web').Variable<string>
        pink1Light: import('@tamagui/web').Variable<string>
        pink2Light: import('@tamagui/web').Variable<string>
        pink3Light: import('@tamagui/web').Variable<string>
        pink4Light: import('@tamagui/web').Variable<string>
        pink5Light: import('@tamagui/web').Variable<string>
        pink6Light: import('@tamagui/web').Variable<string>
        pink7Light: import('@tamagui/web').Variable<string>
        pink8Light: import('@tamagui/web').Variable<string>
        pink9Light: import('@tamagui/web').Variable<string>
        pink10Light: import('@tamagui/web').Variable<string>
        pink11Light: import('@tamagui/web').Variable<string>
        pink12Light: import('@tamagui/web').Variable<string>
        orange1Light: import('@tamagui/web').Variable<string>
        orange2Light: import('@tamagui/web').Variable<string>
        orange3Light: import('@tamagui/web').Variable<string>
        orange4Light: import('@tamagui/web').Variable<string>
        orange5Light: import('@tamagui/web').Variable<string>
        orange6Light: import('@tamagui/web').Variable<string>
        orange7Light: import('@tamagui/web').Variable<string>
        orange8Light: import('@tamagui/web').Variable<string>
        orange9Light: import('@tamagui/web').Variable<string>
        orange10Light: import('@tamagui/web').Variable<string>
        orange11Light: import('@tamagui/web').Variable<string>
        orange12Light: import('@tamagui/web').Variable<string>
        green1Light: import('@tamagui/web').Variable<string>
        green2Light: import('@tamagui/web').Variable<string>
        green3Light: import('@tamagui/web').Variable<string>
        green4Light: import('@tamagui/web').Variable<string>
        green5Light: import('@tamagui/web').Variable<string>
        green6Light: import('@tamagui/web').Variable<string>
        green7Light: import('@tamagui/web').Variable<string>
        green8Light: import('@tamagui/web').Variable<string>
        green9Light: import('@tamagui/web').Variable<string>
        green10Light: import('@tamagui/web').Variable<string>
        green11Light: import('@tamagui/web').Variable<string>
        green12Light: import('@tamagui/web').Variable<string>
        gray1Light: import('@tamagui/web').Variable<string>
        gray2Light: import('@tamagui/web').Variable<string>
        gray3Light: import('@tamagui/web').Variable<string>
        gray4Light: import('@tamagui/web').Variable<string>
        gray5Light: import('@tamagui/web').Variable<string>
        gray6Light: import('@tamagui/web').Variable<string>
        gray7Light: import('@tamagui/web').Variable<string>
        gray8Light: import('@tamagui/web').Variable<string>
        gray9Light: import('@tamagui/web').Variable<string>
        gray10Light: import('@tamagui/web').Variable<string>
        gray11Light: import('@tamagui/web').Variable<string>
        gray12Light: import('@tamagui/web').Variable<string>
        blue1Light: import('@tamagui/web').Variable<string>
        blue2Light: import('@tamagui/web').Variable<string>
        blue3Light: import('@tamagui/web').Variable<string>
        blue4Light: import('@tamagui/web').Variable<string>
        blue5Light: import('@tamagui/web').Variable<string>
        blue6Light: import('@tamagui/web').Variable<string>
        blue7Light: import('@tamagui/web').Variable<string>
        blue8Light: import('@tamagui/web').Variable<string>
        blue9Light: import('@tamagui/web').Variable<string>
        blue10Light: import('@tamagui/web').Variable<string>
        blue11Light: import('@tamagui/web').Variable<string>
        blue12Light: import('@tamagui/web').Variable<string>
        yellow1Dark: import('@tamagui/web').Variable<string>
        yellow2Dark: import('@tamagui/web').Variable<string>
        yellow3Dark: import('@tamagui/web').Variable<string>
        yellow4Dark: import('@tamagui/web').Variable<string>
        yellow5Dark: import('@tamagui/web').Variable<string>
        yellow6Dark: import('@tamagui/web').Variable<string>
        yellow7Dark: import('@tamagui/web').Variable<string>
        yellow8Dark: import('@tamagui/web').Variable<string>
        yellow9Dark: import('@tamagui/web').Variable<string>
        yellow10Dark: import('@tamagui/web').Variable<string>
        yellow11Dark: import('@tamagui/web').Variable<string>
        yellow12Dark: import('@tamagui/web').Variable<string>
        red1Dark: import('@tamagui/web').Variable<string>
        red2Dark: import('@tamagui/web').Variable<string>
        red3Dark: import('@tamagui/web').Variable<string>
        red4Dark: import('@tamagui/web').Variable<string>
        red5Dark: import('@tamagui/web').Variable<string>
        red6Dark: import('@tamagui/web').Variable<string>
        red7Dark: import('@tamagui/web').Variable<string>
        red8Dark: import('@tamagui/web').Variable<string>
        red9Dark: import('@tamagui/web').Variable<string>
        red10Dark: import('@tamagui/web').Variable<string>
        red11Dark: import('@tamagui/web').Variable<string>
        red12Dark: import('@tamagui/web').Variable<string>
        purple1Dark: import('@tamagui/web').Variable<string>
        purple2Dark: import('@tamagui/web').Variable<string>
        purple3Dark: import('@tamagui/web').Variable<string>
        purple4Dark: import('@tamagui/web').Variable<string>
        purple5Dark: import('@tamagui/web').Variable<string>
        purple6Dark: import('@tamagui/web').Variable<string>
        purple7Dark: import('@tamagui/web').Variable<string>
        purple8Dark: import('@tamagui/web').Variable<string>
        purple9Dark: import('@tamagui/web').Variable<string>
        purple10Dark: import('@tamagui/web').Variable<string>
        purple11Dark: import('@tamagui/web').Variable<string>
        purple12Dark: import('@tamagui/web').Variable<string>
        pink1Dark: import('@tamagui/web').Variable<string>
        pink2Dark: import('@tamagui/web').Variable<string>
        pink3Dark: import('@tamagui/web').Variable<string>
        pink4Dark: import('@tamagui/web').Variable<string>
        pink5Dark: import('@tamagui/web').Variable<string>
        pink6Dark: import('@tamagui/web').Variable<string>
        pink7Dark: import('@tamagui/web').Variable<string>
        pink8Dark: import('@tamagui/web').Variable<string>
        pink9Dark: import('@tamagui/web').Variable<string>
        pink10Dark: import('@tamagui/web').Variable<string>
        pink11Dark: import('@tamagui/web').Variable<string>
        pink12Dark: import('@tamagui/web').Variable<string>
        orange1Dark: import('@tamagui/web').Variable<string>
        orange2Dark: import('@tamagui/web').Variable<string>
        orange3Dark: import('@tamagui/web').Variable<string>
        orange4Dark: import('@tamagui/web').Variable<string>
        orange5Dark: import('@tamagui/web').Variable<string>
        orange6Dark: import('@tamagui/web').Variable<string>
        orange7Dark: import('@tamagui/web').Variable<string>
        orange8Dark: import('@tamagui/web').Variable<string>
        orange9Dark: import('@tamagui/web').Variable<string>
        orange10Dark: import('@tamagui/web').Variable<string>
        orange11Dark: import('@tamagui/web').Variable<string>
        orange12Dark: import('@tamagui/web').Variable<string>
        green1Dark: import('@tamagui/web').Variable<string>
        green2Dark: import('@tamagui/web').Variable<string>
        green3Dark: import('@tamagui/web').Variable<string>
        green4Dark: import('@tamagui/web').Variable<string>
        green5Dark: import('@tamagui/web').Variable<string>
        green6Dark: import('@tamagui/web').Variable<string>
        green7Dark: import('@tamagui/web').Variable<string>
        green8Dark: import('@tamagui/web').Variable<string>
        green9Dark: import('@tamagui/web').Variable<string>
        green10Dark: import('@tamagui/web').Variable<string>
        green11Dark: import('@tamagui/web').Variable<string>
        green12Dark: import('@tamagui/web').Variable<string>
        gray1Dark: import('@tamagui/web').Variable<string>
        gray2Dark: import('@tamagui/web').Variable<string>
        gray3Dark: import('@tamagui/web').Variable<string>
        gray4Dark: import('@tamagui/web').Variable<string>
        gray5Dark: import('@tamagui/web').Variable<string>
        gray6Dark: import('@tamagui/web').Variable<string>
        gray7Dark: import('@tamagui/web').Variable<string>
        gray8Dark: import('@tamagui/web').Variable<string>
        gray9Dark: import('@tamagui/web').Variable<string>
        gray10Dark: import('@tamagui/web').Variable<string>
        gray11Dark: import('@tamagui/web').Variable<string>
        gray12Dark: import('@tamagui/web').Variable<string>
        blue1Dark: import('@tamagui/web').Variable<string>
        blue2Dark: import('@tamagui/web').Variable<string>
        blue3Dark: import('@tamagui/web').Variable<string>
        blue4Dark: import('@tamagui/web').Variable<string>
        blue5Dark: import('@tamagui/web').Variable<string>
        blue6Dark: import('@tamagui/web').Variable<string>
        blue7Dark: import('@tamagui/web').Variable<string>
        blue8Dark: import('@tamagui/web').Variable<string>
        blue9Dark: import('@tamagui/web').Variable<string>
        blue10Dark: import('@tamagui/web').Variable<string>
        blue11Dark: import('@tamagui/web').Variable<string>
        blue12Dark: import('@tamagui/web').Variable<string>
        white0: import('@tamagui/web').Variable<string>
        white075: import('@tamagui/web').Variable<string>
        white05: import('@tamagui/web').Variable<string>
        white025: import('@tamagui/web').Variable<string>
        black0: import('@tamagui/web').Variable<string>
        black075: import('@tamagui/web').Variable<string>
        black05: import('@tamagui/web').Variable<string>
        black025: import('@tamagui/web').Variable<string>
        white1: import('@tamagui/web').Variable<string>
        white2: import('@tamagui/web').Variable<string>
        white3: import('@tamagui/web').Variable<string>
        white4: import('@tamagui/web').Variable<string>
        white5: import('@tamagui/web').Variable<string>
        white6: import('@tamagui/web').Variable<string>
        white7: import('@tamagui/web').Variable<string>
        white8: import('@tamagui/web').Variable<string>
        white9: import('@tamagui/web').Variable<string>
        white10: import('@tamagui/web').Variable<string>
        white11: import('@tamagui/web').Variable<string>
        white12: import('@tamagui/web').Variable<string>
        black1: import('@tamagui/web').Variable<string>
        black2: import('@tamagui/web').Variable<string>
        black3: import('@tamagui/web').Variable<string>
        black4: import('@tamagui/web').Variable<string>
        black5: import('@tamagui/web').Variable<string>
        black6: import('@tamagui/web').Variable<string>
        black7: import('@tamagui/web').Variable<string>
        black8: import('@tamagui/web').Variable<string>
        black9: import('@tamagui/web').Variable<string>
        black10: import('@tamagui/web').Variable<string>
        black11: import('@tamagui/web').Variable<string>
        black12: import('@tamagui/web').Variable<string>
      }
      radius: {
        0: import('@tamagui/web').Variable<number>
        2: import('@tamagui/web').Variable<number>
        3: import('@tamagui/web').Variable<number>
        1: import('@tamagui/web').Variable<number>
        4: import('@tamagui/web').Variable<number>
        8: import('@tamagui/web').Variable<number>
        true: import('@tamagui/web').Variable<number>
        12: import('@tamagui/web').Variable<number>
        5: import('@tamagui/web').Variable<number>
        7: import('@tamagui/web').Variable<number>
        9: import('@tamagui/web').Variable<number>
        10: import('@tamagui/web').Variable<number>
        6: import('@tamagui/web').Variable<number>
        11: import('@tamagui/web').Variable<number>
      }
      zIndex: {
        0: import('@tamagui/web').Variable<number>
        1: import('@tamagui/web').Variable<number>
        2: import('@tamagui/web').Variable<number>
        3: import('@tamagui/web').Variable<number>
        4: import('@tamagui/web').Variable<number>
        5: import('@tamagui/web').Variable<number>
      }
      space: {
        0: import('@tamagui/web').Variable<number>
        0.25: import('@tamagui/web').Variable<number>
        0.5: import('@tamagui/web').Variable<number>
        0.75: import('@tamagui/web').Variable<number>
        1: import('@tamagui/web').Variable<number>
        1.5: import('@tamagui/web').Variable<number>
        2: import('@tamagui/web').Variable<number>
        2.5: import('@tamagui/web').Variable<number>
        3: import('@tamagui/web').Variable<number>
        3.5: import('@tamagui/web').Variable<number>
        4: import('@tamagui/web').Variable<number>
        true: import('@tamagui/web').Variable<number>
        4.5: import('@tamagui/web').Variable<number>
        5: import('@tamagui/web').Variable<number>
        6: import('@tamagui/web').Variable<number>
        7: import('@tamagui/web').Variable<number>
        8: import('@tamagui/web').Variable<number>
        9: import('@tamagui/web').Variable<number>
        10: import('@tamagui/web').Variable<number>
        11: import('@tamagui/web').Variable<number>
        12: import('@tamagui/web').Variable<number>
        13: import('@tamagui/web').Variable<number>
        14: import('@tamagui/web').Variable<number>
        15: import('@tamagui/web').Variable<number>
        16: import('@tamagui/web').Variable<number>
        17: import('@tamagui/web').Variable<number>
        18: import('@tamagui/web').Variable<number>
        19: import('@tamagui/web').Variable<number>
        20: import('@tamagui/web').Variable<number>
        [-0.25]: import('@tamagui/web').Variable<number>
        [-0.5]: import('@tamagui/web').Variable<number>
        [-0.75]: import('@tamagui/web').Variable<number>
        [-1]: import('@tamagui/web').Variable<number>
        [-1.5]: import('@tamagui/web').Variable<number>
        [-2]: import('@tamagui/web').Variable<number>
        [-2.5]: import('@tamagui/web').Variable<number>
        [-3]: import('@tamagui/web').Variable<number>
        [-3.5]: import('@tamagui/web').Variable<number>
        [-4]: import('@tamagui/web').Variable<number>
        '-true': import('@tamagui/web').Variable<number>
        [-4.5]: import('@tamagui/web').Variable<number>
        [-5]: import('@tamagui/web').Variable<number>
        [-6]: import('@tamagui/web').Variable<number>
        [-7]: import('@tamagui/web').Variable<number>
        [-8]: import('@tamagui/web').Variable<number>
        [-9]: import('@tamagui/web').Variable<number>
        [-10]: import('@tamagui/web').Variable<number>
        [-11]: import('@tamagui/web').Variable<number>
        [-12]: import('@tamagui/web').Variable<number>
        [-13]: import('@tamagui/web').Variable<number>
        [-14]: import('@tamagui/web').Variable<number>
        [-15]: import('@tamagui/web').Variable<number>
        [-16]: import('@tamagui/web').Variable<number>
        [-17]: import('@tamagui/web').Variable<number>
        [-18]: import('@tamagui/web').Variable<number>
        [-19]: import('@tamagui/web').Variable<number>
        [-20]: import('@tamagui/web').Variable<number>
      }
      size: {
        $0: import('@tamagui/web').Variable<number>
        '$0.25': import('@tamagui/web').Variable<number>
        '$0.5': import('@tamagui/web').Variable<number>
        '$0.75': import('@tamagui/web').Variable<number>
        $1: import('@tamagui/web').Variable<number>
        '$1.5': import('@tamagui/web').Variable<number>
        $2: import('@tamagui/web').Variable<number>
        '$2.5': import('@tamagui/web').Variable<number>
        $3: import('@tamagui/web').Variable<number>
        '$3.5': import('@tamagui/web').Variable<number>
        $4: import('@tamagui/web').Variable<number>
        $true: import('@tamagui/web').Variable<number>
        '$4.5': import('@tamagui/web').Variable<number>
        $5: import('@tamagui/web').Variable<number>
        $6: import('@tamagui/web').Variable<number>
        $7: import('@tamagui/web').Variable<number>
        $8: import('@tamagui/web').Variable<number>
        $9: import('@tamagui/web').Variable<number>
        $10: import('@tamagui/web').Variable<number>
        $11: import('@tamagui/web').Variable<number>
        $12: import('@tamagui/web').Variable<number>
        $13: import('@tamagui/web').Variable<number>
        $14: import('@tamagui/web').Variable<number>
        $15: import('@tamagui/web').Variable<number>
        $16: import('@tamagui/web').Variable<number>
        $17: import('@tamagui/web').Variable<number>
        $18: import('@tamagui/web').Variable<number>
        $19: import('@tamagui/web').Variable<number>
        $20: import('@tamagui/web').Variable<number>
      }
    },
    'size' | 'color' | 'space' | 'radius' | 'zIndex'
  >
  fonts: {
    body: import('@tamagui/web').FillInFont<
      import('@tamagui/web').GenericFont,
      2 | 9 | 15 | 1 | 10 | 5 | 14 | 11 | 12 | 16 | 3 | 4 | 6 | 7 | 8 | 13 | 'true'
    >
    heading: import('@tamagui/web').FillInFont<
      import('@tamagui/web').GenericFont,
      2 | 9 | 15 | 1 | 10 | 5 | 14 | 11 | 12 | 16 | 3 | 4 | 6 | 7 | 8 | 13 | 'true'
    >
  }
  selectionStyles: (theme: Record<string, string>) => {
    backgroundColor: string
    color: string
  } | null
  settings: {
    mediaQueryDefaultActive: {
      '2xl': boolean
      xl: boolean
      lg: boolean
      md: boolean
      sm: boolean
      xs: boolean
      xxs: boolean
    }
    defaultFont: string
    fastSchemeChange: true
    shouldAddPrefersColorThemes: true
    allowedStyleValues: 'somewhat-strict-web'
    themeClassNameOnRoot: true
  }
}
//# sourceMappingURL=v4.d.ts.map
