import { SourceMapPayload, createRequire } from 'module'

import { JscTarget, Output, ParserConfig, ReactConfig, transform } from '@swc/core'
import { BuildOptions, PluginOption, UserConfig } from 'vite'

const resolve = createRequire(
  typeof __filename !== 'undefined' ? __filename : import.meta.url
).resolve
const refreshContentRE = /\$Refresh(?:Reg|Sig)\$\(/

type Options = {
  /**
   * Control where the JSX factory is imported from.
   * @default "react"
   */
  jsxImportSource?: string
  /**
   * Enable TypeScript decorators. Requires experimentalDecorators in tsconfig.
   * @default false
   */
  tsDecorators?: boolean
  /**
   * Use SWC plugins. Enable SWC at build time.
   * @default undefined
   */
  plugins?: [string, Record<string, any>][]
}

const isWebContainer = globalThis.process?.versions?.webcontainer

const react = (_options?: Options): PluginOption[] => {
  const options = {
    jsxImportSource: _options?.jsxImportSource ?? 'react',
    tsDecorators: _options?.tsDecorators,
    plugins: _options?.plugins
      ? _options?.plugins.map((el): typeof el => [resolve(el[0]), el[1]])
      : undefined,
  }

  return [
    {
      name: 'vite:react-swc',
      config: () => ({
        esbuild: false,
      }),
      configResolved(config) {
        const mdxIndex = config.plugins.findIndex((p) => p.name === '@mdx-js/rollup')
        if (
          mdxIndex !== -1 &&
          mdxIndex > config.plugins.findIndex((p) => p.name === 'vite:react-swc')
        ) {
          throw new Error(
            '[vite:react-swc] The MDX plugin should be placed before this plugin'
          )
        }
        if (isWebContainer) {
          config.logger.warn(
            '[vite:react-swc] SWC is currently not supported in WebContainers. You can use the default React plugin instead.'
          )
        }
      },
      async transform(code, _id, transformOptions) {
        if (
          _id.includes(`node_modules/react/jsx-dev-runtime.js`) ||
          _id.includes(`node_modules/react/index.js`) ||
          _id.includes(`node_modules/react/cjs/react.development.js`) ||
          _id.includes(`node_modules/react-native/index.js`) ||
          _id.includes(`node_modules/react/cjs/react-jsx-dev-runtime.development.js`) ||
          _id.includes(`packages/vite-native-client/`)
        ) {
          return
        }
        const out = await swcTransform(_id, code, options, true)
        return out
      },
    },
  ]
}

export async function swcTransform(
  _id: string,
  code: string,
  options: Options,
  cjs = false
) {
  // todo hack
  const id = _id.split('?')[0].replace(process.cwd(), '')

  // const refresh = !transformOptions?.ssr && !hmrDisabled
  // only change for now:
  const refresh = true

  const result = await transformWithOptions(id, code, 'es5', options, {
    refresh,
    development: true,
    runtime: 'automatic',
    importSource: options.jsxImportSource,
  })

  if (!result) {
    return
  }

  if (!refresh || !refreshContentRE.test(result.code)) {
    return result
  }

  result.code = wrapSourceInRefreshRuntime(id, result.code, cjs)

  const sourceMap: SourceMapPayload = JSON.parse(result.map!)
  sourceMap.mappings = ';;;;;;;;' + sourceMap.mappings
  return { code: result.code, map: sourceMap }
}

export function wrapSourceInRefreshRuntime(id: string, code: string, cjs = false) {
  return `const RefreshRuntime = globalThis['__RequireReactRefreshRuntime__']();
const prevRefreshReg = globalThis.$RefreshReg$;
const prevRefreshSig = globalThis.$RefreshSig$;
globalThis.$RefreshReg$ = (type, id) => RefreshRuntime.register(type, "${id}" + " " + id);
globalThis.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

module.url = '${id}'
module.hot = createHotContext(module.url)

${code}

import.meta.hot.accept(() => {})

if (module.hot) {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
  globalThis['lastHmrExports'] = JSON.stringify(Object.keys(exports))
    module.hot.accept((nextExports) => {
      RefreshRuntime.performReactRefresh()
    });
}
  `
}

export const transformWithOptions = async (
  id: string,
  code: string,
  target: JscTarget,
  options: Options,
  reactConfig: ReactConfig
) => {
  const decorators = options?.tsDecorators ?? false
  const parser: ParserConfig | undefined = id.endsWith('.tsx')
    ? { syntax: 'typescript', tsx: true, decorators }
    : id.endsWith('.ts')
    ? { syntax: 'typescript', tsx: false, decorators }
    : id.endsWith('.jsx')
    ? { syntax: 'ecmascript', jsx: true }
    : id.endsWith('.mdx')
    ? // JSX is required to trigger fast refresh transformations, even if MDX already transforms it
      { syntax: 'ecmascript', jsx: true }
    : undefined
  if (!parser) return

  let result: Output
  try {
    result = await transform(code, {
      filename: id,
      swcrc: false,
      configFile: false,
      sourceMaps: true,
      jsc: {
        target,
        parser,
        experimental: { plugins: options.plugins },
        transform: {
          useDefineForClassFields: true,
          react: reactConfig,
        },
      },
    })
  } catch (e: any) {
    const message: string = e.message
    const fileStartIndex = message.indexOf('╭─[')
    if (fileStartIndex !== -1) {
      const match = message.slice(fileStartIndex).match(/:(\d+):(\d+)]/)
      if (match) {
        e.line = match[1]
        e.column = match[2]
      }
    }
    throw e
  }

  return result
}

const silenceUseClientWarning = (userConfig: UserConfig): BuildOptions => ({
  rollupOptions: {
    onwarn(warning, defaultHandler) {
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('use client')
      ) {
        return
      }
      if (userConfig.build?.rollupOptions?.onwarn) {
        userConfig.build.rollupOptions.onwarn(warning, defaultHandler)
      } else {
        defaultHandler(warning)
      }
    },
  },
})

export default react
