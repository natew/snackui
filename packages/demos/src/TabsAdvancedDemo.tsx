import { useState } from 'react'
import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Stack,
  TabLayout,
  Tabs,
  TabsTabProps,
  XStack,
  YStack,
  styled,
} from 'tamagui'

const demos = ['background', 'underline'] as const
const demosTitle: Record<(typeof demos)[number], string> = {
  background: 'Background Indicator',
  underline: 'Underline Indicator',
}

export const TabsAdvancedDemo = () => {
  const [demoIndex, setDemoIndex] = useState(0)
  const demo = demos[demoIndex]
  return (
    <>
      {demo === 'underline' ? <TabsAdvancedUnderline /> : <TabsAdvancedBackground />}

      <XStack ai="center" space pos="absolute" b="$3" l="$4" $xxs={{ dsp: 'none' }}>
        <Button size="$2" onPress={() => setDemoIndex((x) => (x + 1) % demos.length)}>
          {demosTitle[demo]}
        </Button>
      </XStack>
    </>
  )
}

const TabsAdvancedBackground = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      padding="$2"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      position="relative"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              theme="active"
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          space="$2"
          backgroundColor="transparent"
        >
          <Tabs.Tab unstyled value="tab1" onInteraction={handleOnInteraction}>
            <SizableText>Profile</SizableText>
          </Tabs.Tab>
          <Tabs.Tab unstyled value="tab2" onInteraction={handleOnInteraction}>
            <SizableText>Connections</SizableText>
          </Tabs.Tab>
          <Tabs.Tab unstyled value="tab3" onInteraction={handleOnInteraction}>
            <SizableText>Notifications</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack key={currentTab} animation="100ms" x={0} o={1} f={1}>
          <Tabs.Content value={currentTab} forceMount f={1} jc="center">
            <H5 ta="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

const TabsAdvancedUnderline = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
          borderColor="$color3"
          borderBottomWidth="$0.5"
          backgroundColor="transparent"
        >
          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab1"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Profile</SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab2"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Connections</SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab3"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Notifications</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack key={currentTab} animation="100ms" x={0} o={1} f={1}>
          <Tabs.Content value={currentTab} forceMount f={1} jc="center">
            <H5 ta="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

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

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
})
