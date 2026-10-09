import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { TOPICS } from '../data/topics';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTopics = TOPICS.filter((topic) => {
    const q = query.toLowerCase();
    const titleMatch = topic.title.toLowerCase().includes(q) || topic.titleHighlight.toLowerCase().includes(q);
    const subMatch = topic.subtitle.toLowerCase().includes(q);
    const keyPointsMatch = topic.keyPoints.some(
      (kp) => kp.title.toLowerCase().includes(q) || (kp.desc && kp.desc.toLowerCase().includes(q))
    );
    const notesMatch = topic.stickyNotes.some((n) => n.text.toLowerCase().includes(q));
    return titleMatch || subMatch || keyPointsMatch || notesMatch;
  });

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#111D26]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#F3F0E9] rounded-lg shadow-2xl border border-[#111D26]/15 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Search Topics"
      >
        <div className="flex items-center px-4 py-3.5 border-b border-[#111D26]/10 bg-white/70">
          <Search className="w-5 h-5 text-[#B94732] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, feelings, keywords (e.g. sleep, overthinking, career)..."
            className="w-full bg-transparent border-none text-[#111D26] placeholder-[#111D26]/40 focus:outline-hidden text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-[#111D26]/60 hover:text-[#111D26] hover:bg-[#111D26]/5 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleSelect(topic.path)}
                className="w-full text-left p-3.5 rounded-md hover:bg-white/80 transition-all border border-transparent hover:border-[#111D26]/10 group flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#111D26]/5 text-[#B94732]">
                      {topic.number}
                    </span>
                    <span className="font-serif-display font-bold text-base text-[#111D26] group-hover:text-[#B94732] transition-colors">
                      {topic.title} {topic.titleHighlight}
                    </span>
                  </div>
                  <p className="text-xs text-[#111D26]/70 line-clamp-1">
                    {topic.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#111D26]/40 group-hover:text-[#B94732] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-[#111D26]/60">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#B94732]/50" />
              <p className="text-sm font-medium">No topics found matching "{query}"</p>
              <p className="text-xs text-[#111D26]/40 mt-1">Try searching for "deadlines", "sleep", "pressure", or "grades"</p>
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 bg-[#E8E2D5]/50 border-t border-[#111D26]/10 flex items-center justify-between text-[11px] text-[#111D26]/60">
          <span>Press ESC or click outside to close</span>
          <span className="font-hand text-sm text-[#B94732]">8 Awareness Chapters</span>
        </div>
      </div>
    </div>
  );
};
