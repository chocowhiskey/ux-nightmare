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

export function generateRandomPhoneNumber() {
  const countryCode = "+49";
  const carrierPrefix = "15";

  const randomNumber = Math.floor(Math.random() * 100000000)
    .toString()
    .padStart(8, "0");

  // Format: "+49 15xx xxxx xxxx"
  const formattedNumber = `${countryCode} ${carrierPrefix}${randomNumber.slice(
    0,
    2
  )} ${randomNumber.slice(2, 6)} ${randomNumber.slice(6)}`;

  return formattedNumber;
}

export const randomAlertWhileRegistrationMessages = [
  "Ready for the worst form of your life?",
  "Why are you submitting the form? You still have time!",
  "Remember, you haven't accepted anything yet! Or have you?",
  "Are you sure you spelled your name correctly? I'm not so sure.",
  "Why do you even want to register? Rethink your decision!",
  "Click the button, but no one tells you what happens next!",
  "Warning! Your password is too secure for us.",
  "Have you considered that you might regret this later?",
  "Remember, you have to confirm this 17 times.",
  "This is the moment where you could change your life... or not.",
  "Do the terms and conditions really matter to you? Probably not.",
  "Hey, why are you even registering? This decision will haunt you forever!",
  "One click for progress, two for regression.",
  "You've clicked this far, it would be a shame to stop now.",
  "In a few minutes, you'll wonder why you took this step. Have fun!",
];

export const securityQuestions = [
  { question: "What is the capital of France?", answer: "PARIS" },
  { question: "What is the name of the biggest ocean?", answer: "PAZIFIC" },
  { question: "What color is a banana?", answer: "YELLOW" },
];

export const popUpMessages = [
  "Wait… Are you REALLY sure?",
  "What if this was all a mistake?",
  "This button has never been clicked before. Are you the chosen one?",
  "ERROR 404: Exit Not Found",
  "Clicking this button will delete the internet. Proceed?",
  "Wait, I lost my script. What was supposed to happen next?",
  "Are you trying to escape? Ha! Nice try.",
  "Every click fuels my power. Keep going.",
  "Warning: Clicking may cause unexpected side effects…",
  "Okay, okay, you win... or do you? 👀",
];

export const audio = new Audio(
  "https://www.myinstants.com/media/sounds/airhorn.mp3"
);
