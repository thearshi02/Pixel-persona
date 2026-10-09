import {
  BookOpen,
  Users,
  Activity,
  BatteryCharging,
  TrendingUp,
  Lightbulb,
  Smartphone,
  Award,
  Puzzle,
  Brain,
  Moon,
  Heart,
  Clock,
  Smile,
  MessageCircle,
  ShieldCheck,
  Footprints,
  Star,
  Sprout,
  Wrench,
  Briefcase,
  Compass,
} from 'lucide-react';

interface KeyPointIconProps {
  name: string;
  className?: string;
}

export const KeyPointIcon = ({ name, className = 'w-5 h-5 text-[#B94732]' }: KeyPointIconProps) => {
  switch (name) {
    case 'book':
      return <BookOpen className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'activity':
      return <Activity className={className} />;
    case 'battery':
      return <BatteryCharging className={className} />;
    case 'trending':
      return <TrendingUp className={className} />;
    case 'lightbulb':
      return <Lightbulb className={className} />;
    case 'smartphone':
      return <Smartphone className={className} />;
    case 'award':
      return <Award className={className} />;
    case 'puzzle':
      return <Puzzle className={className} />;
    case 'brain':
      return <Brain className={className} />;
    case 'moon':
      return <Moon className={className} />;
    case 'heart':
      return <Heart className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'smile':
      return <Smile className={className} />;
    case 'message':
      return <MessageCircle className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'footprints':
      return <Footprints className={className} />;
    case 'star':
      return <Star className={className} />;
    case 'sprout':
      return <Sprout className={className} />;
    case 'wrench':
      return <Wrench className={className} />;
    case 'briefcase':
      return <Briefcase className={className} />;
    case 'compass':
      return <Compass className={className} />;
    default:
      return <Lightbulb className={className} />;
  }
};
