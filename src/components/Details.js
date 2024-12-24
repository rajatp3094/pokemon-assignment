import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from './Breadcrumbs';
import Loader from './Loader';
import { getPokemonDetail } from "../service";
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        getPokemonDetail(id)
            .then((response) => setPokemon(response.data))
            .catch((err) => {
                console.error(err);
                toast.error('Something went wrong');
            });
    }, [id]);

    return (
        <div className="container mx-auto px-4 pt-4 min-h-screen bg-gray-100">
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Breadcrumbs lable={pokemon?.name}/>
            
            <div className="flex p-4 justify-center items-center w-full">
                {pokemon ? (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-teal-300 flex justify-center p-6">
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                className="h-40 w-40 object-contain"
                            />
                        </div>
                        <div className="bg-orange-200 p-6 space-y-4">
                            <h3 className="text-lg font-bold">
                                <span className="font-semibold">Name:</span> {pokemon.name}
                            </h3>
                            <p>
                                <span className="font-semibold">Type:</span>{" "}
                                {pokemon.types.map((type) => type.type.name).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Stats:</span>{" "}
                                {pokemon.stats.map((stat) => stat.stat.name).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Abilities:</span>{" "}
                                {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Some Moves:</span>{" "}
                                {pokemon.moves
                                    .slice(0, 5)
                                    .map((move) => move.move.name)
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                ) : (
                    <Loader/>
                )}
            </div>
        </div>
    );
};

export default Details;
