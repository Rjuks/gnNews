import { createSlice } from '@reduxjs/toolkit'
import { NewsStateSliceProps } from './types'
import { fetchNews, fetchNewsByCountry } from './thunks'
import { STATUS } from '../../../consts/types'

const initialState: NewsStateSliceProps = {
  news: [],
  newsByCountry: {},
  status: STATUS.IDLE,
  error: null
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // All news
      .addCase(fetchNews.pending, state => {
        state.status = STATUS.LOADING
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED
        state.news = action.payload
        state.error = null
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = STATUS.FAILED
        state.error = action.payload as string
      })
      // News by country
      .addCase(fetchNewsByCountry.pending, state => {
        state.status = STATUS.LOADING
      })
      .addCase(fetchNewsByCountry.fulfilled, (state, action) => {
        const countryCode = action.meta.arg
        state.status = STATUS.SUCCEEDED
        state.newsByCountry[countryCode] = action.payload
        state.error = null
      })
      .addCase(fetchNewsByCountry.rejected, (state, action) => {
        state.status = STATUS.FAILED
        state.error = action.payload as string
      })
  }
})

export default newsSlice.reducer
