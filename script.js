
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");
const gate = document.getElementById("gate");
const birthday = document.getElementById("birthday");

const correctPassword = "ashrik";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value.trim() === correctPassword) {
    gate.hidden = true;
    birthday.hidden = false;
    errorMessage.textContent = "";
    updateAge();
  } else {
    errorMessage.textContent = "Incorrect password. Try again 🌼";
  }
});

function updateAge() {
  const birthDate = new Date("2005-12-30T00:00:00+05:30");
  const display = document.getElementById("countdown");

  function render() {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();

    if (now.getDate() < birthDate.getDate()) months--;

    if (months < 0) {
      years--;
      months += 12;
    }

    const anniversary = new Date(birthDate);
    anniversary.setFullYear(birthDate.getFullYear() + years);
    anniversary.setMonth(birthDate.getMonth() + months);

    let remaining = Math.floor((now - anniversary) / 1000);
    const days = Math.floor(remaining / 86400);
    remaining %= 86400;
    const hours = Math.floor(remaining / 3600);
    remaining %= 3600;
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    display.textContent =
      `${years} years, ${months} months, ${days} days, ` +
      `${hours} hours, ${minutes} minutes, ${seconds} seconds 💙`;
  }

  render();
  if (window.countdownTimer) clearInterval(window.countdownTimer);
  window.countdownTimer = setInterval(render, 1000);
}
