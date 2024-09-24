import liveDiscussionData from '../data/live_discussion.json';
import reportData from '../data/report.json';

export const mockApiRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        personas: liveDiscussionData.personaTypes,
        report: reportData.report
      });
    }, 1000); // Simulate a 1-second delay
  });
};