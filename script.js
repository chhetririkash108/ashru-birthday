
function updateCountdown() {
  const birthDate = new Date("2005-12-30T00:00:00+05:30");
  const display = document.getElementById("countdown");

  function render() {
    const now = new Date();

    if (now < birthDate) {
      display.textContent = "Your special day is coming! 🌼";
      return;
    }

    let cursor = new Date(birthDate);
    let years = 0;
    let months = 0;

    while (true) {
      const next = new Date(cursor);
      next.setFullYear(next.getFullYear() + 1);
      if (next > now) break;
      cursor = next;
      years++;
    }

    while (true) {
      const next = new Date(cursor);
      next.setMonth(next.getMonth() + 1);
      if (next > now) break;
      cursor = next;
      months++;
    }

    let remaining = Math.floor((now - cursor) / 1000);

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

  if (window.countdownTimer) {
    clearInterval(window.countdownTimer);
  }

  window.countdownTimer = setInterval(render, 1000);
}
