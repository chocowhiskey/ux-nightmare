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
const hangmanDisplay = document.getElementById("hangman-display"); // Hangman Bild

let currentQuestion;
let expectedAnswer;
let collectedLetters;
let incorrectGuesses;

// Funktion, um eine neue Frage zu starten
function startNewQuestion() {
  currentQuestion =
    securityQuestions[Math.floor(Math.random() * securityQuestions.length)];
  expectedAnswer = currentQuestion.answer.split(""); // Array mit Buchstaben
  collectedLetters = new Array(expectedAnswer.length).fill("_"); // Platzhalter für Hangman
  incorrectGuesses = 0;

  questionDisplay.textContent = currentQuestion.question;
  updateInputDisplay();
  updateHangman();
  fallingLettersContainer.innerHTML = ""; // Reset falling letters
}

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
  letter.style.animationDuration = Math.random() * 3 + 6 + "s";

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

// Funktion, um Buchstaben zu sammeln
function collectLetter(letter, element) {
  let found = false;

  expectedAnswer.forEach((expected, index) => {
    if (expected === letter && collectedLetters[index] === "_") {
      collectedLetters[index] = letter;
      found = true;
    }
  });

  if (!found) {
    incorrectGuesses++;
    updateHangman();
  }

  updateInputDisplay();
  element.remove();

  if (incorrectGuesses >= 6) {
    alert("Zu viele falsche Versuche! Neue Frage.");
    startNewQuestion();
    return;
  }

  if (!collectedLetters.includes("_")) {
    nextButton.disabled = false;
  }
}

// Aktualisiert die Hangman-Zeichnung
function updateHangman() {
  hangmanDisplay.textContent = `Hangman: ${"X".repeat(incorrectGuesses)}`;
}

// Aktualisiert die Anzeige des "Eingabefelds"
function updateInputDisplay() {
  inputDisplay.textContent = collectedLetters.join(" ");
}

// Buchstaben in Intervallen erscheinen lassen
setInterval(createFallingLetter, 1000);

// "Weiter"-Button zur nächsten Seite
nextButton.addEventListener("click", () => {
  window.location.href = "captcha.html"; // Nächste Seite
});

// Erste Frage starten
startNewQuestion();
