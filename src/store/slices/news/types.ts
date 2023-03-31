import { NewsItem, STATUS } from '../../../consts/types'

export type NewsByCountryProps = {
  [key: string]: NewsItem[]
}

export interface NewsStateSliceProps {
  news: NewsItem[]
  newsByCountry: NewsByCountryProps
  status: STATUS
  error: string | null
}
