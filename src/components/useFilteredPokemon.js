import { useCallback, useState } from 'react';

export const useFilteredPokemon = () => {
    const [filteredPokemon, setFilteredPokemon] = useState([]);

  

const triggerSearch = useCallback((pokemonList, search, selectedType)=> {
    setFilteredPokemon(
        pokemonList.filter((pokemon) => {
            const matchesSearch =
                pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
                pokemon.types.some((type) =>
                    type.type.name.toLowerCase().includes(search.toLowerCase())
                );

            const matchesType =
                !selectedType ||
                pokemon.types.some(
                    (t) => t.type.name === selectedType
                );

            return matchesSearch && matchesType;
        })
    );
}, [])

    return {triggerSearch, filteredPokemon};
};
