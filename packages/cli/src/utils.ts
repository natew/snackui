import { join } from 'path'

import type { TamaguiOptions, TamaguiProjectInfo } from '@tamagui/static'
import { loadTamagui as loadTamaguiStatic } from '@tamagui/static'
import { CLIResolvedOptions, CLIUserOptions } from '@tamagui/types'
import chalk from 'chalk'
import fs, { pathExists, readJSON } from 'fs-extra'

export async function getOptions({
  root = process.cwd(),
  tsconfigPath = 'tsconfig.json',
  tamaguiOptions,
  host,
  debug,
}: Partial<CLIUserOptions> = {}): Promise<CLIResolvedOptions> {
  const tsConfigFilePath = join(root, tsconfigPath)
  ensure(await fs.pathExists(tsConfigFilePath), `No tsconfig found: ${tsConfigFilePath}`)
  const dotDir = join(root, '.tamagui')
  const pkgJson = await readJSON(join(root, 'package.json'))

  return {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    root,
    host: host || '127.0.0.1',
    pkgJson,
    debug,
    tsconfigPath,
    tamaguiOptions: {
      components: ['tamagui'],
      config: await getDefaultTamaguiConfigPath(),
      ...tamaguiOptions,
    },
    paths: {
      dotDir,
      conf: join(dotDir, 'tamagui.config.json'),
      types: join(dotDir, 'types.json'),
    },
  }
}

export function ensure(condition: boolean, message: string) {
  if (!condition) {
    console.error(chalk.red.bold('Error:'), chalk.yellow(`${message}`))
    process.exit(1)
  }
}

const defaultPaths = ['tamagui.config.ts', join('src', 'tamagui.config.ts')]
let cachedPath = ''
async function getDefaultTamaguiConfigPath() {
  if (cachedPath) return cachedPath
  const existingPaths = await Promise.all(defaultPaths.map((path) => pathExists(path)))
  const existing = existingPaths.findIndex((x) => !!x)
  const found = defaultPaths[existing]
  if (!found) {
    throw new Error(`No found tamagui.config.ts`)
  }
  cachedPath = found
  return found
}

let cached: TamaguiProjectInfo | null = null
export const loadTamagui = async (
  opts: Partial<TamaguiOptions>
): Promise<TamaguiProjectInfo> => {
  console.log('load')
  return (cached ??= await loadTamaguiStatic({
    config: await getDefaultTamaguiConfigPath(),
    components: ['tamagui'],
    ...opts,
  }))
}

const disposers = new Set<Function>()

export function registerDispose(cb: () => void) {
  disposers.add(cb)
}

export function disposeAll() {
  disposers.forEach((cb) => cb())
}
