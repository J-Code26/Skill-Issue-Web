// ---------- Questions ----------
const questions = [
    {
        text: "JavaScript runs in the browser.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "In programming, a loop runs only once.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        text: "The 'if' statement is used for decision making.",
        choices: ["True", "False"],
        answer: "True"
    }
];

let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// ---------- Grab elements ----------
const startBtn = document.getElementById("startBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelChoices = document.getElementById("panel-choices");
const correctDisplay = document.getElementById("correctCount");
const wrongDisplay = document.getElementById("wrongCount");
const message = document.getElementById('message');

// ---------- Show question ----------
function showQuestion() {
    const q = questions[currentIndex];
    panelTitle.textContent = `Question ${currentIndex + 1}`;
    panelText.textContent = q.text;
    panelChoices.innerHTML = "";

    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(choice, q.answer); // fixed lowercase
        panelChoices.appendChild(btn);
    });
}

// ---------- Check answer ----------
function checkAnswer(selected, correct) {
    if (selected === correct) {
        correctCount++;
        message.textContent = "Correct!";
    } else {
        wrongCount++;
        message.textContent = "Wrong!";
    }

    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;

    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// ---------- End of game ----------
function endGame() {
    panelTitle.textContent = "Game Over!";
    panelText.textContent = "";
    panelChoices.innerHTML = "";
    message.textContent = `You got ${correctCount} right and ${wrongCount} wrong.`;
}

// ---------- Button events ----------
startBtn.onclick = () => {
    startBtn.style.display = "none";
    panel.style.display = "block";
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    correctDisplay.textContent = 0;
    wrongDisplay.textContent = 0;
    message.textContent = "";
    showQuestion();
};

mainMenuBtn.onclick = () => {
    panel.style.display = "none";
    startBtn.style.display = "inline-block";
};