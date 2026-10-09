import { Link } from 'react-router-dom';
import { Heart, Phone, LifeBuoy, ArrowUpRight } from 'lucide-react';
import { TOPICS } from '../data/topics';

export const Footer = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-[#111D26]/10 bg-[#E8E2D5]/40 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Verified Support Hotline Banner */}
        <div className="bg-[#FFFDF9] border border-[#111D26]/15 rounded-xl p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B94732]/10 text-[#B94732] text-xs font-semibold">
                <LifeBuoy className="w-3.5 h-3.5" />
                <span>Immediate Student Support Resources</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#111D26]">
                You don't have to carry this alone.
              </h3>
              <p className="text-sm text-[#111D26]/75 max-w-2xl">
                If pressure or emotional distress feels overwhelming, free, confidential, and 24/7 support is always available from trained counselors.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:988"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B94732] text-white text-xs sm:text-sm font-medium hover:bg-[#a03d2a] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call or Text 988 (Lifeline)</span>
              </a>
              <a
                href="sms:741741?body=HOME"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111D26] text-white text-xs sm:text-sm font-medium hover:bg-[#20313f] transition-colors"
              >
                <span>Text HOME to 741741</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AFC4D5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Editorial Message */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex flex-col items-start leading-none group">
              <span className="font-serif-display font-black tracking-tight text-lg text-[#111D26] uppercase">
                PRESSURE
              </span>
              <span className="font-serif-display font-extrabold tracking-widest text-sm text-[#111D26] uppercase">
                POINTS
              </span>
              <span className="w-8 h-0.5 bg-[#B94732] rounded-full mt-1" />
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
            <ul className="space-y-2 text-xs">
              {TOPICS.slice(0, 4).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
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
            <ul className="space-y-2 text-xs">
              {TOPICS.slice(4, 8).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
                    className="text-[#111D26]/80 hover:text-[#B94732] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-[#B94732] font-semibold">{topic.number.split(' ')[0]}</span>
                    <span>{topic.cardShortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campaign Motto & Compassion */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111D26]/50">
              Community Reminder
            </h4>
            <div className="p-4 rounded-lg bg-white/60 border border-[#111D26]/10 text-xs text-[#111D26]/80 space-y-2">
              <p className="font-serif-display font-medium text-sm text-[#111D26]">
                Check on your friends. Be kinder to yourself. Ask for help when you need it.
              </p>
              <p className="text-[11px] text-[#111D26]/60">
                Created to foster empathy, education, and mutual encouragement across campuses.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#111D26]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#111D26]/60">
          <div>
            © {new Date().getFullYear()} PRESSURE POINTS Campaign. An open educational & awareness project.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed with empathy for students everywhere</span>
            <Heart className="w-3 h-3 text-[#B94732] fill-[#B94732]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
