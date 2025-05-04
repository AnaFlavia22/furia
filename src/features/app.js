import { processMessage } from './chatbot.js';
import { createUserMessage, createBotMessage } from '../components/ChatMessage.js';

const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chat-messages');

// Função para mensagem de boas-vindas
function sendWelcomeMessage() {
  createBotMessage('👋 Olá, Furioso(a)! Bem-vindo(a) ao chat oficial da FURIA! Pergunte sobre nossos próximos jogos, jogadores ou eventos. Vamos nessa? 🔥', chatMessages);
}
  
// Envia a mensagem assim que a página carregar
window.addEventListener('DOMContentLoaded', sendWelcomeMessage);

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  
  createUserMessage(message, chatMessages);
  userInput.value = '';

  processMessage(message, chatMessages);
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});