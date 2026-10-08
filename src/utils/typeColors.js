/**
 * Mapping of Pokemon types to Tailwind CSS styling classes and hex colors.
 */
export const TYPE_COLORS = {
  fire: {
    bg: 'bg-amber-500',
    badgeBg: 'bg-red-100 dark:bg-red-950/60',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800',
    accent: '#EF4444',
    gradient: 'from-amber-500/20 to-red-500/20',
  },
  water: {
    bg: 'bg-blue-500',
    badgeBg: 'bg-blue-100 dark:bg-blue-950/60',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    accent: '#3B82F6',
    gradient: 'from-blue-400/20 to-cyan-500/20',
  },
  grass: {
    bg: 'bg-emerald-500',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
    accent: '#10B981',
    gradient: 'from-emerald-400/20 to-teal-500/20',
  },
  electric: {
    bg: 'bg-amber-400',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-300 dark:border-amber-800',
    accent: '#F59E0B',
    gradient: 'from-amber-300/30 to-yellow-500/20',
  },
  ice: {
    bg: 'bg-cyan-400',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    text: 'text-cyan-800 dark:text-cyan-300',
    border: 'border-cyan-200 dark:border-cyan-800',
    accent: '#06B6D4',
    gradient: 'from-cyan-300/20 to-sky-500/20',
  },
  fighting: {
    bg: 'bg-rose-700',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
    text: 'text-rose-800 dark:text-rose-300',
    border: 'border-rose-300 dark:border-rose-800',
    accent: '#C026D3',
    gradient: 'from-orange-600/20 to-rose-700/20',
  },
  poison: {
    bg: 'bg-purple-600',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
    accent: '#9333EA',
    gradient: 'from-purple-500/20 to-fuchsia-600/20',
  },
  ground: {
    bg: 'bg-amber-700',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    text: 'text-amber-900 dark:text-amber-300',
    border: 'border-amber-300 dark:border-amber-900',
    accent: '#B45309',
    gradient: 'from-amber-600/20 to-yellow-700/20',
  },
  flying: {
    bg: 'bg-indigo-400',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
    accent: '#6366F1',
    gradient: 'from-indigo-400/20 to-sky-400/20',
  },
  psychic: {
    bg: 'bg-pink-500',
    badgeBg: 'bg-pink-100 dark:bg-pink-950/60',
    text: 'text-pink-700 dark:text-pink-300',
    border: 'border-pink-200 dark:border-pink-800',
    accent: '#EC4899',
    gradient: 'from-pink-400/20 to-rose-500/20',
  },
  bug: {
    bg: 'bg-lime-500',
    badgeBg: 'bg-lime-100 dark:bg-lime-950/60',
    text: 'text-lime-800 dark:text-lime-300',
    border: 'border-lime-200 dark:border-lime-800',
    accent: '#84CC16',
    gradient: 'from-lime-400/20 to-emerald-500/20',
  },
  rock: {
    bg: 'bg-stone-600',
    badgeBg: 'bg-stone-100 dark:bg-stone-900/60',
    text: 'text-stone-800 dark:text-stone-300',
    border: 'border-stone-300 dark:border-stone-700',
    accent: '#78716C',
    gradient: 'from-stone-500/20 to-amber-700/20',
  },
  ghost: {
    bg: 'bg-purple-900',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
    text: 'text-purple-900 dark:text-purple-300',
    border: 'border-purple-300 dark:border-purple-800',
    accent: '#581C87',
    gradient: 'from-purple-800/20 to-indigo-900/20',
  },
  dragon: {
    bg: 'bg-indigo-700',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    text: 'text-indigo-800 dark:text-indigo-300',
    border: 'border-indigo-300 dark:border-indigo-800',
    accent: '#4338CA',
    gradient: 'from-indigo-600/20 to-purple-700/20',
  },
  steel: {
    bg: 'bg-slate-500',
    badgeBg: 'bg-slate-100 dark:bg-slate-800/60',
    text: 'text-slate-700 dark:text-slate-300',
    border: 'border-slate-300 dark:border-slate-700',
    accent: '#64748B',
    gradient: 'from-slate-400/20 to-zinc-500/20',
  },
  fairy: {
    bg: 'bg-pink-400',
    badgeBg: 'bg-pink-100 dark:bg-pink-950/60',
    text: 'text-pink-800 dark:text-pink-300',
    border: 'border-pink-200 dark:border-pink-800',
    accent: '#F472B6',
    gradient: 'from-pink-300/20 to-rose-400/20',
  },
  normal: {
    bg: 'bg-slate-400',
    badgeBg: 'bg-slate-100 dark:bg-slate-800/60',
    text: 'text-slate-700 dark:text-slate-300',
    border: 'border-slate-200 dark:border-slate-700',
    accent: '#94A3B8',
    gradient: 'from-slate-300/20 to-gray-400/20',
  }
};

const DEFAULT_TYPE_COLOR = {
  bg: 'bg-slate-500',
  badgeBg: 'bg-slate-100 dark:bg-slate-800',
  text: 'text-slate-700 dark:text-slate-300',
  border: 'border-slate-200 dark:border-slate-700',
  accent: '#64748B',
  gradient: 'from-slate-300/20 to-gray-400/20',
};

export const getTypeColor = (typeName) => {
  if (!typeName) return DEFAULT_TYPE_COLOR;
  const normalized = typeName.toLowerCase();
  return TYPE_COLORS[normalized] || DEFAULT_TYPE_COLOR;
};
