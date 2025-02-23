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
  // Variablen für Buttons und Input-Felder
  const registrateButton = document.getElementById("registrate-button");
  const registrateSection = document.getElementById("registrate-section");

  // Event-Listener for registrate button
  registrateButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      // Show notification after registrate
      showNotification("Erfolgreich eingeloggt!");
      setTimeout(() => {
        window.location.href = "phone.html";
      }, 500);
    }
  });

  // Event-Listener for phone submission
  submitPhoneButton.addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone-number").value;

    if (phoneNumber) {
      showNotification("Handynummer erfolgreich eingetragen!");
      // Hier kannst du die Handynummer weiterverarbeiten, z. B. an einen Server senden
    }
  });

  function showNotification(message, randomize = true, messagePool = []) {
    const notificationArea = document.getElementById("notification-area");

    if (randomize && messagePool.length > 0) {
      // Zufällige Auswahl einer Nachricht aus dem Pool
      const randomIndex = getRandomInt(0, messagePool.length - 1);
      message = messagePool[randomIndex];
    }

    notificationArea.textContent = message;
    notificationArea.style.display = "block";
    setTimeout(() => {
      notificationArea.style.display = "none";
    }, 4000); // Popup disappears after 5 seconds
  }

  setInterval(() => {
    showNotification("", true, randomAlertWhileRegistrationMessages);
  }, getRandomInt(3000, 5000)); // 5 till 8
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
