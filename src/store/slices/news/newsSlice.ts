import { createSlice } from '@reduxjs/toolkit'
import { NewsStateSliceProps } from './types'
import { fetchNews } from './thunks'
import { STATUS } from '../../../utils/types'

const initialState: NewsStateSliceProps = {
  news: [],
  status: STATUS.IDLE,
  error: null
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
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
  }
})

export default newsSlice.reducer
