import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sounds } from '../utils/soundEffects';

export interface ActionModalData {
  type: 'support-friend' | 'solutions-tips' | 'beyond-grades' | 'student-story';
  title: string;
  subtitle: string;
}

interface ActionModalProps {
  data: ActionModalData | null;
  onClose: () => void;
}

export const ActionModal = ({ data, onClose }: ActionModalProps) => {
  return (
    <AnimatePresence>
      {data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="fixed inset-0 bg-[#111D26]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#F3F0E9] rounded-2xl shadow-2xl border border-[#111D26]/15 overflow-hidden max-h-[90vh] flex flex-col z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#111D26]/10 bg-white/80">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B94732]">
                  Interactive Campaign Toolkit
                </span>
                <h3 className="font-serif-display font-bold text-xl sm:text-2xl text-[#111D26]">
                  {data.title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  sounds.playPop();
                  onClose();
                }}
                className="p-1.5 rounded-full text-[#111D26]/60 hover:text-[#111D26] hover:bg-[#111D26]/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-sm text-[#111D26]/80 leading-relaxed font-sans">
                {data.subtitle}
              </p>

              {data.type === 'support-friend' && (
                <div className="space-y-4">
                  <h4 className="font-serif-display font-bold text-base text-[#111D26] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#B94732]" />
                    Gentle Conversation Starters
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      {
                        phrase: "“You’ve seemed a little stressed or quiet lately. Want to talk, or just hang out without pressure?”",
                        note: "Gives them space to speak or simply exist together without demands.",
                      },
                      {
                        phrase: "“I’m here to listen if you need someone. No judgment, no quick fixes, just listening.”",
                        note: "Removes fear of unsolicited advice or toxic positivity.",
                      },
                      {
                        phrase: "“Would it help if we figured out the next small step together, or tackled a study session side-by-side?”",
                        note: "Breaks paralysis into tangible, supportive companionship.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-white/90 rounded-lg border border-[#111D26]/10 shadow-xs">
                        <p className="font-serif-display italic text-[#111D26] text-sm mb-1">{item.phrase}</p>
                        <p className="text-xs text-[#111D26]/65">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-[#AFC4D5]/25 rounded-lg border border-[#AFC4D5]/60 text-xs text-[#111D26] space-y-1.5">
                    <p className="font-bold">Key Principle: Listen Without Judgment</p>
                    <p className="text-[#111D26]/80">
                      Resist the urge to say "at least..." or minimize their experience. If they express feelings of being unable to cope, gently suggest speaking with a university counseling center or trusted counselor together.
                    </p>
                  </div>
                </div>
              )}

              {data.type === 'solutions-tips' && (
                <div className="space-y-4">
                  <h4 className="font-serif-display font-bold text-base text-[#111D26] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B94732]" />
                    Micro-Habits for Academic Decompression
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "The 25/5 Pomodoro Anchor",
                        desc: "Study in 25-minute sprints with an intentional 5-minute offline stretch. Avoid studying while fatigued.",
                      },
                      {
                        title: "5-4-3-2-1 Sensory Reset",
                        desc: "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 slow breath when panic arises.",
                      },
                      {
                        title: "Write the 'Done' List",
                        desc: "Instead of staring at unfinished tasks, write down 3 small efforts you made today, even opening the book.",
                      },
                      {
                        title: "Digital Bedtime Boundary",
                        desc: "Place your phone across the room 30 minutes before sleep to stop midnight grade checking.",
                      },
                    ].map((habit, idx) => (
                      <div key={idx} className="p-3.5 bg-white/90 rounded-lg border border-[#111D26]/10 shadow-xs">
                        <h5 className="font-bold text-xs text-[#111D26] mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A27]" />
                          {habit.title}
                        </h5>
                        <p className="text-xs text-[#111D26]/70">{habit.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-[#C9D8B9]/30 rounded-lg border border-[#C9D8B9] text-xs text-[#111D26]">
                    <p className="font-bold font-serif-display text-sm mb-0.5">Remember</p>
                    <p className="text-[#111D26]/80 font-hand text-base">
                      "Progress is not linear. Having a slow day does not undo your dedication." ♡
                    </p>
                  </div>
                </div>
              )}

              {data.type === 'beyond-grades' && (
                <div className="space-y-4">
                  <h4 className="font-serif-display font-bold text-base text-[#111D26] flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#B94732]" />
                    Truths To Ground Yourself In
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      "A test score measures your familiarity with a specific test on a specific day — never your human intelligence, empathy, creativity, or worth.",
                      "Your peers' polished LinkedIn updates and curated social media highlights don't depict their late nights, anxieties, and private doubts.",
                      "Careers are long, winding landscapes. What feels like a missed deadline or low mark today is rarely a closed door in the story of your life.",
                      "Taking rest when you are tired is a fundamental necessity, not a reward you must struggle to earn.",
                    ].map((affirmation, idx) => (
                      <div key={idx} className="p-3 bg-white/80 rounded-lg border-l-3 border-[#B94732] shadow-xs text-xs text-[#111D26]/85">
                        {affirmation}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-[#F1C8B7]/30 rounded-lg border border-[#F1C8B7] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs text-[#111D26]">Need to talk right now?</p>
                      <p className="text-[11px] text-[#111D26]/70">Explore our Talk chapter to start a conversation.</p>
                    </div>
                    <Link
                      to="/conversation"
                      onClick={() => {
                        sounds.playPop();
                        onClose();
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-[#111D26] text-white text-xs font-medium hover:bg-[#20313f] transition-colors"
                    >
                      Go to Talk →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 bg-[#E8E2D5]/40 border-t border-[#111D26]/10 flex items-center justify-between">
              <span className="font-hand text-base text-[#B94732]">You are more than your grades.</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  sounds.playPop();
                  onClose();
                }}
                className="px-4 py-1.5 rounded-full bg-[#111D26] text-white text-xs font-medium hover:bg-[#20313f] transition-colors"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
