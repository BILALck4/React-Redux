import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenerations } from '../slices/generationsSlice';
import { fetchGenerationDetails } from '../slices/selectedGenerationSlice';

const GenerationsSelector = () => {
  const dispatch = useDispatch();
  const generations = useSelector((state) => state.generations.list);
  const generationStatus = useSelector((state) => state.generations.status);

  useEffect(() => {
    if (generationStatus === 'idle') {
      dispatch(fetchGenerations());
    }
  }, [generationStatus, dispatch]);

  const handleChange = (e) => {
    const generationId = e.target.value;
    dispatch(fetchGenerationDetails(generationId));
  };

  return (
    <div>
      <label htmlFor="generation-select">Génération</label>
      <select id="generation-select" onChange={handleChange}>
        <option value="">Sélectionner une génération</option>
        {generations.map((generation, index) => (
          <option key={generation.name} value={index + 1}>
            {generation.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenerationsSelector;
