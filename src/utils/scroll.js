export function scrollToBottom() {
  const container = document.getElementById("chat-messages");
  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth' 
  });
}