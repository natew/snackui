const global =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
    ? window
    : this

// to avoid it looking like browser...
delete globalThis['window']

globalThis['global'] = global
global['react'] = {}
global['exports'] = {}
global['module'] = {}

globalThis['setImmediate'] = cb => cb()
//cb => Promise.resolve().then(() => cb())

// idk why
console._tmpLogs = []
;["trace", "info", "warn", "error", "log", "group", "groupCollapsed", "groupEnd", "debug"].forEach(level => {
  const og = globalThis['console'][level]
  globalThis['_ogConsole' + level] = og
  const ogConsole = og.bind(globalThis['console'])
  globalThis['console'][level] = (...data) => {
    if (console._tmpLogs) {
      console._tmpLogs.push({ level, data })
    }
    return ogConsole(...data)
  }
})

console._isPolyfilled = true

global.performance = {
  now: () => Date.now(),
}

global.ErrorUtils = {
  setGlobalHandler: () => {},
  reportFatalError: (err) => {
    console.log('err' + err['message'] + err['stack'])
  },
}

// globalThis['require'] = function require(_mod) {
//   if (_mod === 'react') return requireReact()
//   if (_mod === 'react/jsx-runtime' || _mod === 'react/jsx-dev-runtime') return jsxDevRuntimeExports
//   throw new Error(`Not found: ${_mod}`)
// }

// -- app --

