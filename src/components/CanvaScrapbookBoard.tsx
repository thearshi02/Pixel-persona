import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, RotateCcw, Heart, Coffee } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ScrapbookSticker {
  id: string;
  text: string;
  type: 'tape' | 'polaroid' | 'badge' | 'pin';
  color: string;
  x: number;
  y: number;
  rotation: number;
}

const INITIAL_STICKERS: ScrapbookSticker[] = [
  { id: '1', text: '📌 EXAMS DUE MONDAY', type: 'pin', color: 'bg-[#F9ECC2] text-[#202322] border-[#ebd496]', x: 20, y: 15, rotation: -4 },
  { id: '2', text: '☕ CAFFEINE OVERDOSE', type: 'badge', color: 'bg-[#F1C8B7] text-[#202322] border-[#e4b29f]', x: 70, y: 45, rotation: 6 },
  { id: '3', text: '🌿 BREATHE. YOU ARE ENOUGH.', type: 'tape', color: 'bg-[#C9D8B9] text-[#111D26] border-[#b5c7a3]', x: 40, y: 80, rotation: -2 },
  { id: '4', text: '✦ 3AM OVERTHINKING', type: 'badge', color: 'bg-[#AFC4D5] text-[#111D26] border-[#9bb4c8]', x: 75, y: 12, rotation: 5 },
  { id: '5', text: '♡ WORTH > GRADES', type: 'tape', color: 'bg-[#FFFDF9] text-[#B94732] border-[#B94732]/30', x: 15, y: 75, rotation: 3 },
];

export const CanvaScrapbookBoard = () => {
  const [stickers, setStickers] = useState<ScrapbookSticker[]>(INITIAL_STICKERS);

  const addSticker = (text: string, color: string) => {
    sounds.playPaper();
    const newSticker: ScrapbookSticker = {
      id: Date.now().toString(),
      text,
      type: 'badge',
      color,
      x: 35 + Math.random() * 20,
      y: 35 + Math.random() * 20,
      rotation: Math.floor(Math.random() * 16) - 8,
    };
    setStickers([...stickers, newSticker]);
  };

  const resetBoard = () => {
    sounds.playPop();
    setStickers(INITIAL_STICKERS);
  };

  return (
    <div className="relative bg-[#FFFDF9] rounded-3xl border border-[#111D26]/15 shadow-xl p-6 sm:p-10 overflow-hidden">
      {/* Top Header - Canva Style Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#111D26]/12 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B94732]/10 text-[#B94732] text-xs font-semibold tracking-wider uppercase mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pinterest & Canva Scrapbook Studio</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#111D26] tracking-tight">
            The Student Life Moodboard
          </h3>
          <p className="text-xs sm:text-sm text-[#111D26]/70 font-sans mt-0.5">
            Aesthetic collage inspired by real college scrapbooks. Drag photos, washi tapes, and sticky badges.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => addSticker('⚡ BURNOUT ALERT', 'bg-[#F9ECC2] text-[#111D26] border-[#ebd496]')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#111D26]/15 text-xs font-semibold hover:border-[#B94732] hover:text-[#B94732] transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 text-[#B94732]" />
            <span>+ Burnout Pin</span>
          </button>
          <button
            onClick={() => addSticker('☕ COFFEE RUN', 'bg-[#F1C8B7] text-[#111D26] border-[#e4b29f]')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#111D26]/15 text-xs font-semibold hover:border-[#B94732] hover:text-[#B94732] transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <Coffee className="w-3.5 h-3.5 text-[#B94732]" />
            <span>+ Coffee Pin</span>
          </button>
          <button
            onClick={() => addSticker('♡ SELF CARE DAY', 'bg-[#C9D8B9] text-[#111D26] border-[#b5c7a3]')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#111D26]/15 text-xs font-semibold hover:border-[#B94732] hover:text-[#B94732] transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 text-[#B94732]" />
            <span>+ Self Care</span>
          </button>
          <button
            onClick={resetBoard}
            className="p-2 rounded-full border border-[#111D26]/15 hover:bg-[#111D26]/5 text-[#111D26]/60 transition-colors cursor-pointer"
            title="Reset Board"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Corkboard / Canva Canvas Area */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] bg-[#F3F0E9] rounded-2xl border-2 border-dashed border-[#111D26]/20 p-4 sm:p-8 overflow-hidden select-none">
        {/* Subtle grid background pattern like Canva editor */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#111D26 0.75px, transparent 0.75px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Centerpiece: Real Pinterest Aesthetic Polaroid 1 */}
        <motion.div
          drag
          dragElastic={0.2}
          onDragStart={() => sounds.playPaper()}
          onDragEnd={() => sounds.playPop()}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
          whileTap={{ scale: 1.02 }}
          className="absolute top-6 left-4 sm:left-8 w-56 sm:w-64 bg-white p-3 pb-5 rounded-xs shadow-xl border border-[#111D26]/15 rotate-[-3deg] cursor-grab select-none z-10"
        >
          {/* Top Washi Tape Strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[repeating-linear-gradient(45deg,#F1C8B7,#F1C8B7_6px,#e4b29f_6px,#e4b29f_12px)] opacity-90 shadow-2xs rotate-1 pointer-events-none" />
          
          <div className="aspect-4/3 w-full overflow-hidden rounded-2xs mb-2.5 bg-black/5 border border-black/5">
            <img
              src="/images/campus_friends.jpg"
              alt="Campus Friends Polaroid"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
          <div className="flex items-center justify-between font-hand text-sm sm:text-base text-[#111D26]">
            <span>Campus Lawn Golden Hour</span>
            <span className="text-xs text-[#B94732] font-semibold">OCT '26</span>
          </div>
        </motion.div>

        {/* Centerpiece: Pinterest Aesthetic Flatlay Photo 2 */}
        <motion.div
          drag
          dragElastic={0.2}
          onDragStart={() => sounds.playPaper()}
          onDragEnd={() => sounds.playPop()}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
          whileTap={{ scale: 1.02 }}
          className="absolute top-10 right-4 sm:right-10 w-60 sm:w-72 bg-white p-3.5 pb-6 rounded-xs shadow-xl border border-[#111D26]/15 rotate-[4deg] cursor-grab select-none z-10"
        >
          {/* Scotch Tape with Stamp Accent */}
          <div className="absolute -top-3 left-8 w-16 h-5 bg-[#FFFDF9]/85 border-y border-dashed border-[#111D26]/20 shadow-2xs -rotate-3 pointer-events-none" />
          
          <div className="aspect-16/10 w-full overflow-hidden rounded-2xs mb-2.5 bg-black/5 border border-black/5">
            <img
              src="/images/reality.jpg"
              alt="Late Night Study Journal Flatlay"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
          <div className="flex items-center justify-between font-hand text-sm sm:text-base text-[#111D26]">
            <span>Midnight Journal & Highlighters</span>
            <span className="text-xs text-[#111D26]/60">2:14 AM</span>
          </div>
        </motion.div>

        {/* Centerpiece: Real Pinterest Aesthetic Library Study 3 */}
        <motion.div
          drag
          dragElastic={0.2}
          onDragStart={() => sounds.playPaper()}
          onDragEnd={() => sounds.playPop()}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
          whileTap={{ scale: 1.02 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 sm:w-80 bg-white p-3 pb-5 rounded-xs shadow-2xl border border-[#111D26]/15 rotate-[-1deg] cursor-grab select-none z-10 hidden sm:block"
        >
          {/* Tape Accent */}
          <div className="absolute -top-3 right-10 w-16 h-5 bg-[#C9D8B9]/85 border-y border-dashed border-[#111D26]/20 shadow-2xs rotate-4 pointer-events-none" />
          
          <div className="aspect-16/9 w-full overflow-hidden rounded-2xs mb-2.5 bg-black/5 border border-black/5">
            <img
              src="/images/academics.jpg"
              alt="University Library Desk"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
          <div className="flex items-center justify-between font-hand text-sm sm:text-base text-[#111D26]">
            <span>Quiet Hours • Focus Session</span>
            <span className="text-xs text-[#B94732]">Library Nook</span>
          </div>
        </motion.div>

        {/* Dynamic Draggable Canva Stickers & Washi Notes */}
        {stickers.map((stk) => (
          <motion.div
            key={stk.id}
            drag
            dragElastic={0.25}
            onDragStart={() => sounds.playPaper()}
            onDragEnd={() => sounds.playPop()}
            whileHover={{ scale: 1.12, rotate: 0, zIndex: 40 }}
            whileTap={{ scale: 1.04 }}
            style={{
              left: `${stk.x}%`,
              top: `${stk.y}%`,
            }}
            className={`absolute pointer-events-auto select-none p-2.5 sm:p-3 rounded-xs shadow-md border font-hand text-sm sm:text-base cursor-grab leading-none ${stk.color}`}
            animate={{ rotate: stk.rotation }}
          >
            {/* Tiny tape strip on sticker */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-white/70 shadow-2xs rotate-1 pointer-events-none" />
            <span>{stk.text}</span>
          </motion.div>
        ))}

        {/* Canva Watermark / Editorial Footer Stamp */}
        <div className="absolute bottom-3 right-4 flex items-center gap-2 font-serif-display text-[11px] font-bold uppercase tracking-wider text-[#111D26]/40 pointer-events-none">
          <span>CANVA EDITORIAL ARCHIVE</span>
          <span>•</span>
          <span>PINTEREST MOODBOARD</span>
        </div>
      </div>
    </div>
  );
};
