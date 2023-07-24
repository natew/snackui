// only for debugging if a useMemo is working

import { useMemo } from 'react'

export const useMemoDebug: typeof useMemo = (fn, args) => {
  let run = 1

  const res = useMemo(() => {
    run = 0
    return fn()
  }, args)

  if (run === 1) {
    // rome-ignore lint/nursery/noConsoleLog: <explanation>
    console.log('saved a run')
  }

  return res
}
