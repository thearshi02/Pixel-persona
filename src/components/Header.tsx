import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { sounds } from '../utils/soundEffects';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sounds.isEnabled());
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Reality', path: '/reality' },
    { label: 'Academics', path: '/academics' },
    { label: 'Comparison', path: '/comparison' },
    { label: 'Impact', path: '/impact' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Talk', path: '/conversation' },
    { label: 'Beyond Grades', path: '/beyond-grades' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleSoundToggle = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F3F0E9]/90 backdrop-blur-md border-b border-[#111D26]/10 px-4 sm:px-6 lg:px-8 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: PRESSURE POINTS Logo */}
          <Link
            to="/"
            onClick={() => sounds.playPop()}
            className="flex flex-col items-start leading-none group shrink-0 focus-visible:outline-2 focus-visible:outline-[#B94732]"
            aria-label="PRESSURE POINTS Home"
          >
            <div className="font-serif-display font-black tracking-tight text-base sm:text-lg text-[#111D26] uppercase">
              PRESSURE
            </div>
            <div className="font-serif-display font-extrabold tracking-widest text-xs sm:text-sm text-[#111D26] uppercase">
              POINTS
            </div>
            {/* Terracotta brush accent underline */}
            <motion.div
              className="h-[2px] bg-[#B94732] rounded-full mt-0.5"
              initial={{ width: '28px' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Center: Desktop Navigation with Gliding Active Pill */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => sounds.playPop()}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    active ? 'text-[#111D26] font-semibold' : 'text-[#111D26]/70 hover:text-[#111D26]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#111D26]/6 rounded-full border border-[#111D26]/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B94732]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Sound Toggle, Search & "Let's Talk →" Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Audio Feedback Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSoundToggle}
              className="p-2 rounded-full text-[#111D26]/75 hover:text-[#111D26] hover:bg-[#111D26]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#B94732]"
              title={soundEnabled ? 'Mute motion audio cues' : 'Turn on motion audio cues'}
              aria-label="Toggle motion sound cues"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#B94732]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#111D26]/50" />
              )}
            </motion.button>

            {/* Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchOpen(true);
                sounds.playPop();
              }}
              className="p-2 rounded-full text-[#111D26]/75 hover:text-[#111D26] hover:bg-[#111D26]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#B94732]"
              aria-label="Search Topics"
              title="Search topics and insights"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </motion.button>

            {/* Let's Talk CTA button with spring hover */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/conversation"
                onClick={() => sounds.playPop()}
                className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs hover:bg-[#1b2b38] transition-colors group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111D26]"
              >
                <span>Let's Talk</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                <span className="hidden sm:inline-block ml-0.5 text-xs text-[#F1C8B7]">
                  <Sparkles className="w-3 h-3 inline -mt-1" />
                </span>
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                sounds.playPop();
              }}
              className="lg:hidden p-2 rounded-md text-[#111D26] hover:bg-[#111D26]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#B94732]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden mt-3 pt-3 border-t border-[#111D26]/10 pb-2 space-y-1 bg-[#F3F0E9]"
            >
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      sounds.playPop();
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#B94732]/10 text-[#B94732] font-semibold'
                        : 'text-[#111D26] hover:bg-[#111D26]/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#B94732]" />}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
