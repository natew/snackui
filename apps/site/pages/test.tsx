// debug
// import '../lib/wdyr'

import { SwitchDemo } from '@tamagui/demos'
import { memo } from 'react'
import { Button, Theme } from 'tamagui'

import { ThemeToggle } from '../components/ThemeToggle'

export default memo(() => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flex: 1,
      }}
    >
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <ThemeToggle />
      </div>

      <Button
        size="$3"
        chromeless
        debug="verbose"
        circular
        hoverStyle={{
          bc: 'transparent',
        }}
        pressStyle={{
          bc: '$backgroundPress',
        }}
      >
        test
      </Button>
    </div>
  )
})

// export async function getStaticProps() {
//   return {
//     revalidate: 0.00001,
//     props: {},
//   }
// }
