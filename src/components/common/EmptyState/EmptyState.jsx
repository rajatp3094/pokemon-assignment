import React from 'react';

const EmptyState = ({ onClearFilters, title = "No Pokémon found", message = "Try changing your search terms or type filter to discover Pokémon." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-lg mx-auto my-8">
      <div className="w-20 h-20 mb-5 text-indigo-500/80 dark:text-indigo-400/80 bg-indigo-50 dark:bg-indigo-950/50 rounded-full flex items-center justify-center p-4">
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs leading-relaxed">
        {message}
      </p>

      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
