import type { StickyNote as StickyNoteType } from '../data/topics';

interface StickyNoteProps {
  note: StickyNoteType;
}

export const StickyNoteComponent = ({ note }: StickyNoteProps) => {
  const colorStyles = {
    peach: 'bg-[#F1C8B7] text-[#202322] border-[#e4b29f]',
    yellow: 'bg-[#F9ECC2] text-[#202322] border-[#ebd496]',
    sage: 'bg-[#C9D8B9] text-[#111D26] border-[#b5c7a3]',
    blue: 'bg-[#AFC4D5] text-[#111D26] border-[#9bb4c8]',
    cream: 'bg-[#FFFDF9] text-[#202322] border-[#E8E2D5]',
    terracotta: 'bg-[#B94732] text-white border-[#9e3a27]',
  };

  return (
    <div
      className={`absolute z-20 pointer-events-auto select-none p-2.5 sm:p-3 rounded-xs shadow-md border font-hand text-sm sm:text-base md:text-lg leading-tight whitespace-pre-line sticky-note ${colorStyles[note.color]} ${note.position} ${note.rotation}`}
    >
      {/* Scotch tape accent */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 tape-strip rotate-1 opacity-80 pointer-events-none" />
      <span>{note.text}</span>
    </div>
  );
};
