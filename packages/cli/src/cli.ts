/* eslint-disable no-console */
import arg from 'arg'
import chalk from 'chalk'

import { getOptions } from './utils.js'

const commandMap = {
  build: {
    shorthands: ['b'],
    description: `Use to pre-build a Tamagui component directory`,
    flags: {
      '--help': Boolean,
      '--debug': Boolean,
      '--verbose': Boolean,
    },
    async run() {
      const { _, ...flags } = arg(this.flags)
      const { build } = await import('./build.js')
      const options = await getOptions({
        debug: flags['--debug'] ? (flags['--verbose'] ? 'verbose' : true) : false,
      })
      await build(options)
    },
  },
}

type CommandDefinitions = typeof commandMap
type CommandKey = keyof typeof commandMap
type CommandDefinition = CommandDefinitions[CommandKey]

const commandEntries = Object.keys(commandMap).flatMap((command) => {
  const definition = commandMap[command as CommandKey]
  const entries = [command, ...definition.shorthands].map((cmd) => {
    return [cmd, definition] as const
  })
  return entries
})

const commands = Object.fromEntries(commandEntries) as any as Record<CommandKey, CommandDefinition>

const {
  _: [command],
  ...flags
} = arg(
  {
    '--help': Boolean,
    '--version': Boolean,
  },
  {
    permissive: true,
  }
)

if (flags['--version']) {
  console.log(require('../package.json').version)
  process.exit(0)
}

if (!command && flags['--help']) {
  console.log(`$ tamagui

commands:

${Object.keys(commandMap)
  .map((key) => {
    return `  ${key}`
  })
  .join('\n')}`)
  process.exit(0)
}

if (!(command in commands)) {
  console.error()
  console.warn(chalk.yellow(`Not a valid command: ${command}`))
  process.exit(1)
}

const definition = commands[command] as CommandDefinition

main()

async function main() {
  if (flags['--help']) {
    console.log(`\n$ tamagui ${command}: ${definition.description}\n`)
    console.log(`Flags: ${Object.entries(definition.flags).map(([k, v]) => `${k} (${v.name})`)}`)
    process.exit(0)
  }

  await definition.run()
  process.exit(0)
}

// async function main() {
//   const options = await getOptions({
//     host: flags['--host'],
//   })

//   switch (command) {
//     // build
//     case 'b':
//     case 'build': {
//       const { build } = await import('./build.js')
//       break
//     }

//     // generate
//     case 'generate':
//     case 'gen': {
//       const { generateTamaguiConfig: generateTamgauiConfig } = await import(
//         './tamaguiConfigUtils.js'
//       )
//       const { generateTypes } = await import('./generate.js')

//       if (props[0] === 'types') {
//         await generateTypes(options)
//         return
//       }
//       if (props[0] === 'config') {
//         await generateTamgauiConfig(options)
//         return
//       }

//       await Promise.all([
//         // all
//         generateTypes(options),
//         generateTamgauiConfig(options),
//       ])
//       break
//     }

//     // studio
//     case 'studio': {
//       const { studio } = await import('./studio.js')
//       await studio(options)
//       break
//     }

//     // for now, dev === serve, eventually serve can be just prod mode
//     case 'dev': {
//       const { dev } = await import('./dev.js')
//       await dev(options)
//       break
//     }

//     default: {
//       if (!command || flags['--help']) {
//       }
//       // eslint-disable-next-line no-console
//       console.warn(chalk.yellow(`No command found ${command}`))
//       process.exit(1)
//     }
//   }
// }
