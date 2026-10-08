import React from 'react';
import { capitalize } from '../../../utils/formatters';

const TypeFilter = ({ types = [], selectedType, setSelectedType }) => {
  return (
    <div className="relative min-w-[180px] sm:w-[220px]">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.447.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
      </div>

      <select
        id="type-filter-select"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
        aria-label="Filter Pokémon by type"
      >
        <option value="">All Types</option>
        {types.map((typeObj) => {
          const typeName = typeof typeObj === 'string' ? typeObj : typeObj.name;
          return (
            <option key={typeName} value={typeName}>
              {capitalize(typeName)}
            </option>
          );
        })}
      </select>

      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default TypeFilter;
