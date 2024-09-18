import fetch from 'node-fetch'
import querystring from 'node:querystring'
import React from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../data/AppContext.js'
import { debugLog } from '../commands/index.js'

export const useFetchComponent = () => {
  const { installState, accessToken } = React.useContext(AppContext)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (
      !accessToken &&
      installState.installingComponent &&
      !installState.installingComponent.isOSS
    ) {
      navigate('/auth')
    }
  }, [accessToken, installState.installingComponent, navigate])

  const fetcher = async (url: string) => {
    debugLog('fetcher', url)
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken || ''}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.') as Error & {
        info?: any
        status?: number
      }
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return await res.text()
  }

  const query =
    installState.installingComponent?.category &&
    installState.installingComponent?.categorySection &&
    querystring.stringify({
      section: installState.installingComponent?.category,
      part: installState.installingComponent?.categorySection,
      fileName: installState.installingComponent?.fileName,
    })

  const apiBase = process.env.API_BASE || 'https://tamagui.dev'
  const codePath = query ? `${apiBase}/api/bento/code-download?${query}` : apiBase

  const { data, error, isLoading } = useSWR(
    installState.installingComponent ? codePath : null,
    async (url) => {
      const response = await fetcher(url)
      const filesData: Record<
        string,
        Array<{ path: string; downloadUrl: string }>
      > = JSON.parse(response)

      debugLog('Files data', filesData)

      const downloadedFiles: Record<
        string,
        Array<{ path: string; filePlainText: string }>
      > = {}

      for (const [category, files] of Object.entries(filesData)) {
        downloadedFiles[category] = await Promise.all(
          files.map(async (file: { path: string; downloadUrl: string }) => {
            const fileContent = await fetcher(file.downloadUrl)
            return {
              path: file.path,
              filePlainText: fileContent,
            }
          })
        )
      }
      debugLog(
        'Downloaded files',
        Object.keys(downloadedFiles).map((key) =>
          downloadedFiles[key].map((x) => ({
            path: x.path,
            filePlainText: x.filePlainText.substring(0, 50) + '...',
          }))
        )
      )
      return downloadedFiles
    },
    {
      loadingTimeout: 3000,
    }
  )

  React.useEffect(() => {
    if (error?.info?.error?.includes('user is not authenticated')) {
      // Handle unauthenticated error (e.g., redirect to auth page)
      navigate('/auth')
    }
  }, [error, navigate])

  return { data, error, isLoading }
}
