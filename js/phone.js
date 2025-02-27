import { showNotification, generateRandomPhoneNumber } from "./utils.js";

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
      showNotification("Successfully entered phone number!");
      console.log("Got phone number...");
      window.location.href = "verify.html";
    });

    // Event-Listener for change phone number
    changePhoneButton.addEventListener("click", () => {
      updatePhoneNumber();
    });
  }
});
