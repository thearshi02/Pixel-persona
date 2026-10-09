import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Phone, LifeBuoy, ArrowUpRight, ArrowUp } from 'lucide-react';
import { TOPICS } from '../data/topics';
import { sounds } from '../utils/soundEffects';

export const Footer = () => {
  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-24 border-t border-[#111D26]/10 bg-[#E8E2D5]/40 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Verified Support Hotline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FFFDF9] border border-[#111D26]/15 rounded-xl p-6 sm:p-8 mb-12 shadow-xs"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B94732]/10 text-[#B94732] text-xs font-semibold">
                <LifeBuoy className="w-3.5 h-3.5" />
                <span>Immediate Student Support Resources</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#111D26]">
                You don't have to carry this alone.
              </h3>
              <p className="text-sm text-[#111D26]/75 max-w-2xl font-sans">
                If pressure or emotional distress feels overwhelming, free, confidential, and 24/7 support is always available from trained counselors.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:988"
                onClick={() => sounds.playPop()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B94732] text-white text-xs sm:text-sm font-medium hover:bg-[#a03d2a] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call or Text 988 (Lifeline)</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="sms:741741?body=HOME"
                onClick={() => sounds.playPop()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium hover:bg-[#20313f] transition-colors"
              >
                <span>Text HOME to 741741</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AFC4D5]" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links & Editorial Message */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <Link
              to="/"
              onClick={() => sounds.playPop()}
              className="flex flex-col items-start leading-none group"
            >
              <span className="font-serif-display font-black tracking-tight text-lg text-[#111D26] uppercase">
                PRESSURE
              </span>
              <span className="font-serif-display font-extrabold tracking-widest text-sm text-[#111D26] uppercase">
                POINTS
              </span>
              <span className="w-8 h-0.5 bg-[#B94732] rounded-full mt-1 group-hover:w-full transition-all duration-300" />
            </Link>
            <p className="text-xs text-[#111D26]/70 leading-relaxed font-sans pt-1">
              An editorial awareness campaign shining light on academic stress, peer comparison, and self-worth beyond grades.
            </p>
            <div className="font-hand text-lg text-[#B94732] pt-2">
              "Same Students. Different Stories. ♡"
            </div>
          </div>

          {/* Col 2: Awareness Chapters Part 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111D26]/50 mb-3">
              Explore Topics (01 - 04)
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {TOPICS.slice(0, 4).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
                    onClick={() => sounds.playPop()}
                    className="text-[#111D26]/80 hover:text-[#B94732] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-[#B94732] font-semibold">{topic.number.split(' ')[0]}</span>
                    <span>{topic.cardShortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Awareness Chapters Part 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111D26]/50 mb-3">
              Explore Topics (05 - 08)
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {TOPICS.slice(4, 8).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
                    onClick={() => sounds.playPop()}
                    className="text-[#111D26]/80 hover:text-[#B94732] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-[#B94732] font-semibold">{topic.number.split(' ')[0]}</span>
                    <span>{topic.cardShortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Action & Mission */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111D26]/50 mb-3">
              Take Action
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link
                  to="/conversation"
                  onClick={() => sounds.playPop()}
                  className="text-[#111D26]/80 hover:text-[#B94732] transition-colors block"
                >
                  How to Talk to Someone in Need
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  onClick={() => sounds.playPop()}
                  className="text-[#111D26]/80 hover:text-[#B94732] transition-colors block"
                >
                  Actionable Coping Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/beyond-grades"
                  onClick={() => sounds.playPop()}
                  className="text-[#111D26]/80 hover:text-[#B94732] transition-colors block"
                >
                  Reflections on Worth & Identity
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#111D26]/70 hover:text-[#B94732] transition-colors font-medium cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top of page</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Copyright & Heart */}
        <div className="pt-8 border-t border-[#111D26]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111D26]/60">
          <div>
            © {new Date().getFullYear()} PRESSURE POINTS • Awareness Initiative for Students Everywhere
          </div>
          <div className="flex items-center gap-1 font-hand text-base text-[#111D26]">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[#B94732] fill-[#B94732] inline" />
            <span>for every student fighting silent battles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
