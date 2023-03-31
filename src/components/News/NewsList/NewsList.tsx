import { Spin } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { NewsItem } from '../NewsItem/NewsItem'
import { NewsItem as NewsItemProps } from '../../../consts/types'
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

  if (newsList.length === 0) {
    return <p>Missing news... :(</p>
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
      {newsList.map((news, index) => (
        <NewsItem
          newsItemData={news}
          listViewType={listViewType}
          key={uuidv4()}
        />
      ))}
    </div>
  )
}
