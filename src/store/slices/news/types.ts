import { NewsItem, STATUS } from '../../../utils/types'

export interface NewsStateSliceProps {
  news: NewsItem[]
  status: STATUS
  error: string | null
}
