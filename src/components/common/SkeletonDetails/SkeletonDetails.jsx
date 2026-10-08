import React from 'react';

const SkeletonDetails = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-pulse p-4">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded" />

      {/* Main Details Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left column */}
        <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="w-56 h-56 bg-slate-200 dark:bg-slate-700 rounded-3xl" />
          <div className="h-8 w-40 bg-slate-200 dark:bg-slate-700 rounded-lg" />
          <div className="flex gap-2">
            <div className="h-7 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
            <div className="h-7 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
            <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
          </div>
          <div className="space-y-3">
            <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;
