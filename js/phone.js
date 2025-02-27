import {
  getRandomInt,
  showNotification,
  generateRandomPhoneNumber,
} from "./utils.js";

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

document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");

  let intervalStarted = false;
  if (document.getElementById("submit-phone")) {
    const generatedPhoneButton = document.getElementById("generated-phone");
    const submitPhoneButton = document.getElementById("submit-phone");
    const changePhoneButton = document.getElementById("change-phone");

    function updatePhoneNumber() {
      generatedPhoneButton.textContent = generateRandomPhoneNumber();
    }
    updatePhoneNumber();
    // Event-Listener for phone submission
    submitPhoneButton.addEventListener("click", () => {
      showNotification("Handynummer erfolgreich eingetragen!");
      console.log("Got phone number...");
      window.location.href = "verify.html";
    });

    // Event-Listener for change phone number
    changePhoneButton.addEventListener("click", () => {
      updatePhoneNumber();
    });
  }

  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      showNotification("", true, randomAlertWhileRegistrationMessages);
    }, getRandomInt(3000, 5000));
  }
});
