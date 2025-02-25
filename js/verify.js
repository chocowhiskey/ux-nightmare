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

function startNewQuestion() {
  currentQuestion =
    securityQuestions[Math.floor(Math.random() * securityQuestions.length)];
  // Array with letters
  expectedAnswer = currentQuestion.answer.split("");
  // Placeholder for hangman
  collectedLetters = new Array(expectedAnswer.length).fill("_");
  incorrectGuesses = 0;

  questionDisplay.textContent = currentQuestion.question;
  updateInputDisplay();
  updateHangman();
  fallingLettersContainer.innerHTML = ""; // Reset falling letters
}

function getRandomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

function createFallingLetter() {
  const letter = document.createElement("span");
  letter.classList.add("falling-letter");

  // 50% chance the letter belongs to answer
  let char =
    Math.random() < 0.5
      ? expectedAnswer[Math.floor(Math.random() * expectedAnswer.length)]
      : getRandomChar();

  letter.textContent = char;
  letter.style.left = Math.random() * 90 + "%";
  letter.style.animationDuration = Math.random() * 3 + 6 + "s";

  letter.addEventListener("click", () => collectLetter(char, letter));

  fallingLettersContainer.appendChild(letter);

  // Let letter disappear
  setTimeout(() => {
    if (letter.parentNode) {
      letter.remove();
    }
  }, 5000);
}

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

function updateHangman() {
  hangmanDisplay.textContent = `Hangman: ${"X".repeat(incorrectGuesses)}`;
}

// Update answer display
function updateInputDisplay() {
  inputDisplay.textContent = collectedLetters.join(" ");
}

// Let appear letters
setInterval(createFallingLetter, 1000);

nextButton.addEventListener("click", () => {
  window.location.href = "captcha.html"; // Nächste Seite
});

startNewQuestion();
