import { Alert } from '@inkjs/ui'
import { Box, Text } from 'ink'
import React from 'react'
import TextInput from 'ink-text-input'

import { useLocation, useNavigate } from 'react-router-dom'
import { debugLog } from '../commands/index.js'
import { AppContext } from '../data/AppContext.js'

export const CodeAuthScreen = () => {
  const appContext = React.useContext(AppContext)
  const location = useLocation()
  const navigate = useNavigate()

  const [localAccessToken, setLocalAccessToken] = React.useState(appContext.accessToken)

  const handleInputChange = (value: string) => {
    debugLog('----\nauth input change ----\n', {
      value,
      at: appContext.accessToken,
    })
    if (location.pathname !== '/auth') return
    appContext.setAccessToken(value)
    appContext.setIsLoggedIn(true)
    appContext.tokenStore.set('accessToken', value)
    appContext.tokenStore.onDidChange('accessToken', (newValue) => {
      debugLog('tokenStore changed', newValue)
    })
    navigate('/install-confirm')
  }

  return (
    <Box flexDirection="column" display="flex">
      <Box justifyContent="space-between" paddingRight={1}>
        <Text>
          {' < '}
          <Text underline>ESC</Text> to go Back
        </Text>
      </Box>
      <Box flexDirection="row" borderStyle="round" paddingY={1} justifyContent="center">
        {appContext.installState.isTokenInstalled ? (
          <Box paddingY={1}>
            <Text color="green">
              Authentication Successful. Press <Text underline>ESC</Text> to go back ✔︎
            </Text>
          </Box>
        ) : (
          <Box flexDirection="column" gap={1} paddingX={2}>
            <Alert variant="info">Your are trying to install a Pro component.</Alert>
            <Text>Paste/Enter your Bento access token:</Text>
            <Box minHeight={10}>
              <TextInput
                focus
                placeholder={Array(10).fill('*').join('')}
                value={localAccessToken ?? ''}
                onChange={(value) => {
                  setLocalAccessToken(value)
                }}
                onSubmit={handleInputChange}
              />
            </Box>
            <Text color={'magenta'}>
              Retrieve your access token from https://tamagui.dev/account/items
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
