import chatroomData from '../data/chatroom.json';

export const mockChatroomApi = (message, selectedPersonas) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = selectedPersonas.map(persona => ({
        sender: persona.name,
        content: chatroomData.personaResponses[persona.name],
        isUser: false,
        color: persona.color || '#1890ff',
      }));
      resolve(responses);
    }, 1000); // Simulate a 1-second delay
  });
};