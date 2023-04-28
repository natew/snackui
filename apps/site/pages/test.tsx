import { AnimationsDemo, AnimationsPresenceDemo } from '@tamagui/demos'
import { LogoWords, TamaguiLogo } from '@tamagui/logo'
import { Square, YStack } from 'tamagui'

// export default () => <Square size={100} animation="quick" bc="$background" />
export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flex: 1,
    }}
  >
    {/* <LogoWords animated /> */}
    <YStack w={1000}>
      <AnimationsDemo />
      <AnimationsPresenceDemo />
    </YStack>
  </div>
)
