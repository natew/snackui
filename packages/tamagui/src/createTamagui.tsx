import * as Core from '@tamagui/core'
import type { CreateTamaguiProps, InferTamaguiConfig, TamaguiProviderProps } from '@tamagui/core'
import { PortalProvider } from '@tamagui/portal'
import * as React from 'react'

// this was used to wrap SafeAreaProvider, but no more, but leaving for now...

export function createTamagui<Conf extends CreateTamaguiProps>(
  config: Conf
): InferTamaguiConfig<Conf> {
  const conf = Core.createTamagui(config)

  // add our providers
  const OGProvider = conf.Provider
  conf.Provider = ({ children, ...props }: TamaguiProviderProps) => {
    // RSC test
    if (typeof document === 'undefined') {
      return <OGProvider {...props}>{children}</OGProvider>
    }
    return (
      <OGProvider {...props}>
        <PortalProvider>{children}</PortalProvider>
      </OGProvider>
    )
  }

  return conf
}
