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

const questionsNumberArea = document.querySelector('.questionsNumber');
const easyBtn = document.querySelector('.level.easy');
const mediumBtn = document.querySelector('.level.medium');
const hardBtn = document.querySelector('.level.hard');

let checkedRadio;
let allRadios;
let i;
let score;
let questionAmount;

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
  },
  /* 6 - 10 */
  {
    question: "Who is Harry Potter's godfather?",
    choices: ["Sirius Black", "Albus Dumbledore", "Remus Lupin", "Arthur Weasley"],
    correct: 0
  },
  {
    question: "Which class has a different teacher every year? ",
    choices: ["Charms", "Astronomy and Herbology", "Defence Against the Dark Arts", " History of Magic"],
    correct: 2
  },
  {
    question: "What animal represents Hufflepuff house?",
    choices: ["Lion", "Badger", "Eagle", "Serpent"],
    correct: 1
  },
  {
    question: "What is the name of Hermione's pet cat? ",
    choices: ["Fluffy", "Norbert", "Fang", "Crookshanks"],
    correct: 3
  },
  {
    question: "Who created the Sorting Hat?",
    choices: ["The founders of Hogwarts", "Elf", "DeathEater", "Lord Voldemort"],
    correct: 0
  },
  /* 11 - 15 */
  {
    question: "Where is Azkaban located?",
    choices: ["The Burrow", "High Street", "The North Sea", "The West Sea"],
    correct: 2
  },
  {
    question: "And what platform do students need to catch it from at King's Cross?",
    choices: ["Platform 9 1/4", "Platform 9 2/4", "Platform 9 3/4", "Platform 9 3/2"],
    correct: 2
  },
  {
    question: "What is the name of the device that Dumbledore uses when putting out street lights?",
    choices: ["Deluminator", "Howler", "Revealer", "Remembrall"],
    correct: 0
  },
  {
    question: "What position does Harry play on the Quidditch team?",
    choices: ["Chaser", "Beater", "Seeker", "Keeper"],
    correct: 2
  },
  {
    question: "Which type of insect is Ronald Weasley most afraid of?",
    choices: ["Wasp", "Spider", "Centipede", "Croach"],
    correct: 1
  },
];

easyBtn.addEventListener('click', () => {
  questionAmount = 5;
  showQuiz();
})

mediumBtn.addEventListener('click', () => {
  questionAmount = 10;
  showQuiz();
})

hardBtn.addEventListener('click', () => {
  questionAmount = 15;
  showQuiz();
})

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

startBtn.addEventListener("click", showQuiz);

submitBtn.addEventListener("click", function () {
  allRadios = Array.from(document.querySelectorAll("[name=option]"))
  let isChecked = false;

  allRadios.forEach(radio => {
    if (radio.checked) {
      isChecked = true
      checkedRadio = allRadios.indexOf(radio)
      return;
    }
  })

  if (!(isChecked)) {
    alert("Please select an answer before moving on");
  } else {
    getResults();
    deselectRadios();
    i++;
    displayQCount.innerHTML = i + 1;
    getQAs(questionAmount || 5);
  }
});

function showQuiz() {
  instructions.style.display = "none";
  submitBtn.style.display = "block";
  quiz.style.display = "block";
  questionsNumberArea.innerHTML = questionAmount || 5;
  getQAs(questionAmount || 5);
}

function deselectRadios() {
  allRadios = document.querySelectorAll("[name=option]")
  allRadios.forEach(item => item.checked = false)
}

function getResults() {
  if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
    score++;
    displayScore.innerHTML = score;
  }
}

function getQAs(number) {
  if (i < number) {
    askQuestion.innerHTML = questions[i].question;
    for (let k = 0; k < 4; k++) {
      document.querySelector(`#answer${k}`).innerHTML = questions[i].choices[k];
      document.querySelector(`#answer${k}`).setAttribute("for", questions[i].choices[k]);
      document.querySelector(`#q${k}`).querySelector(['input']).setAttribute("value", questions[i].choices[k]);
      document.querySelector(`#q${k}`).querySelector(['input']).setAttribute("id", questions[i].choices[k]);
    }
  } else {
    displayResults(number);
  }
};

function displayResults(number) {
  quiz.style.display = "none";
  showScore.style.display = "block";
  if (score == '0') {
    console.log('loser')
    inform.innerHTML = `You scored ${score} out of ${number} correct. Try harder next time, good luck!`
  } else {
    inform.innerHTML = `Congratulations!! You scored ${score} out of ${number} correct.`;
  }
};

resetBtn.addEventListener("click", function () {
  beginQuiz();
});

const goToFrontPageBtn = document.querySelector('.go-to-fp')
goToFrontPageBtn.addEventListener('click', () => {
  window.location = 'index.html'
})

document.querySelector('.date').innerHTML = new Date()