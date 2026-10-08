import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypeBadge from '../../common/TypeBadge';
import { formatPokemonId, capitalize } from '../../../utils/formatters';
import { getPokemonArtwork, getPokemonDefaultSprite } from '../../../api/pokemonApi';

const PokemonCard = ({ pokemon }) => {
  const [imgError, setImgError] = useState(false);

  if (!pokemon) return null;

  const id = pokemon.id;
  const formattedId = formatPokemonId(id);
  const primaryType = pokemon.types?.[0]?.type?.name || 'normal';

  // Primary image source with fallback
  const imgSrc = imgError
    ? getPokemonDefaultSprite(id)
    : pokemon.artwork || getPokemonArtwork(id);

  return (
    <Link
      to={`/details/${id}`}
      className="group relative flex flex-col justify-between bg-white dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 overflow-hidden h-[320px]"
      aria-label={`View details for ${pokemon.name}`}
    >
      {/* Background glow gradient */}
      <div
        className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-100 dark:bg-slate-700/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"
      />

      {/* Top row: ID badge */}
      <div className="flex justify-between items-center z-10">
        <span className="text-xs font-bold font-mono tracking-wider px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
          {formattedId}
        </span>
      </div>

      {/* Center: Image */}
      <div className="relative flex-1 flex items-center justify-center p-2 z-10">
        <img
          src={imgSrc}
          alt={pokemon.name}
          onError={() => setImgError(true)}
          loading="lazy"
          className="w-32 h-32 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Bottom section: Name & Types */}
      <div className="z-10 space-y-2 text-center pt-2 border-t border-slate-50 dark:border-slate-700/50">
        <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {capitalize(pokemon.name)}
        </h3>

        {/* Types badges */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-0.5">
          {pokemon.types && pokemon.types.length > 0 ? (
            pokemon.types.map((t, idx) => (
              <TypeBadge key={idx} type={t} size="sm" />
            ))
          ) : (
            <TypeBadge type={primaryType} size="sm" />
          )}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
