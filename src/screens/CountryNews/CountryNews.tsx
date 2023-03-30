import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { fetchNewsByCountry } from '../../store/slices/news/thunks'
import { News } from '../../components/News/News'

export const CountryNews = () => {
  const dispatch = useAppDispatch()
  const { countryCode } = useParams()

  const newsByCountry = useAppSelector(state => state.news || [])

  useEffect(() => {
    let loading = false

    if (countryCode != null) {
      dispatch(fetchNewsByCountry(countryCode))
    }

    return () => {
      loading = true
    }
  }, [dispatch, countryCode])

  return (
    <section>
      <News newsData={newsByCountry} countryCode={countryCode} />
    </section>
  )
}
