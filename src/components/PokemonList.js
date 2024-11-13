// components/PokemonList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonDetails } from '../slices/selectedPokemonSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.selectedGeneration);

  if (!details) return <p>Sélectionnez une génération pour voir les Pokémon.</p>;

  return (
    <div>
      <ul>
        {details.pokemon_species.map((pokemon) => (
          <li key={pokemon.name} onClick={() => dispatch(fetchPokemonDetails(pokemon.name))}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
