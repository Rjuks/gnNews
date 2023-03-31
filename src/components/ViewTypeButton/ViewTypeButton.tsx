import React, { useCallback } from 'react'
import { Button, ButtonProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { newsViewTypeEnum } from '../../store/slices/configuration/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { setNewsTypeView } from '../../store/slices/configuration/configurationSlice'

export const ViewTypeButton = (props: ButtonProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const newsViewType = useAppSelector(state => state.configuration.newsViewType)

  const handleNewsViewTypeChange = useCallback(() => {
    const newViewType =
      newsViewType === newsViewTypeEnum.LIST
        ? newsViewTypeEnum.GRID
        : newsViewTypeEnum.LIST
    dispatch(setNewsTypeView(newViewType))
  }, [newsViewType])

  return (
    <Button onClick={handleNewsViewTypeChange} {...props}>
      {newsViewType === newsViewTypeEnum.LIST
        ? t('NEWS_VIEW_LIST')
        : t('NEWS_VIEW_GRID')}
    </Button>
  )
}
