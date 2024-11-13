import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGenerations = createAsyncThunk('generations/fetchGenerations', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/generation');
  return response.data.results;
});

const generationsSlice = createSlice({
  name: 'generations',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenerations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenerations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchGenerations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default generationsSlice.reducer;
