import { getRandomInt, showNotification } from "./utils.js";

const randomAlertWhileRegistrationMessages = [
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");

  const registrateButton = document.getElementById("registrate-button");
  const registrateSection = document.getElementById("registrate-section");
  let intervalStarted = false;
  let currentButtonSize = 100;
  let minButtonSize = 30;
  let maxButtonSize = 100;
  let moveCooldown = false;

  // Lets move the registration button whenever mouse comes close
  registrateButton.addEventListener("mouseover", (event) => {
    if (moveCooldown) return;
    moveCooldown = true;

    setTimeout(() => {
      moveCooldown = false;
    }, 1000);

    const buttonRect = registrateButton.getBoundingClientRect();
    const offsetX = Math.random() * 200 - 100;
    const offsetY = Math.random() * 200 - 100;

    let newX = buttonRect.left + offsetX;
    let newY = buttonRect.top + offsetY;

    newX = Math.max(
      10,
      Math.min(window.innerWidth - buttonRect.width - 10, newX)
    );
    newY = Math.max(
      10,
      Math.min(window.innerHeight - buttonRect.height - 10, newY)
    );

    registrateButton.style.position = "absolute"; // button becomes agile
    registrateButton.style.left = `${newX}px`;
    registrateButton.style.top = `${newY}px`;

    // Make button smaller each time it moves
    currentButtonSize -= 10;
    if (currentButtonSize < minButtonSize) {
      currentButtonSize = maxButtonSize;
    }
    registrateButton.style.transform = `scale(${currentButtonSize / 100})`;
  });

  // Event-Listener for registrate button
  registrateButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validator.isEmail(email)) {
      alert("⚠️ Du musst (d)eine Email eingeben!");
    } else if (!password) {
      alert("⚠️ Du musst ein Passwort eingeben!");
    }

    if (validator.isEmail(email) && password) {
      // Show notification after registrate
      showNotification("Erfolgreich eingeloggt!");
      console.log(
        "Successfully registered...\nProceed to phone number submission"
      );
      window.location.href = "phone.html";
    }
  });

  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      showNotification("", true, randomAlertWhileRegistrationMessages);
    }, getRandomInt(3000, 5000));
  }
});
