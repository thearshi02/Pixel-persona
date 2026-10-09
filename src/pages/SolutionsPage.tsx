import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const SolutionsPage = () => {
  useEffect(() => {
    document.title = 'Practical Solutions for a Healthier You — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'solutions')!;

  return <EditorialPageLayout topic={topic} />;
};
