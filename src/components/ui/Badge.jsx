import React from 'react';

export default function Badge({ children, variant = 'crimson', className = '' }) {
  const variants = {
    crimson: 'bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-red-300 border-tis-crimson/20',
    teal: 'bg-tis-teal/10 text-tis-teal dark:bg-tis-teal/20 dark:text-tis-teal-light border-tis-teal/20',
    gold: 'bg-tis-gold/15 text-tis-gold-dark dark:bg-tis-gold/20 dark:text-tis-gold-light border-tis-gold/30',
    dark: 'bg-zinc-800 text-zinc-100 border-zinc-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${variants[variant] || variants.crimson} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}
