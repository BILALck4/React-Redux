import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GenerationsSelector from './components/GenerationsSelector';
import GamesButtons from './components/GamesButtons';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (

    <Provider store={store}>
    <div style={{ padding: '20px' }}>
      <GenerationsSelector />
      <GamesButtons />
      <PokemonList />
    </div>
  </Provider>

  );
}

export default App;
