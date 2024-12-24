import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
    const pokemonId = pokemon.url.split('/').slice(-2, -1)[0]; // Extract ID from URL

    return (
        <div className="lex flex-col items-center bg-white rounded-lg ">
            <img
                className='w-full h-48 object-contain mt-3'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={pokemon.name}
            />
            <div className="bg-gray-200 w-full ">
                <p className="text-md font-bold text-sky-900 mb-20 m-6 ">{pokemon.name}</p>
                <span className="text-sky-600 text-xs m-5 pb-[0.2rem] block"> <Link to={`/details/${pokemonId}`}>Details</Link></span>
            </div>
        </div>
    );
};

export default PokemonCard;
