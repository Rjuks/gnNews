import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import configurationSlice from './slices/configuration/configurationSlice'

export const store = configureStore({
  reducer: {
    configuration: configurationSlice
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
