import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const ComparisonPage = () => {
  useEffect(() => {
    document.title = 'Peer Pressure & Comparison — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'comparison')!;

  return <EditorialPageLayout topic={topic} />;
};
