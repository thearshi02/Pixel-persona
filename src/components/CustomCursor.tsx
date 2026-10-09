import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'drag' | 'card' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has a touch screen without fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestSticky = target.closest('.sticky-note');
      const closestCard = target.closest('.editorial-card');
      const closestInteractive = target.closest('a, button, input, textarea, [role="button"]');

      if (closestSticky) {
        setCursorVariant('drag');
        setCursorText('DRAG');
      } else if (closestCard) {
        setCursorVariant('card');
        setCursorText('VIEW');
      } else if (closestInteractive) {
        setCursorVariant('link');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('hidden');
    };

    const handleMouseEnter = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Ring / Capsule */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorVariant === 'drag' || cursorVariant === 'card' ? 64 : cursorVariant === 'link' ? 44 : 28,
          height: cursorVariant === 'drag' || cursorVariant === 'card' ? 64 : cursorVariant === 'link' ? 44 : 28,
          backgroundColor:
            cursorVariant === 'drag'
              ? 'rgba(185, 71, 50, 0.9)'
              : cursorVariant === 'card'
              ? 'rgba(17, 29, 38, 0.85)'
              : cursorVariant === 'link'
              ? 'rgba(185, 71, 50, 0.2)'
              : 'rgba(17, 29, 38, 0.08)',
          borderColor:
            cursorVariant === 'drag'
              ? 'rgba(185, 71, 50, 0.9)'
              : cursorVariant === 'card'
              ? 'rgba(17, 29, 38, 0.85)'
              : cursorVariant === 'link'
              ? 'rgba(185, 71, 50, 0.6)'
              : 'rgba(17, 29, 38, 0.3)',
          borderWidth: 1.5,
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      >
        {cursorText && (
          <span className="font-serif-display text-[10px] font-bold text-white tracking-widest uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B94732] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorVariant === 'drag' || cursorVariant === 'card' ? 0 : 1,
          scale: cursorVariant === 'link' ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
