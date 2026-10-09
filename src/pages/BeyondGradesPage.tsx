import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const BeyondGradesPage = () => {
  useEffect(() => {
    document.title = 'Your Worth Beyond Grades — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'beyond-grades')!;

  return <EditorialPageLayout topic={topic} />;
};
