// import './wdyr'

import { useEffect, useState } from 'react'
import { AnimatePresence, H1, XStack } from 'tamagui'

export const Sandbox = () => {
  const [numbers, setNumbers] = useState([0, 5, 2, 3])

  useEffect(() => {
    setTimeout(() => {
      setNumbers(
        numbers.map((n) => {
          return Math.floor(Math.random() * 10)
        })
      )
    }, 3000)
  }, [numbers])

  return (
    <XStack als="center" m="auto">
      {numbers.map((n, i) => {
        return (
          <AnimatePresence exitBeforeEnter key={i}>
            <H1
              animation="100ms"
              enterStyle={{
                y: -30,
                o: 0,
              }}
              exitStyle={{
                y: 30,
                o: 0,
              }}
              o={1}
              key={n}
            >
              {n}
            </H1>
          </AnimatePresence>
        )
      })}
    </XStack>
  )
}
