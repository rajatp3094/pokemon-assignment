import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetail } from '../../hooks';
import { Breadcrumbs, TypeBadge, StatBar, SkeletonDetails, ErrorState } from '../../components/common';
import { formatPokemonId, capitalize, formatHeight, formatWeight, getTypeColor } from '../../utils';
import { getPokemonDefaultSprite } from '../../api';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, loading, error, refetch } = usePokemonDetail(id);
  const [imgError, setImgError] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
        <SkeletonDetails />
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 flex flex-col items-center justify-center">
        <ErrorState
          onRetry={refetch}
          message={error || "We couldn't find the requested Pokémon."}
        />
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium text-sm rounded-xl transition-colors"
        >
          Back to Explorer
        </button>
      </div>
    );
  }

  const primaryType = pokemon.types?.[0]?.type?.name || 'normal';
  const typeColorScheme = getTypeColor(primaryType);
  const formattedId = formatPokemonId(pokemon.id);

  const imgSrc = imgError
    ? getPokemonDefaultSprite(pokemon.id)
    : pokemon.artwork || getPokemonDefaultSprite(pokemon.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-16">
      {/* Top Header Navigation bar */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-4 px-4 shadow-sm sticky top-0 z-30 backdrop-blur-md bg-white/90 dark:bg-slate-800/90">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Breadcrumbs label={pokemon.name} />

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 px-3.5 py-1.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Explorer
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 pt-8 space-y-8">
        {/* Main Details Showcase Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Artwork & Header Info */}
          <div className={`md:col-span-5 p-8 flex flex-col items-center justify-between relative bg-gradient-to-b ${typeColorScheme.gradient} border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700/60`}>
            {/* ID Tag */}
            <div className="w-full flex justify-between items-center z-10">
              <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-full shadow-sm">
                {formattedId}
              </span>
              {pokemon.baseExperience && (
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-800">
                  EXP: {pokemon.baseExperience}
                </span>
              )}
            </div>

            {/* Main Pokemon Artwork */}
            <div className="relative my-6 group">
              <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/40 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300" />
              <img
                src={imgSrc}
                alt={pokemon.name}
                onError={() => setImgError(true)}
                className="w-56 h-56 object-contain relative z-10 drop-shadow-xl transform group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>

            {/* Name & Type Badges */}
            <div className="text-center space-y-3 z-10 w-full">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {capitalize(pokemon.name)}
              </h1>

              <div className="flex flex-wrap justify-center gap-2">
                {pokemon.types?.map((t, idx) => (
                  <TypeBadge key={idx} type={t} size="lg" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Physical Specs, Stats, Abilities */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-8">
            {/* Physical Characteristics Cards */}
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Physical Characteristics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/60">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                    Height
                  </div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {formatHeight(pokemon.height)}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/60">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                    Weight
                  </div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {formatWeight(pokemon.weight)}
                  </div>
                </div>
              </div>
            </section>

            {/* Base Stats Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Base Stats
                </h2>
                <span className="text-xs font-medium text-slate-400">
                  Total: {pokemon.stats?.reduce((acc, curr) => acc + curr.base_stat, 0) || 0}
                </span>
              </div>

              <div className="space-y-3 bg-slate-50/50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                {pokemon.stats?.map((statObj, idx) => (
                  <StatBar
                    key={idx}
                    name={statObj.stat?.name}
                    value={statObj.base_stat}
                  />
                ))}
              </div>
            </section>

            {/* Abilities Section */}
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Abilities
              </h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities?.map((ab, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60 rounded-xl text-xs font-semibold capitalize tracking-wide shadow-sm"
                  >
                    {capitalize(ab.ability?.name)}
                    {ab.is_hidden && (
                      <span className="ml-1.5 text-[10px] uppercase font-bold text-indigo-500 dark:text-indigo-400">
                        (Hidden)
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </section>

            {/* Signature Moves Section */}
            {pokemon.moves && pokemon.moves.length > 0 && (
              <section className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Notable Moves
                </h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.moves.slice(0, 6).map((moveObj, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                    >
                      {capitalize(moveObj.move?.name)}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;
