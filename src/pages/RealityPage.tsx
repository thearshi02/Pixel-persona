import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const RealityPage = () => {
  useEffect(() => {
    document.title = 'The Reality of Student Life — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'reality')!;

  return <EditorialPageLayout topic={topic} />;
};
