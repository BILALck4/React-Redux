// store.js
import { configureStore } from '@reduxjs/toolkit';
import generationsReducer from './slices/generationsSlice';
import selectedGenerationReducer from './slices/selectedGenerationSlice';
import selectedPokemonReducer from './slices/selectedPokemonSlice';

const store = configureStore({
  reducer: {
    generations: generationsReducer,
    selectedGeneration: selectedGenerationReducer,
    selectedPokemon: selectedPokemonReducer,
  },
});

export default store;
