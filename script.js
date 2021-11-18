// defining variables 
const secondsLeft = 60
let currentQuestion = 0;

const timer = {
  handle: null,
  time: secondsLeft
};

// array of questions
const questions = [
  {
    question: "String values are enclosed within ___.",
    choices: ["curly brackets", "parentheses", "square brackets", "quotes"],
    answer: 3
  }
  {
    question: "Commonly used data types do not include ___.",
    choices: ["strings", "alerts", "numbers", "booleans"],
    answer: 1
  }
  {
    question: "The condition in an if/else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 2
  }
  {
    question: "What does DOM stand for?",
    choices: ["Date of Maker", "Document Object Model", "Document Object Maker", "Document Oversee Model"],
    answer: 1
  }
  {
    question: "A function can be defined as ___.",
    choices: ["A Javascript feature", "A math operation", "A browser operation", "A self contained unit of code"],
    answer: 3
  }
  {
    question: "Inside which HTML element is JavaScript inserted?",
    choices: ["<js>", "<javascript>", "<script>", "none of the above"],
    answer: 2
  }
  {
    question: "To see if two variables are equal in an if/else statement, you would use ___.",
    choices: ["=", "!=", "equals", "=="],
    answer: 3
  }
  {
    question: "The first index of an array is ___.",
    choices: ["1", "0", "Any", "100"],
    answer: 1
  }
  {
    question: "Who invented JavaScript?"
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Ben Javascript"]
    answer: 2
  }
  {
    question: "Which event occurs when the user click on an HTML element?",
    choices: ["onclick", "onchange", "onmouseclick", "onmouseover"]
    answer: 0
  }
]

// Begin Quiz functions
document.getElementById('startQuiz').addEventListener('click', () => {
  if (timer.handle !== null) {
    clearInterval(timer.handle);
  }

  timer.time = secondsLeft;

  timer.handle = setInterval(() => {
    timer.time -= 1;
    document.getElementById('timer').innerHTML = + timer.time;
    if (timer.time <= 0) {
      end_quiz();
    }
  }, 1000);

  document.getElementById('quiz').style.display = "";
  document.getElementById('timer').innerHTML = "Time: " + timer.time;
  document.getElementById('highScoreEntry').style.display = "none";
  document.getElementById('scoreBoard').style.display = "none";

  current_question = 0;
  populate_question();
});