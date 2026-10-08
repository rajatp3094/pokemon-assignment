import React from 'react';

const ErrorState = ({ onRetry, message = "We couldn't load the Pokémon data right now." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-red-50/50 dark:bg-red-950/20 rounded-3xl border border-red-100 dark:border-red-900/40 max-w-md mx-auto my-8">
      <div className="w-16 h-16 mb-4 text-red-500 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center p-3">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        Something went wrong
      </h3>
      
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
