import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosAPI } from '../../config'

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosAPI.get(
        `top-headlines?language=en&apiKey=${API_KEY}`
      )

      return response.data.articles
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)
