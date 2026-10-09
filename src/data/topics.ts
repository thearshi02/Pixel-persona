export interface KeyPoint {
  title: string;
  desc?: string;
  iconName: 'book' | 'users' | 'activity' | 'battery' | 'briefcase' | 'trending' | 'lightbulb' | 'compass' | 'smartphone' | 'award' | 'puzzle' | 'brain' | 'moon' | 'heart' | 'clock' | 'smile' | 'message' | 'shield' | 'footprints' | 'star' | 'sprout' | 'wrench';
}

export interface StickyNote {
  text: string;
  color: 'peach' | 'yellow' | 'sage' | 'blue' | 'cream' | 'terracotta';
  position: string; // Tailwind absolute position classes
  rotation: string; // Tailwind rotate class
}

export interface TopicData {
  id: string;
  path: string;
  number: string; // "01 / 08"
  navLabel: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  badgeLabel?: string;
  cardShortTitle: string;
  cardSummary: string;
  cardBadgeColor: string;
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  secondaryCaption: string;
  keyPoints: KeyPoint[];
  quote: string;
  quoteAuthor?: string;
  statNumber: string;
  statLabel: string;
  statSubtext: string;
  statColor?: string;
  statBorderColor?: string;
  ctaText: string;
  ctaTarget: string;
  stickyNotes: StickyNote[];
}

export const TOPICS: TopicData[] = [
  {
    id: 'reality',
    path: '/reality',
    number: '01 / 08',
    navLabel: 'Reality',
    title: 'The Reality of Student',
    titleHighlight: 'Life',
    subtitle: "It's not just books and exams. It's a phase of constant pressure, expectations, and self-doubt.",
    badgeLabel: "It's More Than Just Studying →",
    cardShortTitle: 'The Reality of Student Life',
    cardSummary: "It's more than just books and exams.",
    cardBadgeColor: 'bg-[#B94732] text-white',
    mainImage: '/images/reality.jpg',
    mainImageAlt: 'Student feeling overwhelmed at study desk with laptop and notes',
    secondaryImage: '/images/campus_friends.jpg',
    secondaryImageAlt: 'Students laughing and talking on university campus steps',
    secondaryCaption: 'Same Pressure. Different People. ♡',
    keyPoints: [
      { title: 'Endless Deadlines', iconName: 'book', desc: 'Continuous assignments leaving little breathing room.' },
      { title: 'High Expectations', iconName: 'users', desc: 'Balancing family, university, and personal standards.' },
      { title: 'Constant Comparison', iconName: 'activity', desc: 'Feeling measured against unseen benchmarks.' },
      { title: 'Mental Exhaustion', iconName: 'battery', desc: 'Waking up already feeling fatigued and behind.' },
    ],
    quote: 'Behind the organized notebooks and polite answers is often someone quietly trying to stay afloat.',
    statNumber: '7/10',
    statLabel: 'students feel overwhelmed',
    statSubtext: 'at some point in their college life.',
    ctaText: 'See How It Feels →',
    ctaTarget: '/academics',
    stickyNotes: [
      { text: 'Deadlines Everywhere', color: 'peach', position: 'top-6 left-6', rotation: '-rotate-3' },
      { text: 'What next?', color: 'cream', position: 'top-24 left-16', rotation: 'rotate-2' },
      { text: 'Am I doing enough?', color: 'cream', position: 'top-8 right-8', rotation: 'rotate-3' },
    ],
  },
  {
    id: 'academics',
    path: '/academics',
    number: '02 / 08',
    navLabel: 'Academics',
    title: 'Academic & Career',
    titleHighlight: 'Pressure',
    subtitle: "Exams, deadlines, placements, and the constant question — 'What next?'",
    badgeLabel: "It's More Than Just Marks →",
    cardShortTitle: 'Academic & Career Pressure',
    cardSummary: 'Deadlines, exams, placements and the fear of the future.',
    cardBadgeColor: 'bg-[#AFC4D5] text-[#111D26]',
    mainImage: '/images/academics.jpg',
    mainImageAlt: 'College student late at night studying engineering and mathematics',
    secondaryImage: '/images/campus_walk.jpg',
    secondaryImageAlt: 'Students walking on tree-lined university path',
    secondaryCaption: 'Everyone seems ahead...',
    keyPoints: [
      { title: 'Exams & Deadlines', iconName: 'book', desc: 'Pervasive cycles of evaluation and performance anxiety.' },
      { title: 'Career Uncertainty', iconName: 'trending', desc: 'Navigating internships, resumes, and career pathways.' },
      { title: 'High Expectations', iconName: 'lightbulb', desc: 'The burden of trying to be exceptional at everything.' },
      { title: 'Fear of Falling Behind', iconName: 'users', desc: 'The worry that one mistake ruins long-term plans.' },
    ],
    quote: "Sometimes it feels like no matter how much I do, it's still not enough.",
    statNumber: '68%',
    statLabel: 'of students feel anxious',
    statSubtext: 'about their future career and upcoming placements.',
    ctaText: 'See Real Stories →',
    ctaTarget: '/comparison',
    stickyNotes: [
      { text: 'Lectures ✓ Assignments ✓ Projects ✓ Internships? Exams? Placements?', color: 'cream', position: 'top-6 left-6', rotation: '-rotate-1' },
      { text: 'So much to do...\nSo little time...', color: 'cream', position: 'top-10 left-36', rotation: 'rotate-4' },
      { text: 'DISCIPLINE CREATES FREEDOM :)', color: 'peach', position: 'top-6 right-28', rotation: 'rotate-2' },
      { text: 'Placement?\nHigher Studies?\nWhat if I fail?', color: 'yellow', position: 'top-20 right-6', rotation: '-rotate-2' },
    ],
  },
  {
    id: 'comparison',
    path: '/comparison',
    number: '03 / 08',
    navLabel: 'Comparison',
    title: 'Peer Pressure &',
    titleHighlight: 'Comparison',
    subtitle: "When everyone seems to be ahead, it's easy to feel like you're falling behind.",
    badgeLabel: "It's Not Just You →",
    cardShortTitle: 'Peer Pressure & Comparison',
    cardSummary: 'When everyone seems ahead.',
    cardBadgeColor: 'bg-[#F1C8B7] text-[#111D26]',
    mainImage: '/images/comparison.jpg',
    mainImageAlt: 'Student looking at phone while classmates talk together in background',
    secondaryImage: '/images/campus_friends.jpg',
    secondaryImageAlt: 'Students talking on campus steps',
    secondaryCaption: 'Different timelines. Equal worth. ♡',
    keyPoints: [
      { title: 'Social Comparison', iconName: 'users', desc: 'Measuring personal progress against selected highlights.' },
      { title: 'Social Media', iconName: 'smartphone', desc: 'Constant exposure to curated accomplishments of others.' },
      { title: 'Feeling Left Behind', iconName: 'award', desc: 'Worrying that friends are moving faster or achieving more.' },
      { title: 'Pressure to Fit In', iconName: 'puzzle', desc: 'Adapting personality or goals just to feel accepted.' },
    ],
    quote: 'It feels like everyone else has it figured out except me.',
    statNumber: '62%',
    statLabel: 'of students feel pressure',
    statSubtext: 'due to daily peer and social comparison.',
    ctaText: 'It’s Not Just You →',
    ctaTarget: '/struggle',
    stickyNotes: [
      { text: 'Everyone is doing so much...', color: 'cream', position: 'top-6 left-8', rotation: '-rotate-2' },
      { text: 'Better Grades?', color: 'yellow', position: 'top-4 right-8', rotation: 'rotate-2' },
      { text: 'Cooler Life?', color: 'peach', position: 'top-20 right-6', rotation: '-rotate-3' },
      { text: 'More Opportunities?', color: 'cream', position: 'top-36 right-8', rotation: 'rotate-1' },
      { text: 'What about me?', color: 'cream', position: 'top-52 right-4', rotation: '-rotate-4' },
    ],
  },
  {
    id: 'struggle',
    path: '/struggle',
    number: '04 / 08',
    navLabel: 'Struggle',
    title: 'The Invisible',
    titleHighlight: 'Struggle',
    subtitle: 'A lot of students smile, attend classes, and stay active, but still struggle silently.',
    badgeLabel: "You're Not Alone →",
    cardShortTitle: 'The Invisible Struggle',
    cardSummary: "The thoughts we don't always share.",
    cardBadgeColor: 'bg-[#C9D8B9] text-[#111D26]',
    mainImage: '/images/struggle.jpg',
    mainImageAlt: 'Student looking thoughtful and reflective in quiet library',
    secondaryImage: '/images/campus_walk.jpg',
    secondaryImageAlt: 'Students on campus',
    secondaryCaption: 'Silent battles are still real battles.',
    keyPoints: [
      { title: 'Constant Overthinking', iconName: 'brain', desc: 'Replaying past mistakes and anticipating future failures.' },
      { title: 'Disturbed Sleep', iconName: 'moon', desc: 'Restless nights filled with racing thoughts and to-do lists.' },
      { title: 'Low Motivation', iconName: 'battery', desc: 'Struggling to find energy for things you usually enjoy.' },
      { title: 'Emotional Exhaustion', iconName: 'activity', desc: 'Depleted patience and persistent internal fatigue.' },
    ],
    quote: 'Sometimes the hardest battles are the ones no one sees.',
    statNumber: '58%',
    statLabel: 'feel mentally exhausted',
    statSubtext: 'during their ongoing academic journey.',
    ctaText: 'Understand the Impact →',
    ctaTarget: '/impact',
    stickyNotes: [
      { text: 'Overthinking 24/7', color: 'cream', position: 'top-6 left-12', rotation: '-rotate-3' },
      { text: 'So many expectations...', color: 'peach', position: 'top-24 left-6', rotation: 'rotate-2' },
      { text: "I'm fine :)", color: 'cream', position: 'top-14 left-36', rotation: '-rotate-1' },
      { text: 'Can I do this?', color: 'cream', position: 'top-6 right-8', rotation: 'rotate-3' },
      { text: 'What if I fail?', color: 'yellow', position: 'top-24 right-6', rotation: '-rotate-2' },
    ],
  },
  {
    id: 'impact',
    path: '/impact',
    number: '05 / 08',
    navLabel: 'Impact',
    title: 'The Impact of',
    titleHighlight: 'Constant Pressure',
    subtitle: 'When pressure continues for a long time, it can affect more than just your grades.',
    badgeLabel: 'Know the Impact →',
    cardShortTitle: 'The Impact of Pressure',
    cardSummary: 'How stress can affect everyday life.',
    cardBadgeColor: 'bg-[#B94732] text-white',
    mainImage: '/images/impact.jpg',
    mainImageAlt: 'Exhausted student resting head on desk late at night',
    secondaryImage: '/images/student_lawn.jpg',
    secondaryImageAlt: 'Quiet campus corner',
    secondaryCaption: 'Stress touches mind, body, and spirit.',
    keyPoints: [
      { title: 'Affects Focus', iconName: 'brain', desc: 'Difficulty concentrating on lectures and reading material.' },
      { title: 'Poor Sleep', iconName: 'moon', desc: 'Disrupted circadian rhythm leading to daytime fatigue.' },
      { title: 'Low Energy', iconName: 'battery', desc: 'Physical tiredness even after resting over the weekend.' },
      { title: 'Strains Relationships', iconName: 'users', desc: 'Irritability and withdrawal from close friends and family.' },
    ],
    quote: "It doesn't just affect what you do, it also affects how you feel.",
    statNumber: '64%',
    statLabel: 'of students report regular stress',
    statSubtext: 'impacting their sleep, focus, or relationships.',
    ctaText: 'Explore Practical Solutions →',
    ctaTarget: '/solutions',
    stickyNotes: [
      { text: 'Lack of Focus', color: 'cream', position: 'top-6 left-12', rotation: '-rotate-2' },
      { text: 'Always Tired', color: 'peach', position: 'top-24 left-16', rotation: 'rotate-2' },
      { text: 'Irritated Easily', color: 'cream', position: 'top-6 right-16', rotation: 'rotate-2' },
      { text: 'No Motivation', color: 'yellow', position: 'top-20 right-6', rotation: '-rotate-3' },
    ],
  },
  {
    id: 'solutions',
    path: '/solutions',
    number: '06 / 08',
    navLabel: 'Solutions',
    title: 'Practical Solutions for a',
    titleHighlight: 'Healthier You',
    subtitle: "Small changes can make a big difference. It's about progress, not perfection.",
    badgeLabel: 'Start Small →',
    cardShortTitle: 'Practical Solutions',
    cardSummary: 'Small steps toward a healthier routine.',
    cardBadgeColor: 'bg-[#C9D8B9] text-[#111D26]',
    mainImage: '/images/solutions.jpg',
    mainImageAlt: 'Student peacefully writing in journal beside sunny window with plants',
    secondaryImage: '/images/student_lawn.jpg',
    secondaryImageAlt: 'Student relaxing on university lawn',
    secondaryCaption: 'Gentle routines rebuild strength. ♡',
    keyPoints: [
      { title: 'Manage Your Time', iconName: 'clock', desc: 'Break large tasks into smaller, manageable steps.' },
      { title: 'Take Regular Breaks', iconName: 'sprout', desc: 'Give yourself permission to pause, rest, and recharge.' },
      { title: 'Be Kind to Yourself', iconName: 'heart', desc: 'Acknowledge your efforts rather than dwelling on flaws.' },
      { title: 'Talk to Someone', iconName: 'message', desc: 'Reach out to a trusted peer, mentor, or counselor.' },
    ],
    quote: "You don't have to have it all figured out today. Progress is still progress. ♡",
    statNumber: '1 Step',
    statLabel: 'at a time leads to',
    statSubtext: 'healthier habits and renewed clarity tomorrow.',
    statColor: 'text-[#2D5A27]',
    statBorderColor: 'border-[#C9D8B9]',
    ctaText: 'Explore More Tips →',
    ctaTarget: '/conversation',
    stickyNotes: [
      { text: 'Manage Your Time', color: 'peach', position: 'top-6 left-12', rotation: '-rotate-2' },
      { text: 'Take Breaks', color: 'sage', position: 'top-18 left-36', rotation: 'rotate-2' },
      { text: 'Be Kind to Yourself', color: 'cream', position: 'top-6 right-12', rotation: 'rotate-3' },
      { text: 'Ask for Support', color: 'blue', position: 'top-20 right-4', rotation: '-rotate-3' },
      { text: 'Good Progress :)', color: 'peach', position: 'bottom-20 right-6', rotation: 'rotate-1' },
    ],
  },
  {
    id: 'conversation',
    path: '/conversation',
    number: '07 / 08',
    navLabel: 'Talk',
    title: 'Break the',
    titleHighlight: 'Silence',
    subtitle: 'A simple conversation can make someone’s day — or even change their life.',
    badgeLabel: 'Start a Conversation →',
    cardShortTitle: 'Break the Silence',
    cardSummary: 'Listen, support, and start a conversation.',
    cardBadgeColor: 'bg-[#AFC4D5] text-[#111D26]',
    mainImage: '/images/conversation.jpg',
    mainImageAlt: 'College friends having an honest, supportive conversation outdoors',
    secondaryImage: '/images/campus_walk.jpg',
    secondaryImageAlt: 'Friends walking together',
    secondaryCaption: 'Listening is the greatest gift.',
    keyPoints: [
      { title: 'Open Conversations', iconName: 'message', desc: 'Create opportunities to share authentic feelings without fear.' },
      { title: 'Support Each Other', iconName: 'heart', desc: 'Notice when peers are withdrawing and check in gently.' },
      { title: 'Create a Safer Space', iconName: 'shield', desc: 'Listen without jumping to quick fixes or dismissal.' },
      { title: 'Small Steps Count', iconName: 'footprints', desc: 'Even a 5-minute coffee check-in eases isolation.' },
    ],
    quote: 'Sometimes all we need is someone who simply listens.',
    statNumber: '72%',
    statLabel: 'of students feel better',
    statSubtext: 'after talking openly to a friend or someone they trust.',
    ctaText: 'Tips to Support a Friend →',
    ctaTarget: '/beyond-grades',
    stickyNotes: [
      { text: 'Listen without judgement', color: 'peach', position: 'top-6 left-12', rotation: '-rotate-2' },
      { text: 'Check on your friends :)', color: 'sage', position: 'top-6 right-28', rotation: 'rotate-2' },
      { text: "It's okay to not be okay ♡", color: 'blue', position: 'top-6 right-6', rotation: '-rotate-1' },
    ],
  },
  {
    id: 'beyond-grades',
    path: '/beyond-grades',
    number: '08 / 08',
    navLabel: 'Beyond Grades',
    title: 'Your Worth',
    titleHighlight: 'Beyond Grades',
    subtitle: "You are more than your marks, more than a rank, and more than a future job. You are a work in progress — and that's enough.",
    badgeLabel: 'You Are Enough →',
    cardShortTitle: 'Your Worth Beyond Grades',
    cardSummary: 'You are more than your results.',
    cardBadgeColor: 'bg-[#F1C8B7] text-[#111D26]',
    mainImage: '/images/beyond_grades.jpg',
    mainImageAlt: 'Students sitting on rooftop terrace at golden sunset looking forward',
    secondaryImage: '/images/student_lawn.jpg',
    secondaryImageAlt: 'Student relaxing on lawn',
    secondaryCaption: 'Your story is still unfolding. ♡',
    keyPoints: [
      { title: 'Discover Your Interests', iconName: 'star', desc: 'Nurture passions that exist outside academic evaluation.' },
      { title: 'Celebrate Small Wins', iconName: 'sprout', desc: 'Honor effort, resilience, and personal curiosity.' },
      { title: 'Build Skills Beyond Academics', iconName: 'wrench', desc: 'Empathy, creativity, and self-awareness outlast exams.' },
      { title: 'Create the Life You Value', iconName: 'heart', desc: 'Define your definition of fulfillment on your own terms.' },
    ],
    quote: "Your journey is unique. It's okay to take time, explore, and figure things out.",
    statNumber: '81%',
    statLabel: 'feel more confident',
    statSubtext: 'when they focus on their personal growth and genuine interests.',
    ctaText: 'You Are Enough →',
    ctaTarget: '/',
    stickyNotes: [
      { text: 'You are more capable than you think', color: 'peach', position: 'top-6 left-10', rotation: '-rotate-2' },
      { text: 'Progress takes time ♡', color: 'sage', position: 'top-6 left-52', rotation: 'rotate-2' },
      { text: 'Your story is still unfolding :)', color: 'yellow', position: 'top-6 right-24', rotation: '-rotate-1' },
      { text: 'You belong here ♡', color: 'blue', position: 'top-8 right-6', rotation: 'rotate-3' },
      { text: 'Good People, Brighter Futures', color: 'cream', position: 'top-44 right-44', rotation: '-rotate-2' },
    ],
  },
];
