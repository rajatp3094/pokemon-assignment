import { useMemo } from 'react';

export function useFilteredPokemon(pokemonList = [], search = '', selectedType = '') {
  const filteredPokemon = useMemo(() => {
    if (!Array.isArray(pokemonList)) return [];

    const normalizedSearch = search.trim().toLowerCase();
    const normalizedType = selectedType.trim().toLowerCase();

    return pokemonList.filter((pokemon) => {
      // Search by Name or ID
      const nameMatch = pokemon.name ? pokemon.name.toLowerCase().includes(normalizedSearch) : false;
      const idMatch = pokemon.id ? String(pokemon.id).includes(normalizedSearch) : false;
      const formattedIdMatch = pokemon.id ? `#${String(pokemon.id).padStart(3, '0')}`.includes(normalizedSearch) : false;

      const matchesSearch = !normalizedSearch || nameMatch || idMatch || formattedIdMatch;

      // Filter by Type
      const matchesType =
        !normalizedType ||
        (pokemon.types &&
          pokemon.types.some(
            (t) => t.type && t.type.name.toLowerCase() === normalizedType
          ));

      return matchesSearch && matchesType;
    });
  }, [pokemonList, search, selectedType]);

  return {
    filteredPokemon,
    totalCount: pokemonList.length,
    filteredCount: filteredPokemon.length,
  };
}
