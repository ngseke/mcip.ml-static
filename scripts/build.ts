import { emptyDirSync, ensureFileSync, writeFileSync } from 'fs-extra'
import sources from '../json'

function clearDistFolder () {
  emptyDirSync('./dist')
}

function generateWarningText () {
  const path = './dist/DO_NOT_EDIT_THESE_FILES_MANUALLY_AS_THEY_ARE_MACHINE_GENERATED'

  ensureFileSync(path)
  writeFileSync(path, '', 'utf8')
}

function build () {
  for (const { data, schema, fileName } of sources) {
    // 1. Validate
    schema.parse(data)

    // 2. Convert to JSON format and generate the file
    const json = JSON.stringify(data)
    const path = `./dist/json/${fileName}`

    ensureFileSync(path)
    writeFileSync(path, json, 'utf8')

    console.info(`✅️ ${fileName}`)
  }
}

clearDistFolder()
generateWarningText()
build()
