import * as React from 'react'
import { describe, expect, test } from 'vitest'

import { extractForNative } from './lib/extract'

Error.stackTraceLimit = Infinity
process.env.TAMAGUI_TARGET = 'native'
process.env.IS_STATIC = ''

window['React'] = React

describe('flatten-tests', () => {
  test('flattened media queries', async () => {
    const output = await extractForNative(`
      import { YStack } from 'tamagui/src/YStack'
      import { useMedia } from 'tamagui'
  
      export function Test(isLoading) {
        const media = useMedia()
        
        return (
          <YStack
            y={10}
            x={20}
            rotate="10deg"
            {...media.sm && {
              scale: 2,
              borderRadius: 10,
              backgroundColor: isLoading ? 'red' : 'blue'
            }}
          />
        )
      }
    `)
    const code = output?.code ?? ''

    expect(code).toMatchSnapshot()

    const startStr = `ReactNativeStyleSheet.create(`
    const start = code.indexOf(startStr)
    const end = code.indexOf(`});`)
    const defs = code.slice(start + startStr.length, end + 1)
    const sheetStyles = JSON.parse(defs)

    expect(sheetStyles['1']).toEqual({
      transform: [
        {
          translateY: 10,
        },
        {
          translateX: 20,
        },
        {
          rotate: '10deg',
        },
      ],
      flexDirection: 'column',
      flexShrink: 0,
      alignItems: 'stretch',
      minHeight: 0,
      minWidth: 0,
      position: 'relative',
      display: 'flex',
      flexBasis: 'auto',
    })

    expect(sheetStyles['2']).toEqual({
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      transform: [
        {
          scale: 2,
        },
      ],
    })

    expect(sheetStyles['4']).toEqual({
      backgroundColor: 'rgba(255,0,0,1.00)',
    })

    expect(sheetStyles['6']).toEqual({
      backgroundColor: 'rgba(0,0,255,1.00)',
    })
  })
})
