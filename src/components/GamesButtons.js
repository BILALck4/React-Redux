
import React from 'react';
import { useSelector } from 'react-redux';

const GamesButtons = () => {
  const { details } = useSelector((state) => state.selectedGeneration);

  if (!details) return null;

  return (
    <div>
      {details.version_groups.map((game) => (
        <button key={game.name} type="button">
          {game.name}
        </button>
      ))}
    </div>
  );
};

export default GamesButtons;
