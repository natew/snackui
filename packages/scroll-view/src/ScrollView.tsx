import { fullscreenStyle } from '@tamagui/stacks'
import { GetProps, setupReactNative, styled } from '@tamagui/web'
import { ScrollView as ScrollViewNative } from 'react-native'

setupReactNative({
  ScrollView: ScrollViewNative,
})

export const ScrollView = styled(
  ScrollViewNative,
  {
    name: 'ScrollView',
    scrollEnabled: true,

    variants: {
      fullscreen: {
        true: fullscreenStyle,
      },
    } as const,
  },
  {
    // this maybe not necesssary since setupReactNative is called?
    isReactNative: true,
  }
)

export type ScrollViewProps = GetProps<typeof ScrollView>
