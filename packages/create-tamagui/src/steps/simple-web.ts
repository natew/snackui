import chalk from 'chalk'

import { ExtraSteps } from './types'

const packageManager = 'yarn'
const useYarn = packageManager === 'yarn'

const runCommand = (scriptName: string) =>
  `${packageManager} ${useYarn ? '' : 'run '}${scriptName}`

const main: ExtraSteps = async ({ projectName }) => {
  console.log(`
${chalk.green.bold('Done!')} created a new project under ./${projectName}

cd into the project using:
  ${chalk.green('cd')} ${projectName}

Inside that directory:
  To start the Next.js development server, run:
    ${chalk.green(runCommand('web'))}
`)
}

export default main
