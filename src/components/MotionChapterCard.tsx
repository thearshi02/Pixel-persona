import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { TopicData } from '../data/topics';
import { sounds } from '../utils/soundEffects';

interface MotionChapterCardProps {
  topic: TopicData;
  index: number;
}

export const MotionChapterCard = ({ topic, index }: MotionChapterCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion coordinates for 3D tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    damping: 20,
    stiffness: 250,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
    damping: 20,
    stiffness: 250,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sounds.playPop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1200,
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="editorial-card group relative h-full bg-white rounded-xl border border-[#111D26]/12 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xl hover:border-[#111D26]/30 transition-shadow duration-300"
      >
        <Link to={topic.path} className="flex flex-col h-full justify-between">
          {/* Card Header & Badge */}
          <div className="p-4 pb-3 relative z-10">
            <div className="flex items-center justify-between mb-2">
              <motion.span
                whileHover={{ rotate: 12, scale: 1.1 }}
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-serif-display font-bold shadow-2xs ${topic.cardBadgeColor}`}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
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

          {/* Card Image Snippet with Tape Effect */}
          <div className="relative px-4 pb-4">
            <div className="relative aspect-16/10 rounded-lg overflow-hidden border border-[#111D26]/10 bg-[#111D26]/5">
              <motion.img
                src={topic.mainImage}
                alt={topic.mainImageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                animate={{ scale: isHovered ? 1.06 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              {/* Subtle tape on corner */}
              <motion.div
                className="absolute top-1 left-2 w-7 h-2.5 tape-strip rotate-6 pointer-events-none"
                animate={{ rotate: isHovered ? [6, 2, 6] : 6 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Card Action Arrow Footer */}
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#111D26]/8">
              <span className="font-serif-display text-xs font-semibold text-[#111D26]/70 group-hover:text-[#B94732] transition-colors">
                Explore Chapter
              </span>
              <motion.div
                className="w-6 h-6 rounded-full bg-[#111D26]/5 group-hover:bg-[#B94732] flex items-center justify-center text-[#111D26] group-hover:text-white transition-colors"
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>
        </Link>

        {/* Dynamic Light Reflection Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent"
            style={{
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
