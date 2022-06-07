import { isWeb } from '../constants/platform'
import { getVariableValue, getVariableVariable } from '../createVariable'
import { FontLineHeightTokens, FontSizeTokens, SizeTokens, SpaceTokens } from '../types'

/**
 * Simple calc() that handles native + web
 *   on web: outputs a calc() string
 *   on native: outputs a plain number
 */

export type CalcVal =
  | string
  | number
  | SizeTokens
  | SpaceTokens
  | FontSizeTokens
  | FontLineHeightTokens

const operators = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '/': (a: number, b: number) => a / b,
  '*': (a: number, b: number) => a * b,
}

type Operator = keyof typeof operators

export const calc = (...valuesAndOperators: (CalcVal | Operator)[]) => {
  if (isWeb) {
    let res = 'calc('
    for (const cur of valuesAndOperators) {
      if (operators[cur as any]) {
        // spaces are significant
        res += ' ' + cur + ' '
      } else {
        res += convertToVariableOrNumber(cur)
      }
    }
    console.log('got', res, 'from', valuesAndOperators)
    return res + ')'
  }

  let res = 0
  let nextOp: any = null
  for (const cur of valuesAndOperators) {
    if (operators[cur as any]) {
      nextOp = operators[cur as any]
    } else {
      if (nextOp) {
        res = nextOp(res, cur)
        nextOp = null
      } else {
        res = +cur
      }
    }
  }
  return res
}

const convertToVariableOrNumber = (v: any) => {
  const varOrVal = getVariableVariable(v)
  if (typeof varOrVal === 'number') {
    return `${varOrVal}px`
  }
  return varOrVal
}
