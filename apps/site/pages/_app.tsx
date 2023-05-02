import '@tamagui/core/reset.css'

// import '../lib/wdyr'
import '../app.css'
import '../public/fonts/fonts.css'

// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider, useSupabaseClient } from '@supabase/auth-helpers-react'
// import { MyUserContextProvider } from 'hooks/useUser'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { AppProps } from 'next/app'
import { useMemo } from 'react'
import { TamaguiProvider, useDidFinishSSR } from 'tamagui'

import config from '../tamagui.config'
import { LogoWords, TamaguiLogo } from '@tamagui/logo'

Error.stackTraceLimit = Infinity

// for auto mode
// // santa mode
// if (isClient) {
//   const goXmas = setTimeout(() => {
//     setTintFamily('xmas')
//     window.removeEventListener('scroll', onScroll)
//   }, 2500)

//   // dont activate santa mode if they scroll down, a bit confusing right?
//   const onScroll = (e: Event) => {
//     if ((document.scrollingElement?.scrollTop || 0) > 100) {
//       clearTimeout(goXmas)
//       window.removeEventListener('scroll', onScroll)
//     }
//   }

//   window.addEventListener('scroll', onScroll)
// }

// prevent next.js from prefetching stuff
if (typeof navigator !== 'undefined') {
  try {
    // @ts-ignore
    navigator.connection = navigator.connection || {}
    // @ts-ignore
    navigator.connection['saveData'] = true
  } catch {
    // ignore err
  }
}

export default function App(props: AppProps) {
  const [theme, setTheme] = useRootTheme()
  const didMount = useDidFinishSSR()

  return (
    <>
      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />

      {/* this will lazy load the font for /studio splash page */}
      {didMount && (
        <>
          <link href="/fonts/inter-takeout.css" rel="stylesheet" />
          <link
            rel="preload"
            href="/fonts/subset-Inter-Black.woff2"
            as="font"
            type="font/woff2"
          />
        </>
      )}

      <NextThemeProvider
        onChangeTheme={(next) => {
          setTheme(next as any)
        }}
      >
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          <LogoWords />
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}

function ContentInner({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return useMemo(() => {
    return getLayout(<Component {...pageProps} />, pageProps)
  }, [pageProps])
}
