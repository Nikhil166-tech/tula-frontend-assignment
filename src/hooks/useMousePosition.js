import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const updateMedia = (e) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener('change', updateMedia);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', updateMedia);
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if target is interactive
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, select, textarea, [role="button"], .interactive')
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', updateMedia);
    };
  }, []);

  return { ...mousePosition, isHovered, isPointerFine };
}
