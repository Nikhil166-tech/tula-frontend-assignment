import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button'
}) {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2 shadow-sm",
    lg: "px-7 py-3.5 text-base font-bold gap-2.5 shadow-md",
  };

  const variants = {
    primary: "bg-tis-crimson text-white hover:bg-tis-crimson-dark focus:ring-tis-crimson hover:shadow-glow-crimson",
    secondary: "bg-tis-teal text-white hover:bg-tis-teal-dark focus:ring-tis-teal hover:shadow-glow-teal",
    gold: "bg-gradient-to-r from-tis-gold to-tis-gold-dark text-white hover:opacity-95 focus:ring-tis-gold hover:shadow-glow-gold",
    outline: "border-2 border-tis-crimson text-tis-crimson dark:text-red-400 dark:border-red-400 hover:bg-tis-crimson hover:text-white dark:hover:bg-tis-crimson",
    ghost: "text-zinc-700 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800",
    white: "bg-white text-zinc-900 hover:bg-stone-50 border border-stone-200 shadow-sm",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </motion.button>
  );
}
