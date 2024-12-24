import { useState, useEffect } from 'react';
import {  getPokemonList, getPokemonSummary } from '../service';

export function usePokemonList(limit = 150) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getPokemonList(limit)
            .then(({data}) => {
                const detailedPokemonPromises = data.results.map((pokemon) =>
                    getPokemonSummary(pokemon.url)
                        .then(({data: details}) => ({
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
                console.log("🚀 ~ useEffect ~ err:", err)
                setError('Failed to load Pokémon list');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [limit]);

    return { pokemonList, loading, error };
}
