// import { Stack, TamaguiProvider } from '@tamagui/core'
import { View } from 'react-native'

// import { default as config } from './tamagui.config'

export function App() {
  console.log('🍄🍄🍄')
  return (
    // <TamaguiProvider config={config}>
    <View style={{ backgroundColor: 'red2', width: 200, height: 200 }} />
    // <Stack bc="green" width={100} height={100} />
    // </TamaguiProvider>
  )
}
