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
  const audio = new Audio(
    "https://www.myinstants.com/media/sounds/airhorn.mp3"
  );
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

const popUpMessages = [
  "Wait… Are you REALLY sure?",
  "What if this was all a mistake?",
  "This button has never been clicked before. Are you the chosen one?",
  "ERROR 404: Exit Not Found",
  "Clicking this button will delete the internet. Proceed?",
  "Wait, I lost my script. What was supposed to happen next?",
  "Are you trying to escape? Ha! Nice try.",
  "Every click fuels my power. Keep going.",
  "Warning: Clicking may cause unexpected side effects…",
  "Okay, okay, you win... or do you? 👀",
];

finalButton.addEventListener("click", () => {
  popUpMessages.forEach((message, index) => {
    setTimeout(() => {
      alert(message);
    }, index * 1000); // Zeigt jedes Pop-up mit 1 Sekunde Verzögerung an
  });
});

// Start-Events
document.addEventListener("DOMContentLoaded", () => {
  startConfetti();
  playRandomMusic();
});
