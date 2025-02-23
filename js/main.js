document.addEventListener("DOMContentLoaded", () => {
  console.log("event listener started...");
  // Variablen für Buttons und Input-Felder
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  const loginSection = document.getElementById("login-section");

  // Event-Listener for login button
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      // Show notification after login
      showNotification("Erfolgreich eingeloggt!");
      loginSection.style.display = "none";
      logoutButton.style.display = "inline-block";
    }
  });

  // Event-Listener for logout button
  logoutButton.addEventListener("click", () => {
    logoutButton.style.display = "none";
    loginSection.style.display = "block";
    showNotification("Erfolgreich ausgeloggt!");
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
    showNotification("Achtung! Dein Login braucht ungewöhnlich lange!");
  }, getRandomInt(5000, 8000)); // 5 till 8 seconds
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
