import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TOPICS } from '../data/topics';
import type { TopicData } from '../data/topics';
import { KeyPointIcon } from './KeyPointIcon';
import { StickyNoteComponent } from './StickyNoteComponent';
import { ActionModal } from './ActionModal';
import type { ActionModalData } from './ActionModal';

interface EditorialPageLayoutProps {
  topic: TopicData;
}

export const EditorialPageLayout = ({ topic }: EditorialPageLayoutProps) => {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState<ActionModalData | null>(null);

  // Find previous and next topics for fluid chapter navigation
  const currentIndex = TOPICS.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < TOPICS.length - 1 ? TOPICS[currentIndex + 1] : null;

  const handleCtaClick = () => {
    if (topic.id === 'solutions') {
      setModalData({
        type: 'solutions-tips',
        title: 'Micro-Habits for Daily Relief',
        subtitle: 'Practical decompression strategies you can easily incorporate into any demanding study routine.',
      });
    } else if (topic.id === 'conversation') {
      setModalData({
        type: 'support-friend',
        title: 'How to Support a Friend in Distress',
        subtitle: 'Authentic ways to start a conversation without sounding judgmental or dismissive.',
      });
    } else if (topic.id === 'beyond-grades') {
      setModalData({
        type: 'beyond-grades',
        title: 'Your Worth Beyond Grades',
        subtitle: 'Grounding reminders to keep your perspective clear during stressful evaluations.',
      });
    } else {
      navigate(topic.ctaTarget);
    }
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Chapter Progress & Breadcrumb */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#111D26]/10 text-xs sm:text-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[#111D26]/70 hover:text-[#B94732] font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Topics</span>
        </Link>

        {/* Chapter counter */}
        <div className="flex items-center gap-3">
          <span className="font-serif-display font-bold text-sm tracking-widest text-[#B94732]">
            {topic.number}
          </span>
          <div className="hidden sm:flex items-center gap-1">
            {TOPICS.map((t, idx) => (
              <Link
                key={t.id}
                to={t.path}
                className={`w-5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-[#B94732] w-7' : 'bg-[#111D26]/15 hover:bg-[#111D26]/30'
                }`}
                title={`Chapter ${idx + 1}: ${t.cardShortTitle}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        {/* Left Editorial Text Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:pr-2">
          
          {/* Page indicator & Badge */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-serif-display font-semibold text-[#111D26]/60 tracking-wider">
              {topic.number}
            </span>
            <div className="h-[1px] w-12 bg-[#111D26]/20" />
            {topic.badgeLabel && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#111D26]/5 text-[#B94732] border border-[#B94732]/20">
                {topic.badgeLabel}
              </span>
            )}
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] text-[#111D26] tracking-tight">
              {topic.title}{' '}
              <span className="text-[#B94732] italic font-serif-display font-normal block sm:inline">
                {topic.titleHighlight}
              </span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-[#111D26]/75 leading-relaxed font-sans max-w-xl">
              {topic.subtitle}
            </p>
          </div>

          {/* Four Key Points Horizontal Grid */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111D26]/50 mb-3">
              Key Dimensions of this Experience
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {topic.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 bg-white/70 rounded-lg border border-[#111D26]/10 shadow-2xs hover:bg-white hover:border-[#111D26]/20 transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#F3F0E9] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                    <KeyPointIcon name={point.iconName} className="w-4 h-4 text-[#B94732]" />
                  </div>
                  <h4 className="font-serif-display font-bold text-sm text-[#111D26] leading-snug">
                    {point.title}
                  </h4>
                  {point.desc && (
                    <p className="text-[11px] text-[#111D26]/65 mt-1 line-clamp-2 leading-tight font-sans">
                      {point.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Quote Box */}
          <div className="relative p-5 bg-white/80 rounded-xl border border-[#111D26]/10 shadow-xs">
            <Quote className="w-7 h-7 text-[#B94732]/25 mb-2 -ml-1" />
            <blockquote className="font-serif-display italic text-[#111D26] text-base sm:text-lg leading-snug">
              "{topic.quote}"
            </blockquote>
            {topic.quoteAuthor && (
              <p className="text-xs text-[#111D26]/60 mt-2 font-sans font-medium">
                — {topic.quoteAuthor}
              </p>
            )}
          </div>

          {/* Secondary Candid Polaroid Photo with Tape & Handwritten Note */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative p-2 bg-white shadow-md border border-[#111D26]/10 rounded-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-200 shrink-0 max-w-[200px]">
              {/* Top tape piece */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 tape-strip rotate-2 pointer-events-none" />
              <img
                src={topic.secondaryImage}
                alt={topic.secondaryImageAlt}
                className="w-full h-28 object-cover rounded-2xs"
                loading="lazy"
              />
              <p className="font-hand text-center text-sm text-[#111D26] mt-1.5">
                {topic.secondaryCaption}
              </p>
            </div>

            <div className="text-xs text-[#111D26]/70 leading-relaxed font-sans">
              <span className="font-bold text-[#111D26] block mb-0.5">Perspective Check:</span>
              Everyone navigates student life at their own pace. What looks effortless from the outside is often hard-won beneath the surface.
            </div>
          </div>
        </div>

        {/* Right Asymmetrical Editorial Collage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Main Photo with Sticky Notes Overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#111D26]/15 bg-[#111D26]/5 group">
            
            {/* The Photograph */}
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden">
              <img
                src={topic.mainImage}
                alt={topic.mainImageAlt}
                className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Subtle vignette / paper grain gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Sticky Notes positioned on photograph */}
            <div className="absolute inset-0 pointer-events-none">
              {topic.stickyNotes.map((note, idx) => (
                <StickyNoteComponent key={idx} note={note} />
              ))}
            </div>

            {/* Bottom Torn Dark Strip with Radial Stat Dial & Primary CTA */}
            <div className="relative bg-[#111D26] text-white p-5 sm:p-6 border-t border-white/10">
              
              {/* Torn edge accent on top border */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                
                {/* Stat Gauge */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center shrink-0">
                    {/* Stat Circle Frame */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#B94732] flex items-center justify-center bg-[#111D26] shadow-inner">
                      <span className="font-serif-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {topic.statNumber}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-serif-display font-bold text-sm sm:text-base text-white leading-tight">
                      {topic.statLabel}
                    </p>
                    <p className="text-xs text-white/70 max-w-xs mt-0.5 font-sans leading-tight">
                      {topic.statSubtext}
                    </p>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    onClick={handleCtaClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#111D26] hover:bg-[#F3F0E9] font-serif-display font-bold text-sm shadow-md transition-all duration-200 active:scale-95 group/btn"
                  >
                    <span>{topic.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#B94732] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sequential Chapter Navigation Bottom Bar */}
          <div className="flex items-center justify-between pt-4 px-2">
            {prevTopic ? (
              <Link
                to={prevTopic.path}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#111D26]/70 hover:text-[#B94732] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev: {prevTopic.navLabel}</span>
              </Link>
            ) : (
              <div />
            )}

            <div className="text-center font-hand text-base text-[#111D26]/70">
              Awareness • Empathy • Self-Worth
            </div>

            {nextTopic ? (
              <Link
                to={nextTopic.path}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#111D26] hover:text-[#B94732] transition-colors"
              >
                <span>Next: {nextTopic.navLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#111D26] hover:text-[#B94732] transition-colors"
              >
                <span>Return to Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Action Modal */}
      <ActionModal data={modalData} onClose={() => setModalData(null)} />
    </div>
  );
};
