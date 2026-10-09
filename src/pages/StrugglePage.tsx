import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const StrugglePage = () => {
  useEffect(() => {
    document.title = 'The Invisible Struggle — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'struggle')!;

  return <EditorialPageLayout topic={topic} />;
};
