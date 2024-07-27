import entryShakingPlugin from 'vite-plugin-entry-shaking'
import { removeReactNativeWebAnimatedPlugin, vxs } from 'vxs/vite'
import type { UserConfig } from 'vite'
import { tamaguiExtractPlugin } from '@tamagui/vite-plugin'
import { createRequire } from 'node:module'

Error.stackTraceLimit = Number.POSITIVE_INFINITY

const PROD = process.env.NODE_ENV === 'production'

if (!import.meta.dirname) {
  throw new Error(`Not on Node 22`)
}

const optimizeInterop = ['expo-splash-screen']

const require = createRequire(import.meta.url)
const targets = [
  require.resolve('@tamagui/lucide-icons').replace('/dist/cjs/index.js', ''),
  require.resolve('@tamagui/colors').replace('/dist/cjs/index.js', ''),
]

export default {
  envPrefix: 'NEXT_PUBLIC_',

  define: {
    'process.env.TAMAGUI_REACT_19': '"1"',
  },

  resolve: {
    alias: {
      '~': import.meta.dirname,
      // TODO not working (see IconApple if you change back)
      'react-native-svg': '@tamagui/react-native-svg',
    },

    // todo automate, probably can just dedupe all package.json deps?
    dedupe: [
      'react',
      'react-dom',
      '@tamagui/core',
      '@tamagui/web',
      '@tamagui/animations-moti',
      'tamagui',
      'react-hook-form',
      '@tamagui/use-presence',
      'react-native-reanimated',
    ],
  },

  optimizeDeps: {
    include: [
      ...optimizeInterop,
      '@ts-react/form',
      'react-hook-form',
      '@tamagui/animate-presence',
      '@tamagui/presence-child',
      '@github/mini-throttle',
      'swr',
      '@supabase/ssr',
      '@tamagui/animations-moti',
      '@tamagui/animations-react-native',
    ],
    needsInterop: optimizeInterop,
  },

  build: {
    cssTarget: 'safari15',
  },

  plugins: [
    vxs({
      async afterServerStart(options, app, { routeMap }) {
        if (process.env.SHOULD_PURGE_CDN) {
          // await purgeCloudflareCDN()
        }
      },
    }),

    // await entryShakingPlugin({
    //   targets,
    //   // debug: true,
    // }),

    removeReactNativeWebAnimatedPlugin(),

    process.env.TAMAGUI_EXTRACT || PROD
      ? tamaguiExtractPlugin({
          logTimings: true,
        })
      : null,
  ],
} satisfies UserConfig

// const purgeCloudflareCDN = async () => {
//   if (!process.env.CF_ZONE_ID) throw new Error(`Missing process.env.CF_ZONE_ID`)
//   if (!process.env.CF_EMAIL) throw new Error(`Missing process.env.CF_EMAIL`)
//   if (!process.env.CF_API_KEY) throw new Error(`Missing process.env.CF_API_KEY`)

//   console.info(`Clearing entire CDN cache...`)

//   const url = `https://api.cloudflare.com/client/v4/zones/${process.env.CF_ZONE_ID}/purge_cache`

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'X-Auth-Email': process.env.CF_EMAIL,
//         'X-Auth-Key': process.env.CF_API_KEY,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ purge_everything: true }),
//     })

//     if (!response.ok) {
//       throw new Error(`Failed to purge cache: ${response.statusText}`)
//     }

//     const result = await response.json()
//     console.info(`Cloudflare cache purged successfully:`, result.success)
//   } catch (error) {
//     console.error('Error purging Cloudflare cache:', error)
//   }
// }
