export function createUserMessage(message, chatContainer) {
  const messageElement = document.createElement('div');
  messageElement.className = 'chat-message user-message';
  messageElement.innerText = message;
  chatContainer.appendChild(messageElement);
}
  
export function createBotMessage(message, chatContainer) {
  const messageElement = document.createElement('div');
  messageElement.className = 'chat-message bot-message';
  messageElement.innerText = message;
  chatContainer.appendChild(messageElement);
}
