import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { SearchModal } from './SearchModal';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F3F0E9]/95 backdrop-blur-xs border-b border-[#111D26]/10 px-4 sm:px-6 lg:px-8 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: PRESSURE POINTS Logo */}
          <Link 
            to="/" 
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
            <div className="w-7 h-[2px] bg-[#B94732] rounded-full mt-0.5 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-2.5 py-1 text-sm font-medium transition-colors ${
                    active
                      ? 'text-[#111D26] font-semibold'
                      : 'text-[#111D26]/70 hover:text-[#111D26]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#B94732] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search & "Let's Talk →" Pill Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full text-[#111D26]/75 hover:text-[#111D26] hover:bg-[#111D26]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#B94732]"
              aria-label="Search Topics"
              title="Search topics and insights"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* Let's Talk CTA button */}
            <Link
              to="/conversation"
              className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs hover:bg-[#1b2b38] transition-all duration-200 active:scale-95 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111D26]"
            >
              <span>Let's Talk</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              <span className="hidden sm:inline-block ml-0.5 text-xs text-[#F1C8B7]">
                <Sparkles className="w-3 h-3 inline -mt-1" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#111D26] hover:bg-[#111D26]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#B94732]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#111D26]/10 pb-2 space-y-1 bg-[#F3F0E9] animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
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
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
