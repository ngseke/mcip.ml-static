import { globSync } from 'glob'
import { readFileSync } from 'fs'
import { Partners } from './schemas/partner'
import { ZodTypeAny } from 'zod'
import { FaqGroups } from './schemas/faq'

const fileNames = globSync('./json/*.json')

const schemas: Record<string, ZodTypeAny> = {
  'json/partner.json': Partners,
  'json/faq.json': FaqGroups,
}

function validate () {
  console.info(`Found ${fileNames.length} JSON files...`)

  for (const fileName of fileNames) {
    const rawContent = readFileSync(fileName, { encoding: 'utf8' })
    try {
      JSON.parse(rawContent)
    } catch (e) {
      throw new Error(`🛑 \`${fileName}\` is not a invalid JSON file!`)
    }

    const schema = schemas[fileName]
    if (!schema) {
      throw new Error(`🛑 Cannot find \`${fileName}\`'s schema!`)
    }

    const object = JSON.parse(rawContent)
    schema.parse(object)

    console.info(`✅️ ${fileName}`)
  }
}

validate()
