const instructions = document.getElementById("instructions");
const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");
const askQuestion = document.getElementById("askQuestion");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const form = document.getElementById("form");
const inform = document.getElementById("inform");
const showScore = document.getElementById("showScore");
const displayScore = document.getElementById("displayScore");
const displayQCount = document.getElementById("displayQCount");
let checkedRadio;
let allRadios;
let i;
let score;

const questions = [{
    question: "Hermione's Patronus takes the form of what animal?",
    choices: ["Fox", "Gazelle", "Otter", "Beaver"],
    correct: 2
  },
  {
    question: "Which other character died similarly to how Sirius Black died?",
    choices: ["Remus Lupin", "Albus Dumbledore", "Cedric Diggory", "Fred Weasley"],
    correct: 3
  },
  {
    question: "What type of car did Mr. Weasley bewitch to fly?",
    choices: ["Ford Anglia", "Triumph Twelve", "Hillman Minx", "Humber Super Snipe"],
    correct: 0
  },
  {
    question: "What is the name of the fountain located inside the Ministry of Magic?",
    choices: ["Fountain of Mighty Magic", "Magic is Might", "Everlasting Magic", "Fountain of Magical Brethen"],
    correct: 3
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  }
];

window.onload = beginQuiz;

function beginQuiz() {
  form.style.display = "block";
  instructions.style.display = "block";
  showScore.style.display = "none";
  quiz.style.display = "none";
  submitBtn.style.display = "none";
  i = 0;
  score = 0;
  displayQCount.innerHTML = 1;
  displayScore.innerHTML = 0;
}

startBtn.addEventListener("click", function () {
  instructions.style.display = "none";
  submitBtn.style.display = "block";
  quiz.style.display = "block";
  getQAs();
});

submitBtn.addEventListener("click", function () {
  allRadios = document.getElementsByName("option");
  var isChecked = false;
  for (var j = 0; j < allRadios.length; j++) {
    if (allRadios[j].checked) {
      isChecked = true;
      checkedRadio = j;
      break;
    }
  }
  if (!(isChecked)) {
    alert("Please select an answer before moving on");
  } else {
    getResults();
    deselectRadios();
    i++;
    displayQCount.innerHTML = i + 1;
    getQAs();
  }
});

function deselectRadios() {
  allRadios = document.getElementsByName("option");
  for (var p = 0; p < allRadios.length; p++) {
    allRadios[p].checked = false;
  }
}

function getResults() {
  if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
    score++;
    displayScore.innerHTML = score;
  }
}

function getQAs() {
  if (i < 5) {
    askQuestion.innerHTML = questions[i].question;
    for (var k = 0; k < 4; k++) {
      document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
      document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
      document.getElementById("q" + k).querySelector(['input']).setAttribute("value", questions[i].choices[k]);
      document.getElementById("q" + k).querySelector(['input']).setAttribute("id", questions[i].choices[k]);
    }
  } else {
    displayResults();
  }
};

function displayResults() {
  quiz.style.display = "none";
  showScore.style.display = "block";
  inform.innerHTML = "Congratulations!! You scored " + score + " out of 5 correct.";
};

resetBtn.addEventListener("click", function () {
  beginQuiz();
});

const goToFrontPageBtn = document.querySelector('.go-to-fp')
goToFrontPageBtn.addEventListener('click', () => {
  window.location = 'index.html'
})