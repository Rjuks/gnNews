import { newsViewTypeEnum } from '../store/slices/configuration/types'

/* Common types */

export enum STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export interface NewsItem {
  id: number
  title: string
  source: {
    id?: string | null
    name: string
  }
  publishedAt: string
  description: string
  author: string
  url: string
  urlToImage?: string
}
