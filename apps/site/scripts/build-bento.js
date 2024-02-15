const fs = require('fs')
const path = require('path')
const { parse } = require('acorn')
const walk = require('acorn-walk')

function analyzeIndexFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const ast = parse(fileContent, { sourceType: 'module' })

  const exportedModules = []

  walk.simple(ast, {
    ExportAllDeclaration(node) {
      const exportedName = node.source.value
      exportedModules.push(exportedName)
    },
  })

  return exportedModules
}

function shake(content) {
  return content
    .replaceAll('$group-window-sm', '$sm')
    .replaceAll('$group-window-md', '$md')
    .replaceAll(/([a-zA-Z0-9_]+\.fileName\s*=\s*)'([^']*)'/g, '')
}

function readDirectoryRecursively(directoryPath, outputDirectory) {
  const indexFiles = ['index.js', 'index.tsx', 'index.ts']

  const indexPaths = indexFiles.map((indexFile) => path.join(directoryPath, indexFile))
  const foundIndex = indexPaths.find(fs.existsSync)

  if (foundIndex) {
    const exportedModules = analyzeIndexFile(foundIndex)

    exportedModules.forEach((exportedModule) => {
      const modulePath = path.join(directoryPath, exportedModule)
      const outputPath = path.join(
        outputDirectory,
        directoryPath.replace(rootDirectory, ''),
        exportedModule
      )
      // console.info(outputPath)

      const outputFilePath = path.join(
        outputDirectory,
        directoryPath.replace(rootDirectory, ''),
        exportedModule
      )
      fs.mkdirSync(path.dirname(outputFilePath), { recursive: true })
      const outputContent = shake(processFile(`${modulePath}.tsx`))
      fs.writeFileSync(`${outputFilePath}.tsx`, outputContent)
    })
  } else {
    const files = fs.readdirSync(directoryPath)

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file)
      const stats = fs.statSync(filePath)

      if (stats.isDirectory()) {
        readDirectoryRecursively(filePath, outputDirectory)
      }
    })
  }
}

const mathImportsRegex =
  /import\s+(?:\w+\s*)?\{\s*(?:\w+\s*,\s*)*\w+\s*\}\s+from\s+'(\.\/|\.\.\/)[^']+'/g

function processFile(filePath, visitedFiles = new Set()) {
  if (visitedFiles.has(filePath)) {
    return ''
  }

  visitedFiles.add(filePath)

  let fileContent = fs.readFileSync(filePath, 'utf8')

  // here we change custom hooks to hooks to be used in consumer applications
  // change useGroupMedia to useMedia
  fileContent = fileContent.replace(
    /import {.*useGroupMedia.*} from.*/g,
    `import { useMedia } from 'tamagui'`
  )
  fileContent = fileContent.replace(/useGroupMedia\(.*\)/g, `useMedia()`)
  // change useContainerDim to useWindowDimensions
  fileContent = fileContent.replace(
    /import {.*useContainerDim.*} from.*/g,
    `import { useWindowDimensions } from 'tamagui'`
  )
  fileContent = fileContent.replace(/useContainerDim\(.*\)/g, `useWindowDimensions()`)

  const importStatements = Array.from(fileContent.matchAll(mathImportsRegex), (m) => m[0])

  let appendedContent = fileContent
  appendedContent = `/** START of the file ${filePath
    .split('/')
    .pop()} */\n${appendedContent}`

  for (const importStatement of importStatements) {
    const importPathMatch = importStatement.match(/from ['"](.*?)['"]/)

    if (importPathMatch) {
      const importPath = importPathMatch[1]

      if (importPath.startsWith('./') || importPath.startsWith('../')) {
        const possibleFileExtensions = ['.native.tsx', '.tsx', '.ts']
        let foundImport = false
        for (const extension of possibleFileExtensions) {
          const alternativePath = path.resolve(
            path.dirname(filePath),
            `${importPath}${extension}`
          )
          if (fs.existsSync(alternativePath)) {
            appendedContent += processFile(alternativePath, visitedFiles)
            foundImport = true
          }
        }

        if (!foundImport) {
          console.error(
            `Warning: File not found for import statement: ${importStatement}`
          )
        }
      }
    }
  }

  return appendedContent
}

const rootDirectory = path.resolve(process.cwd(), '../bento/src/components')
const outputDir = path.resolve(process.cwd(), './bento-output')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

readDirectoryRecursively(rootDirectory, outputDir)
