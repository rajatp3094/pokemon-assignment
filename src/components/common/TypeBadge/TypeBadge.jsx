import React from 'react';
import { getTypeColor } from '../../../utils/typeColors';
import { capitalize } from '../../../utils/formatters';

const TypeBadge = ({ type, size = 'md', className = '' }) => {
  const typeName = typeof type === 'string' ? type : type?.type?.name || 'normal';
  const colorScheme = getTypeColor(typeName);

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs rounded-full',
    md: 'px-3 py-1 text-xs font-semibold rounded-full',
    lg: 'px-4 py-1.5 text-sm font-semibold rounded-lg',
  };

  return (
    <span
      className={`inline-flex items-center tracking-wide font-medium shadow-sm transition-transform duration-150 hover:scale-105 ${colorScheme.badgeBg} ${colorScheme.text} border ${colorScheme.border} ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full mr-1.5 ${colorScheme.bg}`} aria-hidden="true" />
      {capitalize(typeName)}
    </span>
  );
};

export default TypeBadge;
