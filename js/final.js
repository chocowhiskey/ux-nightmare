import { popUpMessages, audio } from "./utils.js";

function startConfetti() {
  const confettiCanvas = document.getElementById("confetti");
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  let confettiPieces = Array.from({ length: 100 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 10 + 5,
    d: Math.random() * 5 + 2,
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.fill();
      p.y += p.d;
      if (p.y > window.innerHeight) p.y = 0;
    });
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();
}

function playRandomMusic() {
  // audio.loop = true;
  audio.play();
}

const finalButton = document.getElementById("final-button");
finalButton.addEventListener("mouseover", () => {
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerHeight - 50);

  finalButton.style.transition = "all 1s ease-in-out";
  finalButton.style.left = `${newX}px`;
  finalButton.style.top = `${newY}px`;
});

finalButton.addEventListener("click", () => {
  popUpMessages.forEach((message, index) => {
    setTimeout(() => {
      alert(message);
    }, index * 1000);
  });
});

// Start-Events
document.addEventListener("DOMContentLoaded", () => {
  startConfetti();
  playRandomMusic();
});
