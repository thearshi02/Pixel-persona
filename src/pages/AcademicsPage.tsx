import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const AcademicsPage = () => {
  useEffect(() => {
    document.title = 'Academic & Career Pressure — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'academics')!;

  return <EditorialPageLayout topic={topic} />;
};
