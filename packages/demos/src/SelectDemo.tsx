import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { LinearGradient, Select, YStack } from 'tamagui'

export function SelectDemo() {
  const [val, setVal] = useState('apple')
  return (
    <Select id="food" sheetBreakpoint="sm" value={val} onValueChange={setVal}>
      <Select.Trigger w={180} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Select.Sheet modal dismissOnSnapToBottom>
        <Select.Sheet.Frame>
          <Select.Sheet.ScrollView>
            <Select.SheetContents />
          </Select.Sheet.ScrollView>
        </Select.Sheet.Frame>
        <Select.Sheet.Overlay />
      </Select.Sheet>

      <Select.Content>
        <Select.ScrollUpButton ai="center" jc="center" pos="relative" w="100%" h="$3">
          <YStack zi={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            br="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {items.map((item, i) => {
              return (
                <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                  <Select.ItemText>{item.name}</Select.ItemText>
                  <Select.ItemIndicator ml="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton ai="center" jc="center" pos="relative" w="100%" h="$3">
          <YStack zi={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            br="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

const items = [
  { name: 'Apple' },
  { name: 'Pear' },
  { name: 'Blackberry' },
  { name: 'Peach' },
  { name: 'Apricot' },
  { name: 'Melon' },
  { name: 'Honeydew' },
  { name: 'Starfruit' },
  { name: 'Blueberry' },
  { name: 'Rasberry' },
  { name: 'Strawberry' },
  { name: 'Mango' },
  { name: 'Pineapple' },
  { name: 'Lime' },
  { name: 'Lemon' },
  { name: 'Coconut' },
  { name: 'Guava' },
  { name: 'Papaya' },
  { name: 'Orange' },
  { name: 'Grape' },
  { name: 'Jackfruit' },
  { name: 'Durian' },
]
