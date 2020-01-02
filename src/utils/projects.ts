import { ClientProject } from '@/types'

export const getBlankProject = (): ClientProject => ({
  id: ``,
  body: ``,
  category: ``,
  date: new Date(),
  images: [],
  name: ``,
  tags: []
})
