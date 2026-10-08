import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 animate-pulse flex flex-col justify-between h-[310px]">
      <div className="flex justify-between items-center w-full mb-2">
        <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>

      <div className="flex-1 flex justify-center items-center py-4">
        <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
      </div>

      <div className="space-y-3 pt-2">
        <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mx-auto" />
        <div className="flex justify-center gap-2 pt-1">
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
