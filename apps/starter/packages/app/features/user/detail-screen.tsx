import { Button, Paragraph, XGroup, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

const tabs = ['1', '2', '3'] as const
export function UserDetailScreen() {
  const link = useLink({
    href: '/',
  })
  const [selectedTab, setSelectedTab] = useState('selectedTab')

  return (
    <YStack debug f={1} jc="center" ai="center" space>
      <Button {...link}>Home</Button>
    </YStack>
  )
}
