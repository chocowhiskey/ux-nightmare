import { getRandomInt, showNotification } from "./utils.js";

const randomAlertWhileRegistrationMessages = [
  "Bereit für das schlimmste Formular deines Lebens?",
  "Warum schickst du das Formular ab? Du hast noch Zeit!",
  "Denk daran, du hast noch nichts akzeptiert! Oder doch?",
  "Bist du sicher, dass du deinen Namen richtig geschrieben hast? Ich bin mir nicht sicher.",
  "Warum willst du überhaupt registrieren? Überdenke deine Entscheidung!",
  "Klick auf den Button, aber niemand sagt dir, was passiert!",
  "Achtung! Dein Passwort ist zu sicher für uns.",
  "Schon überlegt, ob du es später noch bereust?",
  "Denk dran, du musst 17 mal bestätigen, was du hier tust.",
  "Hier ist der Moment, in dem du dein Leben ändern könntest... oder auch nicht.",
  "Sind dir die AGB wirklich wichtig? Wahrscheinlich nicht.",
  "Hey, warum registrierst du dich überhaupt? Diese Entscheidung wird dich für immer verfolgen!",
  "Ein Klick für den Fortschritt, zwei für den Rückschritt.",
  "Du hast dich so weit durchgeklickt, es wäre schade, jetzt aufzuhören.",
  "Du wirst dich in ein paar Minuten fragen, warum du diesen Schritt gemacht hast. Viel Spaß!",
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

    if (!email || !password) {
      alert("⚠️ Du musst eine Email und ein Passwort eingeben!");
    }

    if (email && password) {
      // Show notification after registrate
      showNotification("Erfolgreich eingeloggt!");
      console.log(
        "Successfully registered...\nProceed to phone number submission"
      );
      setTimeout(() => {
        window.location.href = "phone.html";
      }, 500);
    }
  });

  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      showNotification("", true, randomAlertWhileRegistrationMessages);
    }, getRandomInt(3000, 5000));
  }
});
