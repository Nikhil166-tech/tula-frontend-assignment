import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeVariant = 'crimson',
  title,
  highlight,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignments = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignments[align]} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-zinc-900 dark:text-white leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-tis-crimson dark:text-red-400">
            {highlight}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-tis-gold opacity-80"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M3 8.5C50 2 150 1 197 7.5"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
