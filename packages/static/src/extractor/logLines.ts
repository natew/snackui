const prefix = '           '

export const logLines = (str: string, singleLine = false) => {
  if (singleLine) {
    const before = `\n${prefix}`
    return before + str.split(' ').join(before)
  }
  let lines: string[] = ['']
  const items = str.split(' ')
  for (const item of items) {
    if (item.length + lines[lines.length - 1].length > 85) {
      lines.push('')
    }
    lines[lines.length - 1] += item + ' '
  }
  return lines.map((line, i) => prefix + (i == 0 ? '' : ' ') + line.trim()).join('\n')
}
