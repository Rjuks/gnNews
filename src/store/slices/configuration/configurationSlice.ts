import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConfigurationState, newsViewTypeEnum } from './types'

const initialState: ConfigurationState = {
  newsViewType: newsViewTypeEnum.LIST
}

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setNewsTypeView: (state, action: PayloadAction<newsViewTypeEnum>) => {
      state.newsViewType = action.payload
    }
  }
})

export const { setNewsTypeView } = configurationSlice.actions

export default configurationSlice.reducer
