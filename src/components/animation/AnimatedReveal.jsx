import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedReveal({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  className = '',
  cascade = false
}) {
  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initialMotion = {
    opacity: 0,
    ...directions[direction],
    scale: direction === 'none' ? 0.95 : 1
  };

  return (
    <motion.div
      initial={initialMotion}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }
      }}
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
