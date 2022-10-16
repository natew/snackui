// import { isWeb } from '@tamagui/constants'

// import { getVariableVariable } from '../createVariable'
// import { FontLineHeightTokens, FontSizeTokens, SizeTokens, SpaceTokens } from '../types'

// // unused code - not exported could be used for cross compat calc() functions

// /**
//  * Simple calc() that handles native + web
//  *   on web: outputs a calc() string
//  *   on native: outputs a plain number
//  */

// export type CalcVal =
//   | string
//   | number
//   | SizeTokens
//   | SpaceTokens
//   | FontSizeTokens
//   | FontLineHeightTokens

// const operators = {
//   '+': (a: number, b: number) => a + b,
//   '-': (a: number, b: number) => a - b,
//   '/': (a: number, b: number) => a / b,
//   '*': (a: number, b: number) => a * b,
// }

// type Operator = keyof typeof operators

// export const calc = (...valuesAndOperators: (CalcVal | Operator)[]) => {
//   if (isWeb) {
//     let res = 'calc('
//     for (const cur of valuesAndOperators) {
//       if (operators[cur as any]) {
//         // spaces are significant
//         res += ' ' + cur + ' '
//       } else {
//         res += convertToVariableOrNumber(cur)
//       }
//     }
//     return res + ')'
//   }

//   let res = 0
//   let nextOp: any = null
//   for (const cur of valuesAndOperators) {
//     if (operators[cur as any]) {
//       nextOp = operators[cur as any]
//     } else {
//       if (nextOp) {
//         res = nextOp(res, cur)
//         nextOp = null
//       } else {
//         res = +cur
//       }
//     }
//   }
//   return res
// }

// const convertToVariableOrNumber = (v: any) => {
//   const varOrVal = getVariableVariable(v)
//   if (typeof varOrVal === 'number') {
//     return `${varOrVal}px`
//   }
//   return varOrVal
// }
