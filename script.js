const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  // Change the message
  message.textContent = "The game has started!";

  // Change the button color
  startBtn.style.backgroundColor = "red";
});