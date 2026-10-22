
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");
const gate = document.getElementById("gate");
const birthday = document.getElementById("birthday");

// Change this to your chosen password.
const correctPassword = "change-this";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === correctPassword) {
    gate.hidden = true;
    birthday.hidden = false;
    errorMessage.textContent = "";
    updateCountdown();
  } else {
    errorMessage.textContent = "Not quite! Try your special password again 🌼";
  }
});

function updateCountdown() {
  const birthdayDate = new Date("2026-12-30T00:00:00+05:30");
  const countdown = document.getElementById("countdown");

  function render() {
    const now = new Date();
    const difference = birthdayDate.getTime() - now.getTime();

    if (difference <= 0) {
      countdown.textContent = "Happy Birthday, Ashru! 🌼✨";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdown.textContent =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds to go 💙`;
  }

  render();
  if (window.countdownTimer) clearInterval(window.countdownTimer);
  window.countdownTimer = setInterval(render, 1000);
}
