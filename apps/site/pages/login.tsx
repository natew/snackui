import { getAuthLayout } from '@components/layouts/AuthLayout'
import { getDefaultLayout } from '@components/layouts/DefaultLayout'
import { withSupabase } from '@lib/withSupabase'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { AuthError, Provider } from '@supabase/supabase-js'
import { LogoIcon } from '@tamagui/logo'
import { useUser } from 'hooks/useUser'
import Link from 'next/link'
import React from 'react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import {
  Button,
  EnsureFlexed,
  Input,
  Paragraph,
  Separator,
  Spinner,
  XStack,
  YStack,
} from 'tamagui'

import { GithubIcon } from '../components/GithubIcon'
import { Notice } from '../components/Notice'
import { useForwardToDashboard } from '../hooks/useForwardToDashboard'
import { getURL } from '../lib/helpers'

const loginPageUrl = `${
  process.env.NODE_ENV === 'production'
    ? 'https://tamagui.dev/login'
    : 'http://localhost:5005/login'
}`
export default function SignInPage() {
  const supabaseClient = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: '',
  })
  const { user } = useUser()
  const emailRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    emailRef.current?.focus()
  }, [])

  useForwardToDashboard()

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})

    try {
      if (showPasswordInput) {
        const { error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error
      } else {
        const { error } = await supabaseClient.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: loginPageUrl,
          },
        })
        if (error) throw error
        setMessage({
          type: 'note',
          content: 'Check your email for the magic link.',
        })
      }
    } catch (error) {
      setMessage({ type: 'error', content: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true)
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: loginPageUrl,
      },
    })
    if (error) {
      setMessage({ type: 'error', content: error.message })
    }
    setLoading(false)
  }

  if (!user)
    return (
      <YStack mih="100vh" miw="100vw" ai="center" jc="center" p="$2">
        <YStack miw={300} maw={320} jc="space-between" p="$2" space="$4">
          <Link href="/takeout/purchase" passHref legacyBehavior>
            <YStack tag="a" mb="$4">
              <LogoIcon />
            </YStack>
          </Link>

          {message.content && (
            <Notice
              className={`${
                message.type === 'error' ? 'text-pink-500' : 'text-green-500'
              } border ${
                message.type === 'error' ? 'border-pink-500' : 'border-green-500'
              } p-3`}
            >
              <Paragraph>{message.content}</Paragraph>
            </Notice>
          )}

          {!showPasswordInput && (
            <form onSubmit={handleSignin}>
              <YStack space="$2">
                <Input
                  autoComplete="email"
                  keyboardType="email-address"
                  placeholder="Email"
                  // @ts-ignore
                  onSubmitEditing={handleSignin}
                  value={email}
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                  ref={emailRef}
                />
                <Button
                  // @ts-expect-error
                  type="submit"
                  loading={loading}
                  disabled={!email.length}
                >
                  Send magic link
                </Button>
              </YStack>
            </form>
          )}

          {showPasswordInput && (
            <form onSubmit={handleSignin}>
              <YStack space="$2">
                <Input
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                  // @ts-ignore
                  required
                />
                <Input
                  autoComplete="password"
                  secureTextEntry
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.nativeEvent.text)}
                  // @ts-ignore
                  required
                />
                <Button
                  // @ts-ignore
                  type="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Sign in
                </Button>
              </YStack>
            </form>
          )}

          <YStack space="$2">
            <Paragraph
              tag="button"
              ta="center"
              size="$2"
              cursor="pointer"
              className="text-zinc-200 text-accent-9 hover:underline cursor-pointer"
              onPress={() => {
                if (showPasswordInput) setPassword('')
                setShowPasswordInput(!showPasswordInput)
                setMessage({})
              }}
            >
              Or sign in with {showPasswordInput ? 'magic link' : 'password'}
            </Paragraph>

            <Paragraph theme="alt2" ta="center" size="$2">
              Don't have an account?
              {` `}
              <Link href="/signup" style={{ fontWeight: '800' }}>
                Sign up.
              </Link>
            </Paragraph>
          </YStack>

          <XStack mx="$4" jc="center" space ai="center">
            <Separator />
            <Paragraph size="$2">Or</Paragraph>
            <Separator />
          </XStack>

          <Button
            // @ts-ignore
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
            size="$4"
            icon={GithubIcon}
          >
            Continue with GitHub
          </Button>
        </YStack>
      </YStack>
    )

  return (
    <YStack
      zIndex={10000000}
      backgroundColor="$background"
      justifyContent="center"
      pos="absolute"
      fullscreen
      alignItems="center"
    >
      <Spinner size="large" />
    </YStack>
  )
}

SignInPage.getLayout = getAuthLayout
