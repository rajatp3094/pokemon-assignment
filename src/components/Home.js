import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePokemonList } from './PokimonList';
import PokemonCard from './PokeymonCard';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';
import { useFilteredPokemon } from './useFilteredPokemon';
import { getTypes } from '../service';
import Loader from './Loader';

const Home = () => {
    const { pokemonList, loading } = usePokemonList(150);
    const {filteredPokemon, triggerSearch } =  useFilteredPokemon();

    const [search, setSearch] = useState('');
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    // Fetch types data from the API
    useEffect(() => {
        getTypes()
            .then(response => setTypes(response.data.results))
            .catch(err => console.error(err));
    }, []);

    useEffect(()=> {
        triggerSearch(pokemonList, search, selectedType)
        // eslint-disable-next-line
    },[pokemonList, types, selectedType])

    // Use custom hook for filtered Pokémon
    
    const handleSearch = async () => {
        triggerSearch(pokemonList, search, selectedType)
    }

    return (
        <div className="container mx-auto px-4 pt-4 h-full">
            {/* Type Filter */}
            <TypeFilter
                types={types}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            {/* Search Bar */}
            <SearchBar search={search} onClick={handleSearch} setSearch={setSearch} />
            
            {/* Pokémon Grid */}
            
            {loading ? <div className='flex p-4 justify-center items-center w-full h-full bg-red'><Loader/></div> : <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPokemon.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>}
            
        </div>
    );
};

export default Home;
