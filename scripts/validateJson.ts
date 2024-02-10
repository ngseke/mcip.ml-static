import { globSync } from 'glob'
import { readFileSync } from 'fs'

const fileNames = globSync('./json/*.json')

for (const fileName of fileNames) {
  const rawContent = readFileSync(fileName, { encoding: 'utf8' })
  try {
    JSON.parse(rawContent)
  } catch (e) {
    throw new Error(`🛑 The format of \`${fileName}\` is invalid!`)
  }
}
