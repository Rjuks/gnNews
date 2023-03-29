import { Layout } from 'antd'
import { Time } from '../Time/Time'
import styles from './Footer.module.scss'
import { useAppSelector } from '../../store/hooks/hooks'

const { Footer: AntFooter } = Layout

export const Footer = () => {
  const newsAmount = useAppSelector(state => state.news.news.length)

  return (
    <AntFooter className={styles.Footer}>
      <span
        className={styles.Footer__articlesAmount}
      >{`Current articles: ${newsAmount}`}</span>
      <Time />
    </AntFooter>
  )
}
