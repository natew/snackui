import { AnimationsDemo, AnimationsPresenceDemo, ListItemDemo } from '@tamagui/demos'
import { TabsAdvancedDemo } from '@tamagui/demos'
import { LogoWords, TamaguiLogo } from '@tamagui/logo'
import { ListItem, Square, Stack, Theme, YStack, styled } from 'tamagui'

const TabsRovingIndicator = styled(Stack, {
  position: 'absolute',
  backgroundColor: '$color5',
  opacity: 0.7,
  animation: '100ms',
  enterStyle: {
    opacity: 0,
  },
  exitStyle: {
    opacity: 0,
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$color8',
        opacity: 0.6,
      },
    },
  },
})

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
    <YStack w={1000}>
      <Theme name="blue">
        <ListItem debug theme="active" title="hi" />
        {/* <ListItem title="hi" /> */}
      </Theme>
    </YStack>
  </div>
)
