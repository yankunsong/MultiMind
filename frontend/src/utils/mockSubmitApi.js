import PersonaData from '../data/personas.json';
import reportData from '../data/report.json';
import improvementsData from '../data/improvements_report.json';

export const mockApiRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        personas: PersonaData.personaTypes,
        report: reportData.report,
        improvementReport: improvementsData,
      });
    }, 2000); // Simulate a 2-second delay
  });
};