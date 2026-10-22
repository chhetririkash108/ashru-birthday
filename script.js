/*
 * EDIT YOUR BIRTHDAY WEBSITE HERE
 * The birthday date uses India Standard Time (IST).
 */
const settings = {
  herName: "Ashru",
  myName: "Rikash",
  birthday: "2026-12-30T00:00:00+05:30",
  // Change this to a private, memorable word. This is a cute entrance, not strong security.
  password: "change-this",
  birthdayMessage: "Today is all about you, your smile, and all the little things that make you special. I hope this year brings you so much happiness. ❤️",
  letter: "I made this little corner of the internet just for you. Thank you for being part of my life and for giving me so many memories to treasure. I hope this birthday reminds you how loved and appreciated you are. Keep smiling, keep dreaming, and never forget how special you are to me. Happy birthday, mero bu. ❤️"
};

document.querySelectorAll("[data-her-name]").forEach(el => el.textContent = settings.herName);
document.querySelectorAll("[data-my-name]").forEach(el => el.textContent = settings.myName);
document.getElementById("birthday-message").textContent = settings.birthdayMessage;
document.getElementById("letter-message").textContent = settings.letter;

const gate = document.getElementById("gate");
const countdownView = document.getElementById("countdown-view");
const surprise = document.getElementById("surprise");
const gateMessage = document.getElementById("gate-message");

document.getElementById("unlock").addEventListener("click", () => {
  const entered = document.getElementById("password").value;
  if (entered.toLowerCase() !== settings.password.toLowerCase()) {
    gateMessage.textContent = "Not quite, try your special word again. ♡";
    return;
  }
  gate.classList.add("hidden");
  countdownView.classList.remove("hidden");
});
document.getElementById("password").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("unlock").click();
});
document.getElementById("enter-surprise").addEventListener("click", () => {
  countdownView.classList.add("hidden");
  surprise.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("replay").addEventListener("click", () => {
  surprise.classList.add("hidden");
  gate.classList.remove("hidden");
  document.getElementById("password").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateCountdown() {
  const target = new Date(settings.birthday).getTime();
  const now = Date.now();
  let remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86400000); remaining %= 86400000;
  const hours = Math.floor(remaining / 3600000); remaining %= 3600000;
  const minutes = Math.floor(remaining / 60000); remaining %= 60000;
  const seconds = Math.floor(remaining / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  document.getElementById("countdown-note").textContent =
    Date.now() >= target ? "It's your day! Happy birthday, Ashru! ♡" : "A little patience, a lot of love.";
}
updateCountdown();
setInterval(updateCountdown, 1000);
