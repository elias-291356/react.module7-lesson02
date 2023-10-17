import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ('https://652d5a47f9afa8ef4b274f78.mockapi.io')



export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios('/users')
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})