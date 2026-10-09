import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { StickyNote as StickyNoteType } from '../data/topics';
import { sounds } from '../utils/soundEffects';

interface StickyNoteProps {
  note: StickyNoteType;
  dragConstraintsRef?: React.RefObject<HTMLDivElement | null>;
}

export const StickyNoteComponent = ({ note, dragConstraintsRef }: StickyNoteProps) => {
  const noteRef = useRef<HTMLDivElement>(null);

  const colorStyles = {
    peach: 'bg-[#F1C8B7] text-[#202322] border-[#e4b29f]',
    yellow: 'bg-[#F9ECC2] text-[#202322] border-[#ebd496]',
    sage: 'bg-[#C9D8B9] text-[#111D26] border-[#b5c7a3]',
    blue: 'bg-[#AFC4D5] text-[#111D26] border-[#9bb4c8]',
    cream: 'bg-[#FFFDF9] text-[#202322] border-[#E8E2D5]',
    terracotta: 'bg-[#B94732] text-white border-[#9e3a27]',
  };

  const handleDragStart = () => {
    sounds.playPaper();
  };

  const handleDragEnd = () => {
    sounds.playPop();
  };

  return (
    <motion.div
      ref={noteRef}
      drag
      dragConstraints={dragConstraintsRef}
      dragElastic={0.25}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -3, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3 + Math.random() * 2,
          ease: 'easeInOut',
        },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        zIndex: 50,
        cursor: 'grab',
        boxShadow: '0 12px 24px -4px rgba(17, 29, 38, 0.25)',
      }}
      whileTap={{
        scale: 1.03,
        cursor: 'grabbing',
        boxShadow: '0 18px 30px -4px rgba(17, 29, 38, 0.35)',
      }}
      className={`absolute z-20 pointer-events-auto select-none p-2.5 sm:p-3 rounded-xs shadow-md border font-hand text-sm sm:text-base md:text-lg leading-tight whitespace-pre-line sticky-note cursor-grab ${colorStyles[note.color]} ${note.position} ${note.rotation}`}
    >
      {/* Scotch tape accent */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 tape-strip rotate-1 opacity-80 pointer-events-none" />
      <span>{note.text}</span>
    </motion.div>
  );
};
