document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");
  // Variablen für Buttons und Input-Felder
  const registrateButton = document.getElementById("registrate-button");
  const registrateSection = document.getElementById("registrate-section");

  // Event-Listener for registrate button
  registrateButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (validator.isEmail(email) && password) {
      // Show notification after registrate
      showNotification("Erfolgreich eingeloggt!");
      registrateSection.style.display = "none";
    }
  });

  function showNotification(message) {
    const notificationArea = document.getElementById("notification-area");
    notificationArea.textContent = message;
    notificationArea.style.display = "block";
    setTimeout(() => {
      notificationArea.style.display = "none";
    }, 5000); // Popup disappears after 5 seconds
  }

  setInterval(() => {
    showNotification(
      "Achtung! Deine Registrierung braucht ungewöhnlich lange!"
    );
  }, getRandomInt(5000, 8000)); // 5 till 8
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
