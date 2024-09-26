import chatroomData from '../data/chatroom.json';

export const mockChatroomApi = async (message, selectedPersonas) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return responses for selected personas
  return selectedPersonas.map(persona => ({
    sender: persona.name,
    color: persona.color
  }));
};