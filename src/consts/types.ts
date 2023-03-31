/* Common types */

export enum STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export interface NewsItem {
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

export enum LANGUAGES {
  ENGLISH = 'en',
  POLISH = 'pl'
}
