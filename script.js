// Grab elements
const startBtn = document.getElementById("startBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelChoices = document.getElementById("panel-choices");

// Define the panels
const panels = {
  start: {
    title: "Make your choice",
    text: "All Computer Science students must learn to code.",
    choices: [
      { text: "True", next: "plus" },
      { text: "False", next: "minus" }
    ]
  },
  plus: {
    title: "You made the right choice!",
    text: "You are awarded 1 coin!",
    choices: [
      {text: "Continue", next: "end"},
      {text: "Leave", next: "end"}
    ]
  },
  minus: {
    title: "You made the wrong choice!",
    text: "Sorry!",
    choices: [
      {text: "Continue", next: "end"},
      {text: "Leave", next: "end"}
    ]
  },
  end: {
    title: "The End",
    text: "Thanks for playing!",
    choices: []
  }
};

// Function to show a panel
function showPanel(name) {
  const current = panels[name];

  panelTitle.textContent = current.title;
  panelText.textContent = current.text;
  panelChoices.innerHTML = "";

  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showPanel(choice.next);
    panelChoices.appendChild(btn);
  });
}

// Start button click
startBtn.onclick = () => {
  startBtn.style.display = "none"; // hide main menu
  panel.style.display = "block";   // show panel
  showPanel("start");
}
mainMenuBtn.onclick = () => {
  // Close the panel and show the start button again
  panel.style.display = "none";
  startBtn.style.display = "inline-block";
  showPanel('end');
}
;