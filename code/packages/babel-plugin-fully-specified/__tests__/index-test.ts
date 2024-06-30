import path from 'node:path'
import { describe, expect, test, it } from '@jest/globals'
import { type TransformOptions, transform, transformFileSync } from '@babel/core'

import plugin, { type FullySpecifiedOptions } from '../src'

/** A helper function to get the default transform options for the plugin to test. */
const getTransformOptions = ({
  pluginOptions,
}: { pluginOptions?: Partial<FullySpecifiedOptions> } = {}) => ({
  plugins: [[plugin, { ensureFileExists: false, ...pluginOptions }]],
})

/** A test helper for calling Babel transform with the plugin to test and some default options. */
function getTransformResult(
  input,
  {
    transformOptions,
    pluginOptions,
  }: {
    transformOptions?: TransformOptions
    pluginOptions?: Partial<FullySpecifiedOptions>
  } = {}
) {
  return transform(input, {
    filename: 'myFile.js',
    configFile: false,
    ...transformOptions,
    ...getTransformOptions({ pluginOptions }),
  })
}

describe('local imports', () => {
  test('named import', () => {
    const example1 = "import { foo } from './foo'"
    expect(getTransformResult(example1)?.code).toBe('import { foo } from "./foo.js";')

    const example2 = "import { foo as bar } from './foo'"
    expect(getTransformResult(example2)?.code).toBe(
      'import { foo as bar } from "./foo.js";'
    )
  })

  test('default import', () => {
    const example1 = "import defaultFoo from './foo'"
    expect(getTransformResult(example1)?.code).toBe('import defaultFoo from "./foo.js";')

    const example2 = "import defaultFoo, { foo } from './foo'"
    expect(getTransformResult(example2)?.code).toBe(
      'import defaultFoo, { foo } from "./foo.js";'
    )
  })

  test('namespace import', () => {
    const example = "import * as fooModule from './foo'"
    expect(getTransformResult(example)?.code).toBe(
      'import * as fooModule from "./foo.js";'
    )
  })

  test('side effects only import', () => {
    const example = "import './foo'"
    expect(getTransformResult(example)?.code).toBe('import "./foo.js";')
  })

  test('dynamic import()', () => {
    const example = "const foo = await import('./foo')"
    expect(getTransformResult(example)?.code).toBe(
      'const foo = await import("./foo.js");'
    )
  })
})

describe('local re-exports', () => {
  test('named', () => {
    const example1 = "export { foo } from './foo'"
    expect(getTransformResult(example1)?.code).toBe('export { foo } from "./foo.js";')

    const example2 = "export { foo as bar } from './foo'"
    expect(getTransformResult(example2)?.code).toBe(
      'export { foo as bar } from "./foo.js";'
    )
  })

  test('default', () => {
    const example1 = "export { default as fooDefault } from './foo'"
    expect(getTransformResult(example1)?.code).toBe(
      'export { default as fooDefault } from "./foo.js";'
    )
  })

  test('namespace', () => {
    const example1 = "export * as fooModule from './foo'"
    expect(getTransformResult(example1)?.code).toBe(
      'export * as fooModule from "./foo.js";'
    )

    const example2 = "export * from './foo'"
    expect(getTransformResult(example2)?.code).toBe('export * from "./foo.js";')
  })
})

describe('transforming actual files', () => {
  test('test', () => {
    const { code } =
      transformFileSync(
        path.join(__dirname, '__fixtures__', 'test.mjs'),
        getTransformOptions({
          pluginOptions: { ensureFileExists: true, includePackages: ['@babel/core'] },
        })
      ) || {}

    expect(code).toMatchSnapshot()
  })
})
