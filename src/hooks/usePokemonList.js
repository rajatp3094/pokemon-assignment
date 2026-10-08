import { useState, useEffect, useCallback } from 'react';
import { fetchPokemonList, fetchPokemonSummary } from '../api/pokemonApi';

export function usePokemonList(limit = 150) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPokemonData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchPokemonList(limit);
      
      // Fetch details in parallel with batching for high performance
      const detailedPokemon = await Promise.all(
        data.results.map(async (item) => {
          try {
            return await fetchPokemonSummary(item.url);
          } catch (err) {
            // Fallback object if single item fails
            return {
              id: item.url.split('/').filter(Boolean).pop(),
              name: item.name,
              types: [],
              stats: [],
              artwork: null,
              url: item.url,
            };
          }
        })
      );

      setPokemonList(detailedPokemon);
    } catch (err) {
      console.error('Error in usePokemonList:', err);
      setError(err.message || 'Failed to load Pokémon list');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    loadPokemonData();
  }, [loadPokemonData]);

  return { pokemonList, loading, error, refetch: loadPokemonData };
}
