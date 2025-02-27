document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const flashlight = document.createElement("div");
  flashlight.id = "flashlight";
  body.appendChild(flashlight);

  let darkMode = false;

  document.addEventListener("mousemove", (event) => {
    if (darkMode) {
      flashlight.style.display = "block";
      flashlight.style.left = `${event.clientX - 75}px`;
      flashlight.style.top = `${event.clientY - 75}px`;
    }
  });

  // Toggle für Dark Mode
  document.getElementById("darkmode-toggle").addEventListener("click", () => {
    darkMode = !darkMode;
    body.classList.toggle("dark-mode", darkMode);
    flashlight.style.display = darkMode ? "block" : "none";
  });
});
