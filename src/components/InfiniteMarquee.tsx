import { motion } from 'framer-motion';

interface MarqueeProps {
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const MARQUEE_ITEMS = [
  '✦ BEHIND EVERY "I\'M FINE" IS A STORY',
  '• YOU ARE NOT A TEST SCORE',
  '✦ BREATHE • TAKE A STEP BACK',
  '• COMPARISON STEALS YOUR PEACE',
  '✦ IT\'S OKAY TO ASK FOR HELP',
  '• REST IS NOT A REWARD, IT\'S A NECESSITY',
  '✦ YOUR WORTH IS INTRINSIC',
  '• SAME PRESSURE, DIFFERENT STORIES',
];

export const InfiniteMarquee = ({
  speed = 28,
  direction = 'left',
  className = '',
}: MarqueeProps) => {
  const content = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 border-y border-[#111D26]/12 bg-[#111D26] text-white ${className}`}
    >
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111D26] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111D26] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 font-serif-display text-xs sm:text-sm tracking-widest font-semibold uppercase opacity-90 hover:opacity-100 hover:text-[#F1C8B7] transition-colors"
          >
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
