import { z } from 'zod'

export const Partner = z.object({
  name: z.string(),
  schoolName: z.string().nullable(),
  facebookId: z.number().int().positive(),
  link: z.string().url(),
  img: z.string().url().optional(),
  area: z.string().optional(),
})

export const Partners = z.array(Partner).nonempty()
