import { useState } from 'react'
import { Button, H4, Label, Paragraph, RadioGroup, XStack, YStack } from 'tamagui'

import { AccentTheme } from '../../AccentTheme'
import { useDemoProps } from '../../hooks/useDemoProps'

const options = [
  {
    title: 'Personal Plan',
    value: 'opt-1',
    description: 'Free!',
  },
  {
    title: 'Silver Plan',
    value: 'opt-2',
    description: 'Exclusive features for $4/mo.',
  },
  {
    title: 'Gold Plan',
    value: 'opt-3',
    description: 'Everything in silver + support for $10/mo.',
  },
]

export const PricingCards = () => {
  const [val, setVal] = useState('opt-1')
  const demoProps = useDemoProps()
  return (
    <YStack
      {...demoProps.panelProps}
      {...demoProps.stackOutlineProps}
      {...demoProps.borderRadiusProps}
      {...demoProps.elevationProps}
      {...demoProps.panelPaddingProps}
    >
      <YStack
        borderBottomWidth="$0.25"
        borderBottomColor="$borderColor"
        borderWidth="$0"
        pb="$2"
        gap="$1"
      >
        <H4 {...demoProps.headingFontFamilyProps} fontSize="$8" ta="center">
          Subscribe Now
        </H4>
        <Paragraph theme="alt1" size="$4" ta="center">
          40% launch discount!
        </Paragraph>
      </YStack>

      <YStack flex={1}>
        <RadioGroup {...demoProps.gapPropsLg} value={val} onValueChange={setVal}>
          {options.map((price) => {
            const active = val === price.value
            const htmlId = `demo-item-${price.value}`
            return (
              <Label
                key={price.title}
                f={1}
                htmlFor={htmlId}
                p="$4"
                height="unset"
                display="flex"
                borderColor={active ? '$color7' : '$color5'}
                gap="$4"
                ai="center"
                hoverStyle={{
                  borderColor: active ? '$color10' : '$color7',
                }}
                {...demoProps.borderRadiusProps}
              >
                <RadioGroup.Item id={htmlId} size="$3" value={price.value}>
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <YStack f={1}>
                  <Paragraph size="$6">{price.title}</Paragraph>
                  <Paragraph size="$3" color="$color11">
                    {price.description}
                  </Paragraph>
                </YStack>
              </Label>
            )
          })}
        </RadioGroup>
      </YStack>

      <YStack mt="$4" gap="$4">
        <Paragraph size="$3" ta="center" theme="alt1" color="$color10">
          Have a coupon?{' '}
          <Paragraph tag="span" textDecorationLine="underline">
            Click here
          </Paragraph>
        </Paragraph>
        <XStack gap="$2">
          <Button f={1} size="$5" fontWeight="600" {...demoProps.borderRadiusProps}>
            Cancel
          </Button>

          <AccentTheme>
            <Button
              f={1}
              size="$5"
              fontWeight="600"
              {...demoProps.borderRadiusProps}
              {...demoProps.buttonOutlineProps}
            >
              Continue
            </Button>
          </AccentTheme>
        </XStack>
      </YStack>
    </YStack>
  )
}
