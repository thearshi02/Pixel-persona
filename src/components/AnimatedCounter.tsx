import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  label?: string;
  subtext?: string;
  borderColor?: string;
  textColor?: string;
}

export const AnimatedCounter = ({
  value,
  label,
  subtext,
  borderColor = '#B94732',
  textColor = '#ffffff',
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  // Extract numeric portion if applicable (e.g. 85 from "85%")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const isPercentage = value.includes('%');
  const isCustomRatio = value.includes('in');

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = targetNumber / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayNumber(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  const percentageValue = isPercentage ? targetNumber : 75;
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isInView
    ? circumference - (circumference * percentageValue) / 100
    : circumference;

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="relative flex items-center justify-center shrink-0 w-20 h-20">
        {/* Animated Circular Gauge */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          {/* Background circle track */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="4"
          />
          {/* Animated active circle */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={borderColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>

        {/* Center Display Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif-display font-extrabold text-xl sm:text-2xl tracking-tight"
            style={{ color: textColor }}
          >
            {isCustomRatio
              ? value
              : isPercentage
              ? `${displayNumber}%`
              : displayNumber || value}
          </span>
        </div>
      </div>

      {(label || subtext) && (
        <div>
          {label && (
            <p className="font-serif-display font-bold text-sm sm:text-base text-white leading-tight">
              {label}
            </p>
          )}
          {subtext && (
            <p className="text-xs text-white/70 max-w-xs mt-0.5 font-sans leading-tight">
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
