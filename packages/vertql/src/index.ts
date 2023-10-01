#!/usr/bin/env node

import { defineCommand, runMain } from 'citty'

import { disposeAll } from './utils'

registerProcessHandlers()

const main = defineCommand({
  meta: {
    name: 'vertql',
    version: '0.0.0',
    description: 'a better stack',
  },
  args: {
    // name: {
    //   type: 'positional',
    //   description: 'Your name',
    //   required: true,
    // },
    // friendly: {
    //   type: 'boolean',
    //   description: 'Use friendly greeting',
    // },
  },

  run({ args }) {
    require('./dev').dev()
  },
})

runMain(main)

function registerProcessHandlers() {
  // dispose
  ;['exit', 'SIGINT'].forEach((_) => {
    process.on(_, () => {
      disposeAll()
      process.exit()
    })
  })

  process.on('uncaughtException', (err) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(err?.message || err)
  })
}
