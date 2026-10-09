import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { TOPICS } from '../data/topics';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'PRESSURE POINTS — Behind Every "I\'m Fine" Is a Story';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Hero Editorial Text (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Subtle badge / editorial kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111D26]/5 text-[#B94732] border border-[#B94732]/20 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B94732]" />
            <span>Student-Life Awareness Campaign</span>
          </div>

          {/* Main Headline */}
          <div className="relative">
            {/* Doodle star / scribble accent */}
            <span className="absolute -top-6 -left-3 font-hand text-2xl text-[#B94732] rotate-12 select-none">
              ✦
            </span>
            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-[#111D26] tracking-tight">
              Behind Every <br />
              <span className="text-[#B94732] italic font-serif-display font-medium relative inline-block">
                “I'm Fine”
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#B94732]/40" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> <br />
              Is a Story.
            </h1>
          </div>

          {/* Supporting Copy */}
          <div className="space-y-3 max-w-xl text-[#111D26]/80 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              It's not just homework and exams. It's late nights, high expectations, comparison, self-doubt, and still having to smile and say “I'm fine.”
            </p>
            <p className="text-sm sm:text-base font-medium text-[#111D26]/70">
              Explore real struggles, understand the pressure, and discover ways to cope.
            </p>
          </div>

          {/* CTAs & Handwritten Accent */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Link
              to="/reality"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111D26] text-white font-serif-display font-bold text-base hover:bg-[#1f3242] shadow-md transition-all duration-200 active:scale-95 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111D26]"
            >
              <span>Explore the Reality</span>
              <ArrowRight className="w-4 h-4 text-[#AFC4D5] group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-2 font-hand text-lg sm:text-xl text-[#B94732] select-none pt-1 sm:pt-0">
              <span>Same Students. Different Stories.</span>
              <Heart className="w-4 h-4 text-[#B94732] fill-[#B94732]" />
            </div>
          </div>
        </div>

        {/* Right Hero Collage Visual (6 cols) */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#111D26]/15 bg-[#111D26]/5 group">
            
            {/* Main Student Photograph */}
            <div className="relative w-full aspect-16/10 sm:aspect-16/11 overflow-hidden">
              <img
                src="/images/hero.jpg"
                alt="Student studying late at desk surrounded by books and laptop"
                className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Collage Sticky Notes & Annotations */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* EXAMS sticky note */}
              <div className="absolute top-6 left-6 bg-[#FFFDF9] text-[#111D26] border border-[#111D26]/15 font-hand text-base sm:text-lg px-3 py-1.5 rounded-xs shadow-md -rotate-6">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 tape-strip rotate-2" />
                EXAMS
              </div>

              {/* WHAT NEXT? */}
              <div className="absolute top-20 left-10 bg-[#F1C8B7] text-[#111D26] border border-[#e4b29f] font-hand text-sm sm:text-base px-2.5 py-1 rounded-xs shadow-sm rotate-4">
                WHAT NEXT? ↗
              </div>

              {/* EXPECTATIONS */}
              <div className="absolute bottom-28 left-8 bg-[#F9ECC2] text-[#111D26] border border-[#ebd496] font-hand text-sm sm:text-base px-3 py-1 rounded-xs shadow-sm -rotate-2">
                EXPECTATIONS
              </div>

              {/* I'M FINE :) */}
              <div className="absolute top-8 right-16 bg-[#F9ECC2] text-[#111D26] border border-[#ebd496] font-hand text-base sm:text-lg px-3 py-1.5 rounded-xs shadow-md rotate-3">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 tape-strip -rotate-1" />
                I'M FINE ☺
              </div>

              {/* AM I ENOUGH? */}
              <div className="absolute top-28 right-8 bg-[#FFFDF9] text-[#B94732] border border-[#111D26]/15 font-hand text-sm sm:text-base px-2.5 py-1 rounded-xs shadow-sm -rotate-3">
                AM I ENOUGH?
              </div>

              {/* STILL HERE STILL TRYING */}
              <div className="absolute bottom-24 right-8 bg-[#AFC4D5] text-[#111D26] border border-[#9bb4c8] font-hand text-xs sm:text-sm px-3 py-1 rounded-xs shadow-sm rotate-2">
                STILL HERE, STILL TRYING
              </div>
            </div>

            {/* Bottom Dark Strip Caption */}
            <div className="bg-[#111D26] text-white px-5 py-3.5 flex items-center justify-between border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B94732] animate-pulse" />
                <span className="font-hand text-base sm:text-lg text-[#F1C8B7]">
                  Same Pressure. Different People.
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-white/60">
                8 Awareness Chapters Below ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Topic Navigation Cards Section */}
      <section className="space-y-6 pt-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#111D26]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B94732] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Chapters</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#111D26]">
              Choose a Pressure Point to Explore
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#111D26]/60 font-sans max-w-md">
            Click any chapter below to dive into the reality, silent struggles, and grounded solutions.
          </p>
        </div>

        {/* 8 Cards Grid (4 columns x 2 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOPICS.map((topic, index) => (
            <Link
              key={topic.id}
              to={topic.path}
              className="editorial-card group relative bg-white rounded-xl border border-[#111D26]/12 overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#111D26]/30 transition-all duration-300"
            >
              {/* Card Header & Badge */}
              <div className="p-4 pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-serif-display font-bold ${topic.cardBadgeColor}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-semibold text-[#111D26]/40 uppercase tracking-wider">
                    Chapter
                  </span>
                </div>

                <h3 className="font-serif-display font-bold text-lg text-[#111D26] leading-tight group-hover:text-[#B94732] transition-colors mb-1.5">
                  {topic.cardShortTitle}
                </h3>
                
                <p className="text-xs text-[#111D26]/70 leading-relaxed font-sans line-clamp-2">
                  {topic.cardSummary}
                </p>
              </div>

              {/* Card Image Snippet with Tape effect */}
              <div className="relative px-4 pb-4">
                <div className="relative aspect-16/10 rounded-lg overflow-hidden border border-[#111D26]/10 bg-[#111D26]/5">
                  <img
                    src={topic.mainImage}
                    alt={topic.mainImageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle tape on corner */}
                  <div className="absolute top-1 left-2 w-7 h-2.5 tape-strip rotate-6 pointer-events-none" />
                </div>

                {/* Card Action Arrow Footer */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#111D26]/8">
                  <span className="font-serif-display text-xs font-semibold text-[#111D26]/70 group-hover:text-[#B94732] transition-colors">
                    Explore Chapter
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#111D26]/5 group-hover:bg-[#B94732] flex items-center justify-center text-[#111D26] group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Quote & Campaign Mission Callout */}
      <section className="bg-[#FFFDF9] rounded-2xl border border-[#111D26]/12 p-8 sm:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle background quote mark */}
        <div className="absolute top-4 right-8 font-serif-display text-9xl text-[#111D26]/5 pointer-events-none select-none">
          “
        </div>

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="font-hand text-2xl sm:text-3xl text-[#B94732]">
            "You are not a test score. You are not an algorithm's output."
          </div>
          <p className="font-serif-display text-xl sm:text-2xl text-[#111D26] font-medium leading-relaxed">
            The pressure to appear flawless, continuously productive, and effortlessly ahead takes a silent toll on students. Real strength begins when we allow ourselves to be human.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/conversation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium hover:bg-[#20313f] transition-colors shadow-xs"
            >
              <span>Learn How to Start the Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#AFC4D5]" />
            </Link>
            <Link
              to="/beyond-grades"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent text-[#111D26] border border-[#111D26]/20 text-xs sm:text-sm font-medium hover:bg-[#111D26]/5 transition-colors"
            >
              <span>Reflections on Self-Worth</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
