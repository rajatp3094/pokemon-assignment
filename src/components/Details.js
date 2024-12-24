import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => setPokemon(response.data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="max-w-lg w-full">
                <Link
                    to="/"
                    className="text-green-500 font-semibold hover:underline mb-4 inline-block"
                >
                    ← Back
                </Link>
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
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Details;
