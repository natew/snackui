import { TamaguiLogo } from '@tamagui/logo'
import { H1, Paragraph, Square, XStack, YStack } from 'tamagui'

import { useDemoProps } from '../../hooks/useDemoProps'
import { useThemeBuilderStore } from '../ThemeBuilderStore'

export const Header = () => {
  const demoProps = useDemoProps()
  const store = useThemeBuilderStore()

  return (
    <XStack gap="$6" f={1} jc="space-between" ai="center" px="$2">
      <YStack maw={700} gap="$4">
        <H1 mb="-2%" {...demoProps.headingFontFamilyProps}>
          {store.themeSuite?.name || 'Design System'}
        </H1>
        <Paragraph size="$5" col="$color9">
          Preview a few example components.
        </Paragraph>
      </YStack>

      <YStack>
        <Square
          size="$10"
          bg="$backgroundFocus"
          bc="$color5"
          {...demoProps.borderRadiusProps}
          $lg={{
            width: '100%',
            maxWidth: '100%',
          }}
          $md={{
            dsp: 'none',
            bg: 'red',
          }}
        >
          <TamaguiLogo scale={1.8} />
        </Square>
      </YStack>
    </XStack>
  )
}
