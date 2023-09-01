import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { Sheet, SheetProps, useSheet } from '@tamagui/sheet'
import { useState } from 'react'
import { Button, H1, H2, Input, Paragraph, XStack } from 'tamagui'

export const SheetDemo = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [snapPointsMode, setSnapPointsMode] = useState<'percent' | 'constant'>('percent')
  const isPercent = snapPointsMode === 'percent'

  return (
    <>
      <XStack space $sm={{ flexDirection: 'column', alignItems: 'center' }}>
        <Button onPress={() => setOpen(true)}>Open</Button>
        <Button onPress={() => setModal((x) => !x)}>
          {modal ? 'Type: Modal' : 'Type: Inline'}
        </Button>
        <Button onPress={() => setSnapPointsMode(isPercent ? 'constant' : 'percent')}>
          {snapPointsMode === 'percent'
            ? 'Snap Points: Percent'
            : 'Snap Points: Constant'}
        </Button>
      </XStack>

      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={isPercent ? [85, 50, 25] : [256, 190]}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} />
          <Input width={200} />
          {modal && isPercent && (
            <>
              <InnerSheet open={innerOpen} onOpenChange={setInnerOpen} />
              <Button
                size="$6"
                circular
                icon={ChevronUp}
                onPress={() => setInnerOpen(true)}
              />
            </>
          )}
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

function InnerSheet(props: SheetProps) {
  return (
    <Sheet modal snapPoints={[90]} dismissOnSnapToBottom {...props}>
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame flex={1} justifyContent="center" alignItems="center" space="$5">
        <Sheet.ScrollView padding="$4" space>
          <Button
            size="$8"
            circular
            alignSelf="center"
            icon={ChevronDown}
            onPress={() => props.onOpenChange?.(false)}
          />
          <H1>Hello world</H1>
          <H2>You can scroll me</H2>
          {[1, 2, 3].map((i) => (
            <Paragraph key={i} size="$10">
              Eu officia sunt ipsum nisi dolore labore est laborum laborum in esse ad
              pariatur. Dolor excepteur esse deserunt voluptate labore ea. Exercitation
              ipsum deserunt occaecat cupidatat consequat est adipisicing velit cupidatat
              ullamco veniam aliquip reprehenderit officia. Officia labore culpa ullamco
              velit. In sit occaecat velit ipsum fugiat esse aliqua dolor sint.
            </Paragraph>
          ))}
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}
