// Warten auf DOM-Content
document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");
  // Variablen für Buttons und Input-Felder
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  const loginSection = document.getElementById("login-section");

  // Event-Listener für Login-Button
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      // Zeige Nachricht nach Login
      showNotification("Erfolgreich eingeloggt!");
      // Verstecke Login-Feld
      loginSection.style.display = "none";
      // Zeige Logout-Button
      logoutButton.style.display = "inline-block";
    }
  });

  // Event-Listener für Logout-Button
  logoutButton.addEventListener("click", () => {
    // Verstecke Logout-Button und zeige Login
    logoutButton.style.display = "none";
    loginSection.style.display = "block";
    // Zeige Nachricht nach Logout
    showNotification("Du hast dich abgemeldet!");
  });

  // Funktion für Popups
  function showNotification(message) {
    const notificationArea = document.getElementById("notification-area");
    notificationArea.textContent = message;
    notificationArea.style.display = "block";
    setTimeout(() => {
      notificationArea.style.display = "none";
    }, 3000); // Popup verschwindet nach 3 Sekunden
  }

  // Pop-up alle paar Minuten
  setInterval(() => {
    showNotification("Achtung! Deine Sitzung läuft bald ab!");
  }, getRandomInt(3000, 5000)); // Alle 3-5 Sekunden
});

// Hilfsfunktion für zufällige Intervalle
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
