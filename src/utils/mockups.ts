import { newsViewTypeEnum } from '../store/slices/configuration/types'
import { NewsItem } from './types'

export const mockupNewsData: NewsItem[] = Array.from({ length: 23 }).map(
  (_, i) => ({
    id: i,
    itemType: newsViewTypeEnum.LIST,
    title: `Title example ${i}`,
    imgUrl: `https://joesch.moe/api/v1/random?key=${i}`,
    url: `https://joesch.moe/api/v1/random?key=${i}`,
    source: {
      id: null,
      name: `source name ${i}`
    },
    publishedAt: `publish at ${i}`,
    author: `randomAuthor${i}`,
    description: 'Lorem ipsum.'
  })
)
