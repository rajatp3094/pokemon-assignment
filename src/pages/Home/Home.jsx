import React, { useState, useEffect, useRef } from 'react';
import { usePokemonList, useFilteredPokemon } from '../../hooks';
import { fetchPokemonTypes } from '../../api';
import { PokemonCard, SearchBar, TypeFilter } from '../../components/pokemon';
import { SkeletonCard, EmptyState, ErrorState, Pagination } from '../../components/common';

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 48];

const Home = () => {
  const { pokemonList, loading, error, refetch } = usePokemonList(150);
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const gridRef = useRef(null);

  // Fetch available Pokémon types
  useEffect(() => {
    let isMounted = true;
    fetchPokemonTypes()
      .then((res) => {
        if (isMounted) setTypes(res);
      })
      .catch((err) => console.error('Error fetching types:', err));

    return () => {
      isMounted = false;
    };
  }, []);

  // Filtered Pokémon list using memoized hook
  const { filteredPokemon, filteredCount, totalCount } = useFilteredPokemon(
    pokemonList,
    search,
    selectedType
  );

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedType, itemsPerPage]);

  const handleClearFilters = () => {
    setSearch('');
    setSelectedType('');
    setCurrentPage(1);
  };

  const isFiltered = Boolean(search || selectedType);

  // Calculate pagination bounds
  const totalPages = Math.ceil(filteredCount / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredCount);

  const paginatedPokemon = filteredPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-16">
      {/* Explorer Header */}
      <header className="bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-900 text-white pt-12 pb-16 px-4 shadow-md relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-300 border border-white/10 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            PokéAPI Powered Explorer
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Pokémon Explorer
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover stats, abilities, and types for classic Pokémon with interactive details, instant search & responsive pagination.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main ref={gridRef} className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 space-y-8 scroll-mt-6">
        {/* Search & Filter Toolbar Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100 dark:border-slate-700/80 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <SearchBar
              search={search}
              setSearch={setSearch}
              onClear={() => setSearch('')}
            />

            <div className="flex items-center gap-3 w-full md:w-auto">
              <TypeFilter
                types={types}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />

              {isFiltered && (
                <button
                  onClick={handleClearFilters}
                  className="px-3.5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-2xl transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0"
                  title="Clear all filters"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Metadata & Items Per Page bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div>
              {!loading && !error && filteredCount > 0 && (
                <span>
                  Showing <strong className="text-slate-800 dark:text-white font-semibold">{startIndex}-{endIndex}</strong> of{' '}
                  <strong className="text-slate-800 dark:text-white font-semibold">{filteredCount}</strong> Pokémon
                  {isFiltered && ` (filtered from ${totalCount} total)`}
                </span>
              )}
            </div>

            {/* Per Page Selector */}
            {!loading && !error && filteredCount > 0 && (
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <label htmlFor="items-per-page" className="text-xs text-slate-400 font-medium">
                  Per page:
                </label>
                <select
                  id="items-per-page"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-2 py-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  {ITEMS_PER_PAGE_OPTIONS.map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Grid Content Section */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: itemsPerPage }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : error ? (
          <ErrorState onRetry={refetch} message={error} />
        ) : filteredCount === 0 ? (
          <EmptyState onClearFilters={handleClearFilters} />
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>

            {/* Responsive Pagination Component */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              startIndex={startIndex}
              endIndex={endIndex}
              totalItems={filteredCount}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
