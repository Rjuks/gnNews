import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosAPI } from '../../config'
import { RootState } from '../../store'

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosAPI.get(
        `/everything?q=Polska&apiKey=${API_KEY}`
      )

      return response.data.articles
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchNewsByCountry = createAsyncThunk(
  'news/fetchNewsByCountry',
  async (countryCode: string, { rejectWithValue, getState }) => {
    try {
      const { news } = getState() as RootState
      const existingData = news.newsByCountry[countryCode]

      if (existingData && existingData.length > 0) {
        return existingData
      }

      const response = await axiosAPI.get(
        `top-headlines?country=${countryCode}&apiKey=${API_KEY}`
      )

      return response.data.articles
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
