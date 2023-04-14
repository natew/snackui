/// <reference types="vitest" />

import { join } from 'path'

// import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // viteCommonjs(),
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
      jsxPure: true,
    }),
    tamaguiPlugin({
      components: ['tamagui'],
      config: './tamagui.config.ts',
    }),
  ],
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildCommonjs(['@tamagui/core-node'])],
  //   },
  // },

  resolve: {
    alias: {
      '@tamagui/web': require.resolve(`@tamagui/web`),
    },
  },

  test: {
    // for compat with some jest libs (like @testing-library/jest-dom)
    globals: true,
    setupFiles: [join(__dirname, 'test-setup.ts')],
    // happy-dom has issues with components-test
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    deps: {
      inline: ['react-native-web', /tamagui/],
    },
  },
})
