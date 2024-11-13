// slices/selectedPokemonSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action asynchrone pour récupérer les détails d'un Pokémon spécifique
export const fetchPokemonDetails = createAsyncThunk('selectedPokemon/fetchPokemonDetails', async (name) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
});

const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    details: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default selectedPokemonSlice.reducer;
