import { Spin } from 'antd'
import { NewsItem } from '../NewsItem/NewsItem'
import { NewsItem as NewsItemProps } from '../../../utils/types'
import styles from './NewsList.module.scss'
import { useAppSelector } from '../../../store/hooks/hooks'
import { newsViewTypeEnum } from '../../../store/slices/configuration/types'

type NewsListProps = {
  newsList: NewsItemProps[]
  isLoading: boolean
}

export const NewsList = ({ newsList, isLoading }: NewsListProps) => {
  const listViewType = useAppSelector(state => state.configuration.newsViewType)
  if (isLoading) {
    return (
      <div className={styles.SpinnerContainer}>
        <Spin size='large' tip='Loading...' />
      </div>
    )
  }

  return (
    <div
      className={
        styles[
          listViewType === newsViewTypeEnum.LIST
            ? 'ListContainer'
            : 'GridContainer'
        ]
      }
    >
      {newsList.map(news => (
        <NewsItem
          newsItemData={news}
          listViewType={listViewType}
          key={news.id}
        />
      ))}
    </div>
  )
}
