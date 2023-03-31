import { NewsList } from './NewsList/NewsList'
import { STATUS } from '../../consts/types'
import { NewsStateSliceProps } from '../../store/slices/news/types'

interface NewsProps {
  newsData: NewsStateSliceProps
  countryCode?: string
}

export const News = ({ newsData, countryCode }: NewsProps) => {
  const { news, status, newsByCountry } = newsData

  const getProperNews = (countryCode ? newsByCountry[countryCode] : news) || []

  return (
    <section>
      <NewsList
        newsList={getProperNews}
        isLoading={status === STATUS.LOADING}
      />
    </section>
  )
}
