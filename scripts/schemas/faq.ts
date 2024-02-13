import { z } from 'zod'

export const QuestionAnswerEntry = z.object({
  question: z.string(),
  answer: z.string(),
})

export const QuestionAnswerEntries = z.array(QuestionAnswerEntry).nonempty()

export const FaqGroup = z.object({
  title: z.string(),
  content: QuestionAnswerEntries,
})

export const FaqGroups = z.array(FaqGroup).nonempty()
