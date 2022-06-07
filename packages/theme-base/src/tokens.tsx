import {
  blue,
  blueDark,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  teal,
  tealDark,
  violet,
  violetDark,
  yellow,
  yellowDark,
} from '@tamagui/colors'
import { Variable, createTokens, createVariables } from '@tamagui/core'

// should roughly map to button/input etc height at each level
// fonts should match that height/lineHeight at each stop
// so these are really non-linear on purpose
// why?
//   - at sizes <1, used for fine grained things (borders, smallest paddingY)
//     - so smallest padY should be roughly 1-4px so it can join with lineHeight
//   - at sizes >=1, have to consider "pressability" (jumps up)
//   - after that it should go upwards somewhat naturally
//   - H1 / headings top out at 10 naturally, so after 10 we can go upwards faster
//  but also one more wrinkle...
//  space is used in conjunction with size
//  i'm setting space to generally just a fixed fraction of size (~1/3-2/3 still fine tuning)
const size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 8,
  1: 20,
  1.5: 24,
  2: 28,
  2.5: 32,
  3: 36,
  3.5: 40,
  4: 44,
  true: 44,
  4.5: 48,
  5: 52,
  5.5: 59,
  6: 64,
  6.5: 69,
  7: 74,
  7.6: 79,
  8: 84,
  8.5: 89,
  9: 94,
  9.5: 99,
  10: 104,
  11: 124,
  12: 144,
  13: 164,
  14: 184,
  15: 204,
  16: 224,
  17: 224,
  18: 244,
  19: 264,
  20: 284,
}

type Sizes = typeof size
type SizeKeys = `${keyof Sizes}`

const spaces = Object.entries(size).map(([k, v]) => [
  k,
  Math.max(0, v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12)),
])

const spacesNegative = spaces.map(([k, v]) => [`-${k}`, -v])

const space: {
  [Key in `-${SizeKeys}` | SizeKeys]: Key extends keyof Sizes ? Sizes[Key] : number
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as any

const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
}

export const colorTokens = createVariables({
  light: {
    blue,
    gray,
    grayA,
    green,
    orange,
    pink,
    purple,
    red,
    violet,
    yellow,
    teal,
  },
  dark: {
    blue: blueDark,
    gray: grayDark,
    grayA: grayDarkA,
    green: greenDark,
    orange: orangeDark,
    pink: pinkDark,
    purple: purpleDark,
    red: redDark,
    violet: violetDark,
    yellow: yellowDark,
    teal: tealDark,
  },
})

export const darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.grayA,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.violet,
  ...colorTokens.dark.yellow,
  ...colorTokens.dark.teal,
}

export const lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.grayA,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.violet,
  ...colorTokens.light.yellow,
  ...colorTokens.light.teal,
}

const allColors = {
  ...lightColors,
  ...darkPostfix(darkColors),
}

function darkPostfix<A extends { [key: string]: Variable<string> }>(
  obj: A
): {
  [Key in `${keyof A extends string ? keyof A : never}Dark`]: Variable<string>
} {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}Dark`, v])) as any
}

const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
}

export const tokens = createTokens({
  color: allColors,
  radius,
  zIndex,
  space,
  size,
})

console.log('size', { size, space })
