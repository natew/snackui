import { Check, Copy } from '@tamagui/lucide-icons'
import { memo } from 'react'
import { Button, Paragraph, Spacer, TooltipSimple, XStack } from 'tamagui'

import { useClipboard } from '../lib/useClipboard'

export const InstallInput = memo(() => {
  const installScript = `npm create tamagui`
  const { onCopy, hasCopied } = useClipboard(`${installScript}@latest`)

  return (
    <XStack
      borderWidth={1}
      borderColor="$borderColor"
      px="$7"
      pl="$6"
      height={48}
      ai="center"
      als="center"
      elevation="$3"
      debug="verbose"
      bc="$background"
      br="$10"
    >
      <Paragraph
        ta="center"
        size="$5"
        y={1}
        fontWeight="500"
        fontFamily="$mono"
        $sm={{ size: '$3' }}
      >
        {installScript}
      </Paragraph>
      <Spacer size="$6" />
      <TooltipSimple label={hasCopied ? 'Copied' : 'Copy to clipboard'}>
        <Button
          accessibilityLabel={installScript}
          size="$3"
          borderRadius="$8"
          mr="$-6"
          x={-1}
          icon={hasCopied ? Check : Copy}
          onPress={onCopy}
        />
      </TooltipSimple>
    </XStack>
  )
})
