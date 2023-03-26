import { useEffect } from 'react'
import { NewsList } from './NewsList/NewsList'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { STATUS } from '../../utils/types'
import { fetchNews } from '../../store/slices/news/thunks'

export const News = () => {
  const dispatch = useAppDispatch()
  const { news, status } = useAppSelector(state => state.news || [])

  useEffect(() => {
    let loading = false

    dispatch(fetchNews())

    return () => {
      loading = true
    }
  }, [dispatch])

  return (
    <section>
      <NewsList newsList={news} isLoading={status === STATUS.LOADING} />
    </section>
  )
}
