import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Trash2, Sparkles, Volume2, VolumeX, Heart, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

export const PressureReliefWidget = () => {
  const [activeTab, setActiveTab] = useState<'breathe' | 'release'>('breathe');
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [stressText, setStressText] = useState('');
  const [isDissolving, setIsDissolving] = useState(false);
  const [releasedMessage, setReleasedMessage] = useState('');
  const [soundOn, setSoundOn] = useState(sounds.isEnabled());

  // Breathing cycle logic: 4s inhale, 4s hold, 4s exhale
  useEffect(() => {
    if (!isBreathing) return;

    let timer: ReturnType<typeof setTimeout>;
    const runCycle = () => {
      setBreathPhase('Inhale');
      sounds.playPaper();

      timer = setTimeout(() => {
        setBreathPhase('Hold');
        timer = setTimeout(() => {
          setBreathPhase('Exhale');
          sounds.playChime();
          timer = setTimeout(() => {
            runCycle();
          }, 4000);
        }, 4000);
      }, 4000);
    };

    runCycle();

    return () => clearTimeout(timer);
  }, [isBreathing]);

  const handleToggleSound = () => {
    const nextState = sounds.toggle();
    setSoundOn(nextState);
  };

  const handleDissolveStress = () => {
    if (!stressText.trim()) return;

    setIsDissolving(true);
    sounds.playPaper();

    setTimeout(() => {
      // Trigger joyful release confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#B94732', '#AFC4D5', '#F1C8B7', '#F9ECC2', '#C9D8B9'],
      });
      sounds.playChime();
      setIsDissolving(false);
      setReleasedMessage(stressText);
      setStressText('');
    }, 1200);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#FFFDF9] to-[#F3F0E9] rounded-2xl border border-[#111D26]/12 p-6 sm:p-8 shadow-sm overflow-hidden">
      {/* Background Decorative Kinetic Blobs */}
      <motion.div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#AFC4D5]/20 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F1C8B7]/30 blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header with Switcher & Sound Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#111D26]/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B94732] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Motion Lab</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#111D26]">
            Decompress & Reset Your Mind
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-full border border-[#111D26]/15 hover:bg-[#111D26]/5 text-[#111D26]/80 transition-colors"
            title={soundOn ? 'Mute motion sound cues' : 'Enable tactile motion sound cues'}
            aria-label="Toggle sound cues"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#B94732]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mode Tabs */}
          <div className="inline-flex p-1 bg-[#111D26]/5 rounded-full border border-[#111D26]/10">
            <button
              onClick={() => {
                setActiveTab('breathe');
                sounds.playPop();
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'breathe'
                  ? 'bg-[#111D26] text-white shadow-2xs'
                  : 'text-[#111D26]/70 hover:text-[#111D26]'
              }`}
            >
              Box Breathing
            </button>
            <button
              onClick={() => {
                setActiveTab('release');
                sounds.playPop();
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'release'
                  ? 'bg-[#111D26] text-white shadow-2xs'
                  : 'text-[#111D26]/70 hover:text-[#111D26]'
              }`}
            >
              Vent & Dissolve
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative z-10 min-h-[260px] flex items-center justify-center">
        {activeTab === 'breathe' ? (
          <div className="flex flex-col items-center justify-center text-center space-y-6 w-full max-w-md mx-auto py-2">
            {/* Morphing Kinetic Breathing Circle */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              {/* Outer Pulsing Wave Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#B94732]/30 pointer-events-none"
                animate={
                  isBreathing
                    ? {
                        scale: breathPhase === 'Inhale' ? 1.25 : breathPhase === 'Hold' ? 1.25 : 0.85,
                        rotate: 360,
                        opacity: breathPhase === 'Inhale' ? 0.8 : 0.3,
                      }
                    : { scale: 1, rotate: 0, opacity: 0.3 }
                }
                transition={{ duration: 4, ease: 'easeInOut', repeat: isBreathing ? Infinity : 0 }}
              />

              {/* Middle Soft Glow Circle */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#AFC4D5]/40 to-[#F1C8B7]/40 blur-md pointer-events-none"
                animate={
                  isBreathing
                    ? {
                        scale: breathPhase === 'Inhale' ? 1.15 : breathPhase === 'Hold' ? 1.15 : 0.8,
                      }
                    : { scale: 1 }
                }
                transition={{ duration: 4, ease: 'easeInOut' }}
              />

              {/* Main Core Circle */}
              <motion.div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#111D26] text-white flex flex-col items-center justify-center shadow-lg border border-white/20 select-none cursor-pointer"
                animate={
                  isBreathing
                    ? {
                        scale: breathPhase === 'Inhale' ? 1.2 : breathPhase === 'Hold' ? 1.2 : 0.85,
                        backgroundColor: breathPhase === 'Inhale' ? '#B94732' : breathPhase === 'Hold' ? '#1f3242' : '#111D26',
                      }
                    : { scale: 1 }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 4, ease: 'easeInOut' }}
                onClick={() => {
                  setIsBreathing(!isBreathing);
                  sounds.playPop();
                }}
              >
                <Wind className="w-5 h-5 mb-1 opacity-80" />
                <span className="font-serif-display font-bold text-sm sm:text-base">
                  {isBreathing ? breathPhase : 'Start'}
                </span>
                <span className="text-[10px] opacity-60 font-sans">
                  {isBreathing ? '4 seconds' : 'Tap to begin'}
                </span>
              </motion.div>
            </div>

            <p className="text-xs sm:text-sm text-[#111D26]/70 max-w-sm font-sans leading-relaxed">
              {isBreathing
                ? 'Follow the circle. Allow your shoulders to drop, relax your jaw, and let tension fade.'
                : 'Take 60 seconds to reset your nervous system. 4s inhale • 4s hold • 4s exhale.'}
            </p>
          </div>
        ) : (
          /* Vent & Dissolve Stress */
          <div className="w-full max-w-lg mx-auto space-y-4">
            <p className="text-xs sm:text-sm text-[#111D26]/75 font-sans">
              Type whatever is stressing you out right now—a looming deadline, fear of failure, or high expectations.
              Then hit <span className="font-semibold text-[#B94732]">Dissolve</span> to let it go.
            </p>

            <div className="relative">
              <textarea
                value={stressText}
                onChange={(e) => setStressText(e.target.value)}
                placeholder="e.g., I'm overwhelmed by the upcoming midterms and terrified of disappointing my parents..."
                rows={3}
                disabled={isDissolving}
                className="w-full p-3.5 bg-white rounded-xl border border-[#111D26]/15 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#B94732]/30 focus:border-[#B94732] shadow-2xs resize-none disabled:opacity-50"
              />

              {isDissolving && (
                <motion.div
                  className="absolute inset-0 bg-white/90 backdrop-blur-xs rounded-xl flex items-center justify-center gap-2 text-[#B94732] font-serif-display font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  >
                    <RefreshCw className="w-5 h-5" />
                  </motion.div>
                  <span>Dissolving pressure...</span>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleDissolveStress}
                disabled={!stressText.trim() || isDissolving}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B94732] text-white font-serif-display font-bold text-xs sm:text-sm shadow-md hover:bg-[#a33b27] transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 group"
              >
                <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Dissolve This Pressure</span>
              </button>

              <span className="text-[11px] text-[#111D26]/50 font-hand text-base">
                Nothing typed is saved anywhere.
              </span>
            </div>

            <AnimatePresence>
              {releasedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 bg-[#C9D8B9]/30 border border-[#C9D8B9] rounded-xl flex items-start gap-3 mt-3"
                >
                  <Heart className="w-4 h-4 text-[#4f6e3c] shrink-0 mt-0.5 fill-[#C9D8B9]" />
                  <div className="text-xs text-[#202322] leading-snug">
                    <span className="font-bold block text-[#364d27] mb-0.5">Pressure Released.</span>
                    You've acknowledged that thought. Remember: your worth isn't defined by a single exam, grade, or day.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};
