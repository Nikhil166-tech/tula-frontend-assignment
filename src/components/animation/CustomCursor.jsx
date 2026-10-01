import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid ring movement
  const springX = useSpring(mouseX, { damping: 24, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 24, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const updateMedia = (e) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener('change', updateMedia);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', updateMedia);
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      const interactive = Boolean(
        target && (
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover')
        )
      );
      setIsHovered(interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      mediaQuery.removeEventListener('change', updateMedia);
    };
  }, [mouseX, mouseY]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-tis-crimson/80 dark:border-tis-gold/90 transition-[width,height,border-color,background-color] duration-200"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          backgroundColor: isHovered ? 'rgba(185, 1, 36, 0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(185, 1, 36, 0.35)' : 'none',
        }}
      />
      {/* Inner Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full bg-tis-crimson dark:bg-tis-gold shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </>
  );
}
