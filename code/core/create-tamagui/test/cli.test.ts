import { type ChildProcess, spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { temporaryDirectory } from 'tempy'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('create-tamagui CLI', () => {
  let tempDir: string
  let cli: ChildProcess
  let projectName: string
  let projectPath: string
  let output: string

  beforeAll(async () => {
    tempDir = temporaryDirectory()
    console.info({ tempDir })
    projectName = 'test-project'
    const cliPath = path.join(__dirname, '../dist/index.js')
    projectPath = path.join(tempDir, projectName)

    cli = spawn('node', [cliPath], {
      cwd: tempDir,
      stdio: ['pipe', 'pipe', 'pipe'],
    })

    output = ''

    cli.stdout?.on('data', (data) => {
      output += data.toString()
      if (process.env.DEBUG === 'test') {
        console.info(data.toString()) // Log output for debugging
      }
    })

    cli.stderr?.on('data', (data) => {
      output += data.toString()
      if (process.env.DEBUG === 'test') {
        console.error(data.toString()) // Log errors for debugging
      }
    })

    // Helper function to write input after a delay
    const writeWithDelay = (input: string, delay: number) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          cli.stdin?.write(input)
          resolve()
        }, delay)
      })
    }

    // Simulate user input
    await writeWithDelay(`${projectName}\r`, 1000)
    await writeWithDelay('\x1B\x5B\x42', 1000) // Down arrow
    await writeWithDelay('\x1B\x5B\x42', 1000) // Down arrow
    await writeWithDelay('\r', 1000) // Enter

    // Wait for the process to finish
    await new Promise<void>((resolve, reject) => {
      cli.on('exit', (code) => {
        if (code === 0) {
          resolve()
        } else {
          reject(new Error(`CLI process exited with code ${code}`))
        }
      })
    })
  }, 60000) // 60 second timeout for the setup

  afterAll(() => {
    // Clean up the temporary directory after each test
    if (tempDir && fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('should create the project directory', () => {
    expect(fs.existsSync(projectPath)).toBe(true)
  })

  it('should create the project in the temporary directory', () => {
    expect(projectPath.startsWith(tempDir)).toBe(true)
  })

  it('should create essential files', () => {
    const essentialFiles = [
      'package.json',
      'tsconfig.json',
      'app.json',
      'tamagui.config.ts',
    ]

    essentialFiles.forEach((file) => {
      expect(fs.existsSync(path.join(projectPath, file))).toBe(true)
    })
  })

  it('should prompt for project name', () => {
    expect(output).toContain('Project name:')
  })

  it('should display the selected template', () => {
    expect(output).toContain('Free - Expo + Next in a production ready monorepo')
  })

  it('should provide instructions to visit the project', () => {
    expect(output).toContain('visit your project')
  })

  it('should not contain any errors', () => {
    expect(output).not.toContain('Error:')
  })

  it('should indicate successful project creation', () => {
    expect(output).toContain(`Done! created a new project`)
  })

  it('should display the project name', () => {
    expect(output).toContain(`cd ${projectName}`)
  })

  it('should not contain any git errors', () => {
    expect(output).not.toContain('fatal: not a git repository')
  })
})
