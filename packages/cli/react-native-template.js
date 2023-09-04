const global =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : this;

globalThis["global"] = global;
global["react"] = {};
global["exports"] = {};
global["module"] = {};
global["___modules___"] = {};
// to avoid it looking like browser...
delete globalThis["window"];

const __cachedModules = {};

function __getRequire(absPath) {
  const found = ___modules___[absPath];
  if (!__cachedModules[absPath]) {
    const exported = {};
    const defaultExported = {};
    found(exported, defaultExported);
    __cachedModules[absPath] = defaultExported.exports || exported
  }
  return __cachedModules[absPath];
}

const __specialRequireMap = {
  'react-native':  '_virtual/virtual_react-native.js',
  'react':  '_virtual/virtual_react.js',
  'react-native/Libraries/Pressability/Pressability': '__ReactPressability__',
  'react-native/Libraries/Pressability/usePressability': '__ReactUsePressability__',
  'react/jsx-runtime': '_virtual/virtual_react-jsx.js',
  'react/jsx-dev-runtime': '_virtual/virtual_react-jsx.js',
  '../../node_modules/react/jsx-dev-runtime.js': '_virtual/virtual_react-jsx.js'
}

function __specialRequire(_mod) {
  try {
    // TODO this is sketch - also isnt it running it a whole second time?
    const cached = __cachedModules[__specialRequireMap[_mod]]
    if (cached) return cached
    const found = __specialRequireMap[_mod]
    if (found) {
      const output = globalThis[found]()  
      __cachedModules[_mod] = output
      if (_mod === "react/jsx-runtime" || _mod === "react/jsx-dev-runtime") {
        output.jsxDEV = output.jsxDEV || output.jsx;
      }
      return output
    }
    if (___modules___[_mod]) {
      return __getRequire(_mod)
    }
  } catch (err) {
    // rome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(`Error... ${err}`);
  }
}

function createRequire(importsMap) {
  return function require(_mod) {
    const special = __specialRequire(_mod);
    if (special) return special;

    // handles relative imports rollup outputs
    const absPath = importsMap[_mod] || _mod;
    try {
      if (!___modules___[absPath]) {
        throw new Error(`Not found: ${_mod} => ${absPath}`);
      }
      return __getRequire(absPath)
    } catch (err) {
      throw new Error(`Error running module ${_mod} "${err}"`);
    }
  };
}

globalThis["setImmediate"] = (cb) => cb();
//cb => Promise.resolve().then(() => cb())

// idk why
console._tmpLogs = [];
["trace", "info", "warn", "error", "log", "group", "groupCollapsed", "groupEnd", "debug"].forEach(
  (level) => {
    const og = globalThis["console"][level];
    globalThis["_ogConsole" + level] = og;
    const ogConsole = og.bind(globalThis["console"]);
    globalThis["console"][level] = (...data) => {
      if (console._tmpLogs) {
        console._tmpLogs.push({ level, data });
      }
      return ogConsole(...data);
    };
  },
);

console._isPolyfilled = true;

global.performance = {
  now: () => Date.now(),
};

global.ErrorUtils = {
  setGlobalHandler: () => {},
  reportFatalError: (err) => {
    // rome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log("err" + err["message"] + err["stack"]);
  },
};
