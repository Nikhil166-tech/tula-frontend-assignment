import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[4px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-teal origin-left shadow-[0_0_12px_rgba(185,1,36,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
}
