const securityQuestions = [
  { question: "Was ist die Hauptstadt von Frankreich?", answer: "PARIS" },
  { question: "Wie heißt der größte Ozean?", answer: "PAZIFIK" },
  { question: "Welche Farbe hat eine Banane?", answer: "GELB" },
];

const questionDisplay = document.getElementById("security-question");
const inputDisplay = document.getElementById("input-display");
const fallingLettersContainer = document.getElementById(
  "falling-letters-container"
);
const nextButton = document.getElementById("next-button");

let currentQuestion =
  securityQuestions[Math.floor(Math.random() * securityQuestions.length)];
let collectedLetters = [];
let expectedAnswer = currentQuestion.answer.split(""); // Array aus Buchstaben

questionDisplay.textContent = currentQuestion.question;
inputDisplay.textContent = "_ ".repeat(expectedAnswer.length).trim();

// Funktion, um zufällige Buchstaben und Zahlen zu generieren
function getRandomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Funktion, um einen fallenden Buchstaben zu erstellen
function createFallingLetter() {
  const letter = document.createElement("span");
  letter.classList.add("falling-letter");

  // 50% Chance, dass der Buchstabe zur Antwort gehört
  let char =
    Math.random() < 0.5
      ? expectedAnswer[Math.floor(Math.random() * expectedAnswer.length)]
      : getRandomChar();

  letter.textContent = char;
  letter.style.left = Math.random() * 90 + "%";
  letter.style.animationDuration = Math.random() * 3 + 5 + "s";

  // Klick-Event zum Sammeln der Buchstaben
  letter.addEventListener("click", () => collectLetter(char, letter));

  fallingLettersContainer.appendChild(letter);

  // Entferne das Element nach Ablauf der Animation
  setTimeout(() => {
    if (letter.parentNode) {
      letter.remove();
    }
  }, 5000);
}

// Funktion, um die korrekten Buchstaben zu sammeln
function collectLetter(letter, element) {
  if (collectedLetters.length < expectedAnswer.length) {
    // Check, ob der nächste benötigte Buchstabe übereinstimmt
    if (expectedAnswer[collectedLetters.length] === letter) {
      collectedLetters.push(letter);
      updateInputDisplay();
      element.remove();

      // Falls die Antwort vollständig ist, aktiviere den Button
      if (collectedLetters.length === expectedAnswer.length) {
        nextButton.disabled = false;
      }
    }
  }
}

// Aktualisiert die Anzeige des "Eingabefelds"
function updateInputDisplay() {
  inputDisplay.textContent =
    collectedLetters.join(" ") +
    " _".repeat(expectedAnswer.length - collectedLetters.length).trim();
}

// Buchstaben in Intervallen erscheinen lassen
setInterval(createFallingLetter, 1000);

// "Weiter"-Button zur nächsten Seite
nextButton.addEventListener("click", () => {
  window.location.href = "captcha.html"; // Nächste Seite
});
