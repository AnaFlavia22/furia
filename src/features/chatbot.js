import { responses, getResponse } from './responses.js';
import { createBotMessage } from '../components/ChatMessage.js';
import { delay } from '../utils/delay.js';
import { scrollToBottom } from '../utils/scroll.js';

export async function processMessage(userMessage, chatContainer) {
  const reply = getResponse(userMessage);  // Usa a função que mapeia e sorteia
  await delay(500); // Simula pensando
  createBotMessage(reply, chatContainer);
  scrollToBottom();
}
