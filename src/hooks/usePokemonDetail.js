import { useState, useEffect, useCallback } from 'react';
import { fetchPokemonDetail } from '../api/pokemonApi';

export function usePokemonDetail(id) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDetails = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);

    try {
      const data = await fetchPokemonDetail(id);
      setPokemon(data);
    } catch (err) {
      console.error(`Error loading details for #${id}:`, err);
      setError(err.message || 'Failed to load Pokémon details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  return { pokemon, loading, error, refetch: loadDetails };
}
