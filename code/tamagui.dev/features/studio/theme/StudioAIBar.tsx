import { Input } from '@tamagui/input'
import { useRef, useState } from 'react'
import { Button, Spinner, Theme, useThemeName, XStack } from 'tamagui'
import { toastController } from '../ToastProvider'
import { useThemeBuilderStore } from './store/ThemeBuilderStore'

export const StudioAIBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const store = useThemeBuilderStore()
  const [isGenerating, setGenerating] = useState<'reply' | 'new' | null>(null)
  const themeName = useThemeName()
  const [lastReply, setLastReply] = useState('')

  const generate = async (type: 'reply' | 'new') => {
    toastController.show(`Generating...`)
    setGenerating(type)

    let seconds = 0

    const int = setInterval(() => {
      seconds++
      if (seconds === 6) {
        toastController.show(`Thinking about base colors...`)
      } else if (seconds === 12) {
        toastController.show(`Thinking about accent colors...`)
      } else if (seconds === 18) {
        toastController.show(`Refining palettes...`)
      } else if (seconds === 24) {
        toastController.show(`Taking too long...`)
      } else if (seconds === 32) {
        toastController.show(`It really does take a bit sometimes...`)
      }
    }, 1000)

    try {
      const prompt = inputRef.current?.value ?? ''
      const res = await fetch(`/api/theme/generate`, {
        body: JSON.stringify({
          prompt,
          lastReply: type === 'new' ? '' : lastReply,
          scheme: themeName.startsWith('dark') ? 'dark' : 'light',
          model: prompt[0] === '!' ? 'reasoning' : 'chat',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const data = await res.json()

      console.info(`got themes`, data)

      if (data.error) {
        toastController.show(`Error generating! ${data.error}`)
        return
      }

      setLastReply(data.reply)
      store.updateGenerate(data.result)
    } catch (err) {
      toastController.show(`Error: ${err}`)
    } finally {
      toastController.hide()
      toastController.show(`Generated!`)
      setGenerating(null)
      clearInterval(int)
    }
  }

  return (
    <XStack zi={1000} data-tauri-drag-region className="all ease-in ms300">
      <XStack ai="center" f={1} gap="$3">
        <Input
          ref={inputRef as any}
          placeholder="Prompt to generate themes with AI..."
          w="100%"
          f={10}
          size="$6"
          shadowColor="$shadow3"
          shadowOffset={{ height: 2, width: 0 }}
          shadowRadius={20}
          br="$8"
          onSubmit={() => {
            generate(lastReply ? 'reply' : 'new')
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              generate(lastReply ? 'reply' : 'new')
            }
          }}
        />
        {lastReply && (
          <Theme name="surface1">
            <Button
              br="$10"
              disabled={isGenerating === 'reply'}
              o={isGenerating === 'reply' ? 0.2 : 1}
              pe={isGenerating === 'reply' ? 'none' : 'auto'}
              icon={isGenerating === 'reply' ? <Spinner size="small" /> : null}
              onPress={() => generate('reply')}
              size="$4"
            >
              Refine
            </Button>
          </Theme>
        )}
        <Theme name="accent">
          <Button
            br="$10"
            disabled={isGenerating === 'new'}
            o={isGenerating === 'new' ? 0.2 : 1}
            pe={isGenerating === 'new' ? 'none' : 'auto'}
            icon={isGenerating === 'new' ? <Spinner size="small" /> : null}
            onPress={() => generate('new')}
            size="$4"
          >
            New
          </Button>
        </Theme>
      </XStack>
    </XStack>
  )
}
