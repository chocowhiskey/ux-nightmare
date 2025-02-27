import { securityQuestions } from "./utils.js";

const questionDisplay = document.getElementById("security-question");
const inputDisplay = document.getElementById("input-display");
const fallingLettersContainer = document.getElementById(
  "falling-letters-container"
);
const nextButton = document.getElementById("next-button");
const hangmanDisplay = document.getElementById("hangman-display");

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
    alert("Too many wrong guesses! Time for a new question.");
    startNewQuestion();
    return;
  }

  if (!collectedLetters.includes("_")) {
    nextButton.disabled = false;
  }
}

function updateHangman() {
  hangmanDisplay.textContent = `Errors: ${"X".repeat(incorrectGuesses)}`;
}

// Update answer display
function updateInputDisplay() {
  inputDisplay.textContent = collectedLetters.join(" ");
}

// Let appear letters
setInterval(createFallingLetter, 1000);

nextButton.addEventListener("click", () => {
  window.location.href = "final.html";
});

startNewQuestion();

let timeLeft = 60;
const countdownElement = document.getElementById("countdown-timer");
const countdownBar = document.getElementById("countdown-bar");

function startCountdown() {
  const timer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = `Time left: ${timeLeft}s`;
    countdownBar.style.width = (timeLeft / 60) * 100 + "%";

    // Color change
    if (timeLeft < 20) {
      countdownBar.style.backgroundColor = "red";
    } else if (timeLeft < 40) {
      countdownBar.style.backgroundColor = "orange";
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      showNextSecurityQuestion();
    }
  }, 1000);
}

// Starts countdown on loading site
document.addEventListener("DOMContentLoaded", startCountdown);
