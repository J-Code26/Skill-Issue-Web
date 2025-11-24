

import { auth, db } from "./firebase.js";
import {
    getFirestore,
    updateDoc,
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

let currentUser;

// Load user stats when logged in
auth.onAuthStateChanged(async (user) => {
    if (user) {
        currentUser = user;

        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            const data = snap.data();
            correctCount.textContent = data.correct;
            wrongCount.textContent = data.wrong;
            skillCount.textContent = data.skill;
            lifePoints.textContent = data.life;
        }
    }
});

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
    },
    {
        text: "What does 'int' represent in Java?",
        choices:["A) Integer", "B) Input", "C) Interface", "D) Internal"],
        answer: "A) Integer"
    },
    {
        text: "In Java, System.out.println() is used to:",
        choices: ["A) Read input", "B) Display output", "C) Compile code", "D) Comment code"],
        answer: "B) Display output"
    },
    {
        text: "Which HTML tag is used to link JavaScript?",
        choices: ["A) <script>", "B) <js>", "C) <javascript>", "D) <code>"],
        answer: "A) <script>"
    },
    {
        text: "Which operator is used to compare both value and type in JavaScript?",
        choices: ["A) ==", "B) ===", "C) !=", "D) <>"],
        answer: "B) ==="
    },
    {
        text: "CSS stands for Cascading Style Sheets.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which Java keyword is used to define a class?",
        choices: ["A) define", "B) new", "C) class", "D) public"],
        answer: "C) class"
    },
    {
        text: "A Java constructor has the same name as the class.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "What does HTML stand for?",
        choices: ["A) HyperText Markup Language", "B) HighText Machine Language", "C) HyperTool Multi Language", "D) HyperText Manage Language"],
        answer: "A) HyperText Markup Language"
    },
    {
        text: "In JavaScript, arrays can contain different data types.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which keyword declares a constant in JavaScript?",
        choices: ["A) let", "B) const", "C) var", "D) static"],
        answer: "B) const"
    },
    {
        text: "Which Java data type is used to store true/false values?",
        choices: ["A) int", "B) char", "C) boolean", "D) double"],
        answer: "C) boolean"
    },
    {
        text: "In HTML, which tag is used for the largest heading?",
        choices: ["A) <h1>", "B) <h6>", "C) <header>", "D) <title>"],
        answer: "A) <h1>"
    },
    {
        text: "The modulus operator (%) returns the remainder of a division.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        choices: ["A) String", "B) Boolean", "C) Number", "D) Character"],
        answer: "D) Character"
    },
    {
        text: "Which symbol is used for comments in Java?",
        choices: ["A) //", "B) #", "C) <!-- -->", "D) **"],
        answer: "A) //"
    },
    {
        text: "Which HTML element contains the metadata for the page?",
        choices: ["A) <head>", "B) <meta>", "C) <body>", "D) <title>"],
        answer: "A) <head>"
    },
    {
        text: "Java is a dynamically typed language.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        text: "Which loop ensures the code runs at least once?",
        choices: ["A) for", "B) while", "C) do-while", "D) foreach"],
        answer: "C) do-while"
    },
    {
        text: "CSS can change the color and layout of HTML elements.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which keyword is used to inherit a class in Java?",
        choices: ["A) inherits", "B) extends", "C) implements", "D) super"],
        answer: "B) extends"
    },
    {
        text: "In JavaScript, arrays start with index 1.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        text: "Which method adds a new element to an array in JavaScript?",
        choices: ["A) push()", "B) add()", "C) append()", "D) insert()"],
        answer: "A) push()"
    },
    {
        text: "Which keyword creates an object in Java?",
        choices: ["A) class", "B) new", "C) make", "D) construct"],
        answer: "B) new"
    },
    {
        text: "HTML is used for structuring web content.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "In Java, which keyword is used to stop a loop early?",
        choices: ["A) exit", "B) return", "C) break", "D) stop"],
        answer: "C) break"
    },
    {
        text: "Which of these is a front-end language?",
        choices: ["A) Java", "B) Python", "C) HTML", "D) SQL"],
        answer: "C) HTML"
    },
    {
        text: "JavaScript is case-sensitive.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which method converts a string to uppercase in JavaScript?",
        choices: ["A) upper()", "B) toUpperCase()", "C) makeUpper()", "D) capitalize()"],
        answer: "B) toUpperCase()"
    },
    {
        text: "What does SQL stand for?",
        choices: ["A) Structured Query Language", "B) Simple Query Language", "C) Structured Quick List", "D) System Query Log"],
        answer: "A) Structured Query Language"
    },
    {
        text: "CSS uses selectors to target HTML elements.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which of the following is a logical operator in JavaScript?",
        choices: ["A) &&", "B) **", "C) %%", "D) =="],
        answer: "A) &&"
    },
    {
        text: "In Java, 'public static void main' is the entry point of a program.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which CSS property changes text color?",
        choices: ["A) text-style", "B) color", "C) font-color", "D) text-color"],
        answer: "B) color"
    },
    {
        text: "Which symbol is used for concatenation in JavaScript?",
        choices: ["A) +", "B) &", "C) .", "D) #"],
        answer: "A) +"
    },
    {
        text: "In Java, which access modifier makes variables visible to all classes?",
        choices: ["A) private", "B) protected", "C) public", "D) static"],
        answer: "C) public"
    },
    {
        text: "Which HTML element creates a hyperlink?",
        choices: ["A) <a>", "B) <link>", "C) <href>", "D) <hlink>"],
        answer: "A) <a>"
    },
    {
        text: "Which of these is NOT a Java loop structure?",
        choices: ["A) for", "B) while", "C) foreach", "D) loop"],
        answer: "D) loop"
    },
    {
        text: "In programming, variables store data.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which function displays output in JavaScript?",
        choices: ["A) console.log()", "B) System.out.print()", "C) print()", "D) output()"],
        answer: "A) console.log()"
    },
    {
        text: "In JavaScript, 'let' allows you to redeclare a variable in the same scope.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        text: "Which tag creates a table row in HTML?",
        choices: ["A) <td>", "B) <th>", "C) <tr>", "D) <table>"],
        answer: "C) <tr>"
    },
    {
        text: "Which JavaScript keyword declares a variable?",
        choices: ["A) var", "B) set", "C) let", "D) both A and C"],
        answer: "D) both A and C"
    },
    {
        text: "Which Java data type is used for decimal numbers?",
        choices: ["A) int", "B) float", "C) string", "D) char"],
        answer: "B) float"
    },
    {
        text: "JavaScript was created in 10 days.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which HTML attribute specifies an image file?",
        choices: ["A) src", "B) href", "C) alt", "D) link"],
        answer: "A) src"
    },
    {
        text: "CSS stands for Cascading Style Sheets.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        text: "Which tag defines the main content of an HTML document?",
        choices: ["A) <main>", "B) <section>", "C) <body>", "D) <article>"],
        answer: "A) <main>"
    }
];

let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let skillCount = 0;
let lifePoints = 5;
let skillMultiplier = 1;


// ---------- Grab elements ----------
const startBtn = document.getElementById("startBtn");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelChoices = document.getElementById("panel-choices");
const correctDisplay = document.getElementById("correctCount");
const wrongDisplay = document.getElementById("wrongCount");
const skillDisplay = document.getElementById("skillCount");
const message = document.getElementById('message');
const continueBtn = document.getElementById("continueBtn");
const shop = document.getElementById("shop");
const lifeDisplay = document.getElementById("lifePoints");
const skillCountDisplay = document.getElementById("skillCount");
const loginBtn = document.getElementById("loginBtn");
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
        skillCount += skillMultiplier;
        message.textContent = "Correct! +1 skill!";
        saveStats();

    } else {
        wrongCount++;
        lifePoints--;
        message.textContent = `Wrong! -1 Life Point!`;
        saveStats();
    }

    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;
    skillDisplay.textContent = skillCount;
    lifeDisplay.textContent = lifePoints;

    currentIndex++;
    if(lifePoints <= 0){
        endGame();
        return;
    }
    setTimeout(() => {
        if (currentIndex % 5 === 0) {
            showShop();
            return;
        }
        if (currentIndex >= questions.length) {
            endGame();
        } else {
            showQuestion();
        }
    }, 700);
}

function endGame() {
    panelTitle.textContent = "Game Over!";
    panelText.textContent = "";
    panelChoices.innerHTML = "";
    message.textContent = `You got ${correctCount} right and ${wrongCount} wrong. You ended with ${skillCount} skill.`;
}

function showShop(){
    panel.style.display = "none";
    shop.style.display = "block";
}

function activatePowerUp(type){
    const container = document.getElementById("powerUpDisplay");

    if(document.getElementById(type + "-icon")) return;

    const img = document.createElement("img");
    img.id = type + "-icon";
    img.src = `sprites/${type}.jpg`;
    img.style.width = "40px";
    img.style.margin = "0 5px";
    img.style.filter = "drop-shadow(0px 0px 4px yellow)";
    container.appendChild(img);


}

document.querySelectorAll(".shop-item").forEach(btn =>{
    btn.addEventListener("click", () => {
        let cost = parseInt(btn.dataset.cost);

        if(skillCount >= cost) {
            skillCount -= cost;
            skillDisplay.textContent = skillCount;
            updateSkillDisplay();
            if(btn.dataset.reward === "life"){
                lifePoints += 5;
                lifeDisplay.textContent = lifePoints;
                message.textContent = "+5 Life Points!"
                activatePowerUp("PLUS5PowerUp");
                saveStats();
            }
            if(btn.dataset.reward === "double"){
                skillMultiplier = 2;
                message.textContent = "Skill x2 Activated";
                updateSkillDisplay();
                activatePowerUp("X2PowerUp");
            }

            btn.disabled = true;
            btn.textContent += " (Purchased)";
            btn.style.opacity = "0.5";
        }else{
            message.textContent = "You dont have enough Skill! Sorry!";
        }
    })
})

function updateSkillDisplay() {
    skillDisplay.textContent = skillCount;
    skillCountDisplay.textContent = skillCount;
}




// ---------- Button events ----------
startBtn.onclick = () => {
    startBtn.style.display = "none";
    panel.style.display = "block";
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    skillCount = 0;
    lifePoints = 5;
    skillMultiplier = 1;

    questions.sort(() => Math.random() - 0.5);

    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;
    skillDisplay.textContent = skillCount;
    lifeDisplay.textContent = lifePoints;
    message.textContent = "";
    showQuestion();
};

continueBtn.onclick = () => {
    shop.style.display = "none";
    panel.style.display = "block";
    showQuestion();
}

mainMenuBtn.onclick = () => {
    showWelcomeMessage();
    panel.style.display = "none";
    startBtn.style.display = "inline-block";
    shop.style.display = "none";

    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    skillCount = 0;
    lifePoints = 5;
    skillMultiplier = 1;

    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;
    skillDisplay.textContent = skillCount;
    lifeDisplay.textContent = lifePoints;
};

loginBtn.onclick = () => {
    window.location.href = "LoginPage.html";

}

// --- Initialize display on page load ---
function initializeDisplay() {
    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;
    skillDisplay.textContent = skillCount;
    lifeDisplay.textContent = lifePoints;
    showWelcomeMessage();
}

function showWelcomeMessage() {
    message.textContent = "Welcome! Press Start to begin! You get a chance in the Shop every 5 questions! Once your life runs out, or your complete all the questions, the game is over!";
}
const ads = [
    "ads/ad_part_1.png",
    "ads/ad_part_2.png",
    "ads/ad_part_3.png",
    "ads/ad_part_4.png"
];

let index = 0;

const adBanner = document.getElementById("adBanner");
adBanner.style.cursor = "pointer";

setInterval(() => {
    index = (index + 1) % ads.length;
    document.getElementById("adBanner").src = ads[index];
}, 3000);

adBanner.addEventListener("click", () => {
    window.open("https://github.com/J-Code26/Skill-Issue-Web.git", "_blank");
});


async function saveStats() {
    if (!currentUser) return;

    await setDoc(doc(db, "users", currentUser.uid), {
        correct: correctCount,
        wrong: wrongCount,
        skill: skillCount,
        life: lifePoints,
    }, { merge: true });
}

