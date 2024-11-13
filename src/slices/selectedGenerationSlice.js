import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGenerationDetails = createAsyncThunk('selectedGeneration/fetchGenerationDetails', async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
  return response.data;
});

const selectedGenerationSlice = createSlice({
  name: 'selectedGeneration',
  initialState: {
    details: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenerationDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenerationDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchGenerationDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default selectedGenerationSlice.reducer;
