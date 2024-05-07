import { Slot, Stack } from '@vxrn/router'
import { isWeb } from 'tamagui'
import { Providers } from '../src/Providers'

export default function Layout() {
  return (
    <Providers>
      {isWeb ? (
        <Slot />
      ) : (
        <Stack
          screenOptions={
            isWeb
              ? {
                  header() {
                    return null
                  },

                  contentStyle: {
                    position: 'relative',
                    backgroundColor: 'red',
                  },
                }
              : {}
          }
        />
      )}
    </Providers>
  )
}
