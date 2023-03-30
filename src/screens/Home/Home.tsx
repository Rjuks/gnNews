import { useEffect } from 'react'
import { News } from '../../components/News/News'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { fetchNews } from '../../store/slices/news/thunks'

export const Home = () => {
  const dispatch = useAppDispatch()
  const allNews = useAppSelector(state => state.news || [])

  useEffect(() => {
    let loading = false

    dispatch(fetchNews())

    return () => {
      loading = true
    }
  }, [dispatch])

  return (
    <section>
      <News newsData={allNews} />
    </section>
  )
}
