import liveDiscussionData from '../data/live_discussion.json';

export const mockApiRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ personas: liveDiscussionData.personaTypes });
    }, 1000); // Simulate a 1-second delay
  });
};