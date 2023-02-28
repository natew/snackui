import { createTamagui, expandStyles, getStylesAtomic } from '@tamagui/core-node'
import { beforeAll, describe, expect, test } from 'vitest'

import config from '../../config-default-node/dist'

beforeAll(() => {
  createTamagui(config.getDefaultTamaguiConfig())
})

describe('extract-tests', () => {
  test('converts a style object to class names', () => {
    const style = {
      backgroundColor: 'red',
      transform: [{ rotateY: '10deg' }],
      shadowRadius: 10,
      shadowColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: 'blue',
    }
    const styles = getStylesAtomic(style)
    const style1 = styles.find((x) => x.property === 'backgroundColor')
    const style2 = styles.find((x) => x.property === 'transform')
    const style3 = styles.find((x) => x.property === 'boxShadow')
    expect(!!style1).toBeTruthy()
    expect(!!style2).toBeTruthy()
    expect(!!style3).toBeTruthy()
    expect(style1!.rules[0]).toMatchSnapshot()
    expect(style2!.rules[0]).toMatchSnapshot()
    expect(style3!.rules[0]).toMatchSnapshot()
  })

  test('supports RTL properties', () => {
    const style = {
      paddingStart: 100,
      paddingEnd: 10,
      marginStart: 50,
      marginEnd: 2,
    }
    const styles = getStylesAtomic(style)
    expect(styles).toMatchSnapshot()
  })

  test('expands and resolves shorthand props', () => {
    const style = expandStyles({
      padding: 10,
      paddingVertical: 0,
    })
    const [pT, pR, pB, pL] = getStylesAtomic(style)
    expect(pT.value).toBe('0px')
    expect(pB.value).toBe('0px')
    expect(pL.value).toBe('10px')
    expect(pR.value).toBe('10px')
    const style2 = expandStyles({
      borderColor: 'yellow',
      borderWidth: 10,
    })
    const styles2 = getStylesAtomic(style2)
    expect(styles2.some((x) => x.property === 'borderRightStyle')).toBeTruthy()
  })
})
