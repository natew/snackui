import * as LucideIcons from '@tamagui/lucide-icons'
import { useMemo, useState } from 'react'
import { ScrollView } from 'react-native'
import { Grid, Input, Paragraph, Spacer, YStack, useDebounceValue } from 'tamagui'

const lucideIcons = Object.keys(LucideIcons).map((name) => ({
  key: name.toLowerCase(),
  name,
  Icon: LucideIcons[name],
}))

export function LucideIconsDemo() {
  const [searchRaw, setSearch] = useState('')
  const search = useDebounceValue(searchRaw, 400)

  const size = 100

  const iconsMemo = useMemo(
    () =>
      lucideIcons
        .filter((x) => x.key.startsWith(search.toLowerCase()))
        .map(({ Icon, name }) => (
          <YStack h={size + 20} ai="center" jc="center" key={name}>
            <Icon size={size * 0.25} />
            <Spacer />
            <Paragraph
              h="$6"
              ww="break-word"
              maw="100%"
              ta="center"
              px="$2"
              size="$1"
              o={0.5}
            >
              {name}
            </Paragraph>
          </YStack>
        )),
    [search]
  )

  return (
    <YStack miw="100%" padding="$4" paddingBottom="$0" space>
      <Input value={searchRaw} onChangeText={setSearch} placeholder="Search..." />

      <YStack height={420}>
        <ScrollView>
          <Grid itemMinWidth={size}>{iconsMemo}</Grid>
        </ScrollView>
      </YStack>
    </YStack>
  )
}
