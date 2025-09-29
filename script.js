const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
const settingsBtn = document.getElementById("settingsBtn");
const infoBtn = document.getElementById("infoBtn");


startBtn.addEventListener("click", () => {
  // Change the message
  message.textContent = "The game has started!";

  // Change the button color
  startBtn.style.backgroundColor = "green";
})

settingsBtn.addEventListener("click", () => {
  message.textContent = "Settings Entered";

  settingsBtn.style.backgroundColor = "orange";
})

infoBtn.addEventListener("click", () => {
message.textContent = "Information Entered";

infoBtn.style.backgroundColor = "aqua";
});