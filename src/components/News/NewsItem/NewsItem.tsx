import React from 'react'
import { Modal as AntModal } from 'antd'
import { newsViewTypeEnum } from '../../../store/slices/configuration/types'
import styles from './NewsItems.module.scss'
import { NewsItem as NewsItemProps } from '../../../utils/types'
import { useModalHandler } from '../../../helpers/useModalHandler'
import placeholderImage from '../../../assets/placeholder.png'

type NewsListItemProps = {
  newsItemData: NewsItemProps
  listViewType: newsViewTypeEnum
}

export const NewsItem: React.FC<NewsListItemProps> = ({
  newsItemData,
  listViewType
}) => {
  const { showModal, handleShowModal, handleHideModal } = useModalHandler()

  const { title, source, publishedAt, urlToImage, description, author, url } =
    newsItemData

  return (
    <>
      <AntModal
        visible={showModal}
        onCancel={handleHideModal}
        title={author}
        centered
        footer={null}
      >
        Source:{' '}
        <a href={url} target='_blank' rel='noreferrer'>
          Click to redirect!
        </a>
      </AntModal>
      <div
        className={`${styles.newsItem} ${
          listViewType === newsViewTypeEnum.GRID
            ? styles.gridItem
            : styles.listItem
        }`}
        onClick={handleShowModal}
      >
        {listViewType === newsViewTypeEnum.GRID && (
          <div className={styles.imageContainer}>
            <img src={urlToImage || placeholderImage} alt={title} />
          </div>
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.meta}>
            <span>{source.name}</span>
            <span>
              {` | `}
              {new Date(publishedAt).toLocaleDateString()}
            </span>
          </div>
          <div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
