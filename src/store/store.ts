import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import configurationSlice from './slices/configuration/configurationSlice'
import newsSlice from './slices/news/newsSlice'

export const store = configureStore({
  reducer: {
    configuration: configurationSlice,
    news: newsSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
