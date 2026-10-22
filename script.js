
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");
const gate = document.getElementById("gate");
const birthday = document.getElementById("birthday");

const correctPassword = "Ashrik";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value.trim() === correctPassword) {
    gate.hidden = true;
    birthday.hidden = false;
    updateCountdown();
  } else {
    errorMessage.textContent = "Incorrect password. Try again 🌼";
  }
});

function updateCountdown() {
  const birthdayDate = new Date("2026-12-30T00:00:00+05:30");
  const countdown = document.getElementById("countdown");

  function render() {
    const difference = birthdayDate.getTime() - Date.now();

    if (difference <= 0) {
      countdown.textContent = "Happy Birthday, Ashru! 🌼✨";
      clearInterval(window.countdownTimer);
      return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference / 3600000) % 24);
    const minutes = Math.floor((difference / 60000) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdown.textContent =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds to go 💙`;
  }

  render();
  clearInterval(window.countdownTimer);
  window.countdownTimer = setInterval(render, 1000);
}
