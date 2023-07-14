import { siteRootDir } from 'studio/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import { Spinner, YStack } from 'tamagui'

import type { UserContextType } from '../pages/api/user'
import { useOfflineMode } from './useOfflineMode'

export const useUser = () => {
  return useSWR<UserContextType>('user', {
    fetcher: async () => {
      const data = await fetch('/api/user').then((r) => r.json())

      return data as UserContextType
    },
    refreshInterval: 0,
  })
}

export const UserGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useUser()
  const router = useRouter()
  const isOffline = useOfflineMode()
  const user = data?.session?.user

  useEffect(() => {
    if (isOffline) {
      return
    }
    if (!user && !isLoading && router.isReady) {
      router.push(`${siteRootDir}/login`)
    }
  }, [isOffline, user, isLoading, router])

  if (!user)
    return (
      <YStack ai="center" flex={1} jc="center">
        <Spinner size="large" />
      </YStack>
    )

  return <>{children}</>
}
