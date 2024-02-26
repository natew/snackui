import { Target, Upload, X } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import type { TamaguiConfig } from 'tamagui'
import { Button, Dialog, H2, Paragraph, ScrollView, TooltipSimple, YStack } from 'tamagui'
import { Code, CodeInline } from './Code'
import { Features } from './Features'
import { useStore } from '@tamagui/use-store'
import { Notice } from './Notice'

type TamaguiConfigBuilt = {
  tamaguiConfig: TamaguiConfig
}

class DropTamaguiConfigStore {
  config: TamaguiConfigBuilt | null = null
  dragging = false
}

export const DropTamaguiConfig = () => {
  const [show, setShow] = useState(false)
  const store = useStore(DropTamaguiConfigStore)

  useEffect(() => {
    document.addEventListener('dragover', (e) => {
      store.dragging = true
      e.preventDefault()
    })

    document.addEventListener('dragleave dragend', (e) => {
      store.dragging = false
    })

    document.addEventListener('drop', (e) => {
      store.dragging = false
      e.preventDefault()
      if (e.dataTransfer?.items) {
        ;[...e.dataTransfer.items].forEach((item, i) => {
          if (item.kind === 'file') {
            const file = item.getAsFile()
            if (file) {
              const reader = new FileReader()
              reader.onload = () => {
                store.config = JSON.parse(`${reader.result}`)
              }
              reader.readAsText(file)
            }
          }
        })
      }
    })
  }, [])

  return (
    <>
      <TooltipSimple label="Upload your Tamagui Config">
        <Button
          als="flex-end"
          br="$10"
          onPress={() => setShow(true)}
          size="$3"
          $sm={{
            dsp: 'none',
          }}
          icon={Target}
        >
          Customize
        </Button>
      </TooltipSimple>

      <Dialog open={show} onOpenChange={setShow}>
        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="medium"
            className="blur-medium"
            opacity={0.5}
            bg="$color1"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            bg="$color2"
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            // animateOnly={['transform']}
            enterStyle={{ y: -10, opacity: 0, scale: 0.975 }}
            exitStyle={{ y: 10, opacity: 0, scale: 0.975 }}
            w="95%"
            maw={600}
            p="$6"
          >
            <Dialog.Close asChild="except-style">
              <Button
                position="absolute"
                top="$4"
                right="$4"
                size="$2"
                circular
                zi={1000}
                icon={X}
              />
            </Dialog.Close>

            <YStack
              fullscreen
              pe="none"
              o={store.dragging ? 1 : 0}
              bg="$background075"
              ai="center"
              jc="center"
              zi={1000}
            >
              <H2>Drop it here!</H2>
            </YStack>

            <ScrollView mah={`90vh`}>
              <YStack gap="$4">
                <Dialog.Title>Customize the Design System</Dialog.Title>

                {store.config && (
                  <>
                    <Paragraph size="$6">Nice, we've got your config.</Paragraph>
                    <Paragraph size="$6">
                      You can now go copy code from an example and it will customize the
                      tokens to your design system.
                    </Paragraph>
                    <Button
                      als="flex-end"
                      icon={X}
                      theme="red_active"
                      onPress={() => (store.config = null)}
                    >
                      Clear config
                    </Button>
                  </>
                )}

                {!store.config && (
                  <>
                    <Notice>
                      WIP - we're adding the final piece to replace tokens next.
                    </Notice>

                    <Paragraph size="$6">
                      Drag and drop your{' '}
                      <CodeInline>.tamagui/tamagui.config.json</CodeInline> here to
                      customize the code we generate to your design system!
                    </Paragraph>
                    <Paragraph size="$6">
                      Either the Tamagui CLI or compiler plugin will generate this for
                      you. If you have the compiler plugin set up, there should already be
                      a .tamagui directory and you can skip to step 3.
                    </Paragraph>

                    <Features
                      items={[
                        <>
                          Create a <CodeInline>tamagui.build.ts</CodeInline> at the root
                          of your app and move your build configuration into it as a
                          default export.{' '}
                          <a
                            target="_blank"
                            href="https://github.com/tamagui/tamagui/blob/a486446b32ea67a22560783fc59660c6361490e5/apps/site/tamagui.build.ts"
                            rel="noreferrer"
                          >
                            See an example here
                          </a>
                          . All of the bundler plugins now load from this file on startup.
                        </>,
                        <>
                          Run generate — <Code>npx @tamagui/cli generate</Code>
                        </>,
                        <>
                          Grab the <Code>.tamagui/tamagui.config.json</Code> file and drop
                          it here!
                        </>,
                      ]}
                    />
                  </>
                )}
              </YStack>
            </ScrollView>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>
  )
}
