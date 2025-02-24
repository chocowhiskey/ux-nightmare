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

  let intervalStarted = false;

  if (document.getElementById("registrate-button")) {
    const registrateButton = document.getElementById("registrate-button");
    const registrateSection = document.getElementById("registrate-section");
    // Event-Listener for registrate button
    registrateButton.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

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
  }

  if (!intervalStarted) {
    intervalStarted = true;
    setInterval(() => {
      showNotification("", true, randomAlertWhileRegistrationMessages);
    }, getRandomInt(3000, 5000));
  }
});
