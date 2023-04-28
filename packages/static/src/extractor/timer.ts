export const timer = () => {
  const start = Date.now()
  let last = start
  return {
    mark: (name: string, print = false) => {
      if (print) {
        const took = Date.now() - last
        last = Date.now()
        // rome-ignore lint/nursery/noConsoleLog: ok
        console.log(`Time ${name}: ${took}ms`)
        if (took > 10) {
          // rome-ignore lint/nursery/noConsoleLog: ok
          console.log('  long timer')
        }
      }
    },
    done: (print = false) => {
      if (print) {
        const total = Date.now() - start
        // rome-ignore lint/nursery/noConsoleLog: ok
        console.log(`Total time: ${total}ms`)
        if (total > 50) {
          // rome-ignore lint/nursery/noConsoleLog: ok
          console.log('  long timer')
        }
      }
    },
  }
}
