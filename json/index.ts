import { type ZodTypeAny } from 'zod'
import { FaqGroups } from './faqSchema'
import { Partners } from './partnerSchema'
import { faq } from './faq'
import { partner } from './partner'

export default [
  {
    data: faq,
    schema: FaqGroups,
    fileName: 'faq.json',
  },
  {
    data: partner,
    schema: Partners,
    fileName: 'partner.json',
  },
] satisfies Array<{
  data: object
  schema: ZodTypeAny
  fileName: `${string}.json`
}>
