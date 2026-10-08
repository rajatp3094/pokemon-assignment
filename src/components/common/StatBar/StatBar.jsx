import React from 'react';
import { formatStatName } from '../../../utils/formatters';

const StatBar = ({ name, value, max = 180 }) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  // Determine bar color based on stat strength
  const getBarColor = (val) => {
    if (val >= 90) return 'bg-gradient-to-r from-emerald-500 to-teal-400';
    if (val >= 60) return 'bg-gradient-to-r from-sky-500 to-blue-500';
    if (val >= 40) return 'bg-gradient-to-r from-amber-400 to-orange-500';
    return 'bg-gradient-to-r from-rose-500 to-red-600';
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300 w-24">
          {formatStatName(name)}
        </span>
        <span className="font-bold text-slate-900 dark:text-white tabular-nums">
          {value}
        </span>
      </div>
      <div
        className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden p-0.5 shadow-inner"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`${formatStatName(name)} stat: ${value}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${getBarColor(
            value
          )}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;
