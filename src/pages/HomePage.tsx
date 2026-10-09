import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { TOPICS } from '../data/topics';
import { InfiniteMarquee } from '../components/InfiniteMarquee';
import { MotionChapterCard } from '../components/MotionChapterCard';
import { PressureReliefWidget } from '../components/PressureReliefWidget';
import { CanvaScrapbookBoard } from '../components/CanvaScrapbookBoard';
import { sounds } from '../utils/soundEffects';

export const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax tilt coordinates for hero collage
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    damping: 25,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    damping: 25,
    stiffness: 200,
  });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  useEffect(() => {
    document.title = 'PRESSURE POINTS — Behind Every "I\'m Fine" Is a Story';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
        {/* Left Hero Editorial Text (6 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Subtle badge / editorial kicker */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111D26]/5 text-[#B94732] border border-[#B94732]/20 text-xs font-semibold tracking-wide"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#B94732]"
            />
            <span>Student-Life Awareness Campaign</span>
          </motion.div>

          {/* Main Headline */}
          <div className="relative">
            {/* Doodle star / scribble accent */}
            <motion.span
              animate={{ rotate: [12, -8, 12], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-7 -left-3 font-hand text-3xl text-[#B94732] select-none"
            >
              ✦
            </motion.span>
            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-[#111D26] tracking-tight">
              Behind Every <br />
              <span className="text-[#B94732] italic font-serif-display font-medium relative inline-block">
                “I'm Fine”
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#B94732]/50 overflow-visible"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,8 Q50,0 100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                  />
                </svg>
              </span>{' '}
              <br />
              Is a Story.
            </h1>
          </div>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="space-y-3 max-w-xl text-[#111D26]/80 text-base sm:text-lg leading-relaxed font-sans"
          >
            <p>
              It's not just homework and exams. It's late nights, high expectations, comparison, self-doubt, and still having to smile and say “I'm fine.”
            </p>
            <p className="text-sm sm:text-base font-medium text-[#111D26]/70">
              Explore real struggles, understand the pressure, and discover ways to cope.
            </p>
          </motion.div>

          {/* CTAs & Handwritten Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
          >
            <Link
              to="/reality"
              onClick={() => sounds.playPop()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111D26] text-white font-serif-display font-bold text-base hover:bg-[#1f3242] shadow-md transition-all duration-200 active:scale-95 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111D26]"
            >
              <span>Explore the Reality</span>
              <ArrowRight className="w-4 h-4 text-[#AFC4D5] group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-hand text-lg sm:text-xl text-[#B94732] select-none pt-1 sm:pt-0"
            >
              <span>Same Students. Different Stories.</span>
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              >
                <Heart className="w-4 h-4 text-[#B94732] fill-[#B94732]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Hero Collage Visual with 3D Mouse Parallax (6 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#111D26]/15 bg-[#111D26]/5 group"
            >
              {/* Main Student Photograph */}
              <div className="relative w-full aspect-16/10 sm:aspect-16/11 overflow-hidden">
                <motion.img
                  src="/images/hero.jpg"
                  alt="Student studying late at desk surrounded by books and laptop"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Interactive Draggable Sticky Notes & Annotations */}
              <div className="absolute inset-0 pointer-events-none">
                {/* EXAMS sticky note */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute top-6 left-6 pointer-events-auto bg-[#FFFDF9] text-[#111D26] border border-[#111D26]/15 font-hand text-base sm:text-lg px-3 py-1.5 rounded-xs shadow-md -rotate-6 select-none cursor-grab"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 tape-strip rotate-2 pointer-events-none" />
                  EXAMS
                </motion.div>

                {/* WHAT NEXT? */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute top-20 left-10 pointer-events-auto bg-[#F1C8B7] text-[#111D26] border border-[#e4b29f] font-hand text-sm sm:text-base px-2.5 py-1 rounded-xs shadow-sm rotate-4 select-none cursor-grab"
                >
                  WHAT NEXT? ↗
                </motion.div>

                {/* EXPECTATIONS */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute bottom-28 left-8 pointer-events-auto bg-[#F9ECC2] text-[#111D26] border border-[#ebd496] font-hand text-sm sm:text-base px-3 py-1 rounded-xs shadow-sm -rotate-2 select-none cursor-grab"
                >
                  EXPECTATIONS
                </motion.div>

                {/* I'M FINE :) */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute top-8 right-16 pointer-events-auto bg-[#F9ECC2] text-[#111D26] border border-[#ebd496] font-hand text-base sm:text-lg px-3 py-1.5 rounded-xs shadow-md rotate-3 select-none cursor-grab"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 tape-strip -rotate-1 pointer-events-none" />
                  I'M FINE ☺
                </motion.div>

                {/* AM I ENOUGH? */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute top-28 right-8 pointer-events-auto bg-[#FFFDF9] text-[#B94732] border border-[#111D26]/15 font-hand text-sm sm:text-base px-2.5 py-1 rounded-xs shadow-sm -rotate-3 select-none cursor-grab"
                >
                  AM I ENOUGH?
                </motion.div>

                {/* STILL HERE STILL TRYING */}
                <motion.div
                  drag
                  dragElastic={0.25}
                  onDragStart={() => sounds.playPaper()}
                  onDragEnd={() => sounds.playPop()}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 40, cursor: 'grab' }}
                  whileTap={{ scale: 1.05, cursor: 'grabbing' }}
                  className="absolute bottom-24 right-8 pointer-events-auto bg-[#AFC4D5] text-[#111D26] border border-[#9bb4c8] font-hand text-xs sm:text-sm px-3 py-1 rounded-xs shadow-sm rotate-2 select-none cursor-grab"
                >
                  STILL HERE, STILL TRYING
                </motion.div>
              </div>

              {/* Bottom Dark Strip Caption */}
              <div className="bg-[#111D26] text-white px-5 py-3.5 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B94732] animate-pulse" />
                  <span className="font-hand text-base sm:text-lg text-[#F1C8B7]">
                    Tip: Drag the sticky notes around!
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-white/60">
                  8 Awareness Chapters Below ↓
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Kinetic Infinite Marquee Stream */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="-mx-4 sm:-mx-6 lg:-mx-8"
      >
        <InfiniteMarquee speed={32} />
      </motion.div>

      {/* Eight Topic Navigation Cards Section */}
      <section className="space-y-8 pt-2">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#111D26]/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B94732] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Chapters</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111D26]">
              Choose a Pressure Point to Explore
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#111D26]/60 font-sans max-w-md">
            Click any chapter below to dive into the reality, silent struggles, and grounded solutions.
          </p>
        </motion.div>

        {/* 8 Cards Grid with 3D Kinetic Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TOPICS.map((topic, index) => (
            <MotionChapterCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </section>

      {/* Pinterest & Canva Aesthetic Scrapbook Moodboard */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
      >
        <CanvaScrapbookBoard />
      </motion.section>

      {/* Interactive Motion Lab: Mindful Decompression & Stress Release */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <PressureReliefWidget />
      </motion.section>

      {/* Editorial Quote & Campaign Mission Callout */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#FFFDF9] rounded-2xl border border-[#111D26]/12 p-8 sm:p-12 shadow-xs relative overflow-hidden"
      >
        {/* Subtle background quote mark */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-4 right-8 font-serif-display text-9xl text-[#111D26]/5 pointer-events-none select-none"
        >
          “
        </motion.div>

        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="font-hand text-2xl sm:text-3xl text-[#B94732]">
            "You are not a test score. You are not an algorithm's output."
          </div>
          <p className="font-serif-display text-xl sm:text-2xl lg:text-3xl text-[#111D26] font-medium leading-relaxed">
            The pressure to appear flawless, continuously productive, and effortlessly ahead takes a silent toll on students. Real strength begins when we allow ourselves to be human.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/conversation"
              onClick={() => sounds.playPop()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium hover:bg-[#20313f] transition-all shadow-md active:scale-95 group"
            >
              <span>Learn How to Start the Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#AFC4D5] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/beyond-grades"
              onClick={() => sounds.playPop()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[#111D26] border border-[#111D26]/20 text-xs sm:text-sm font-medium hover:bg-[#111D26]/5 transition-all active:scale-95"
            >
              <span>Reflections on Self-Worth</span>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
