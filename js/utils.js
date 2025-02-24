export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function showNotification(message, randomize = true, messagePool = []) {
  const notificationArea = document.getElementById("notification-area");

  if (!notificationArea) return;

  if (randomize && messagePool.length > 0) {
    const randomIndex = getRandomInt(0, messagePool.length - 1);
    message = messagePool[randomIndex];
  }
  if (!message) return;

  notificationArea.textContent = message;
  notificationArea.style.display = "block";
  setTimeout(() => {
    notificationArea.style.display = "none";
  }, 4000);
}
