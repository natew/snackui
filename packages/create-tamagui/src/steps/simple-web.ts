import chalk from 'chalk'

import { ExtraSteps } from './types'

const packageManager = 'yarn'
const useYarn = packageManager === 'yarn'

const runCommand = (scriptName: string) =>
  `${packageManager} ${useYarn ? '' : 'run '}${scriptName}`

const main: ExtraSteps = async ({ isFullClone, projectName }) => {
  // rome-ignore lint/nursery/noConsoleLog: <explanation>
  if (isFullClone) {
    console.log(`
  ${chalk.green.bold('Done!')} created a new project under ./${projectName}

cd into the project using:
  ${chalk.green('cd')} ${projectName}
`)
  }
  console.log(`
  To start the Next.js development server, run:
    ${chalk.green(runCommand('web'))}
`)
}

export default main
