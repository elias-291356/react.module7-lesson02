import { fetchUsers } from './userOperations'
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => builder
    .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload
      state.error = null;
    })
    .addCase(fetchUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
})

export default userSlice.reducer;