import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Time } from '../Time/Time'
import styles from './Footer.module.scss'
import { useAppSelector } from '../../store/hooks/hooks'
import { ROUTES } from '../../consts/routing'

const { Footer: AntFooter } = Layout

export const Footer = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const countryCode = location.pathname.split(`/${ROUTES.COUNTRY}/`)[1] || false

  const newsState = useAppSelector(state => state.news)

  const currentNewsAmount = useMemo(() => {
    let currentNewsAmount = 0
    if (countryCode) {
      currentNewsAmount = newsState.newsByCountry[countryCode]
        ? newsState.newsByCountry[countryCode].length
        : 0
    } else {
      currentNewsAmount = newsState.news.length
    }

    return currentNewsAmount
  }, [countryCode, location.pathname, newsState])

  return (
    <AntFooter className={styles.Footer}>
      <span className={styles.Footer__articlesAmount}>
        {t('NEWS_AMOUNT', { amount: currentNewsAmount })}
      </span>
      <Time />
    </AntFooter>
  )
}
