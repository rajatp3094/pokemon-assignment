import { useState, useEffect } from 'react';

export function usePokemonList(limit = 150) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {

                const detailedPokemonPromises = data.results.map((pokemon) =>
                    fetch(pokemon.url)
                        .then((res) => res.json())
                        .then((details) => ({
                            ...pokemon,
                            types: details.types,
                            stats: details.stats,
                            abilities: details.abilities,
                            moves: details.moves,
                        }))
                );

                return Promise.all(detailedPokemonPromises);
            })
            .then((pokemonWithDetails) => {
                setPokemonList(pokemonWithDetails);
            })
            .catch((err) => {
                setError('Failed to load Pokémon list');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [limit]);

    return { pokemonList, loading, error };
}
