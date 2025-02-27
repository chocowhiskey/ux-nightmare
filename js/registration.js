import {
  getRandomInt,
  showNotification,
  randomAlertWhileRegistrationMessages,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");

  const registrateButton = document.getElementById("registrate-button");

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
      showBootstrapAlert("⚠️ You must enter an email!");
    } else if (!password) {
      showBootstrapAlert("⚠️ You must enter a password!");
    }

    if (validator.isEmail(email) && password) {
      // Show notification after registrate
      showNotification("Succesfully registered!");
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

function showBootstrapAlert(message, type = "danger") {
  const alertDiv = document.getElementById("custom-alert");
  alertDiv.classList.remove("d-none");
  alertDiv.classList.add(`alert-${type}`);
  alertDiv.innerHTML = `
        <strong>Attention!</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
}

// Beispiel: Alert nach 2 Sekunden auslösen
setTimeout(() => {
  showBootstrapAlert("Dies ist eine Bootstrap-Warnung!", "warning");
}, 2000);
