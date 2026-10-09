import { useEffect } from 'react';
import { EditorialPageLayout } from '../components/EditorialPageLayout';
import { TOPICS } from '../data/topics';

export const ConversationPage = () => {
  useEffect(() => {
    document.title = 'Break the Silence — PRESSURE POINTS';
    window.scrollTo(0, 0);
  }, []);

  const topic = TOPICS.find((t) => t.id === 'conversation')!;

  return <EditorialPageLayout topic={topic} />;
};
