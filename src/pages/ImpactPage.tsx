import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const ImpactPage = () => {
  useEffect(() => {
    document.title = 'The Impact of Constant Pressure — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'impact')!;

  return <EditorialPageLayout topic={topic} />;
};
