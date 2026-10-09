import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#111D26] via-[#B94732] to-[#F1C8B7] origin-left shadow-xs"
        style={{ scaleX }}
      />
    </div>
  );
};
