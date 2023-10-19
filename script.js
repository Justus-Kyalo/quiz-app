const questions = [
  {
    question: "What does 'HTML' stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "Highly Textual Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which programming language is often used for web development?",
    answers: ["Java", "Python", "C++", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does 'CPU' stand for?",
    answers: [
      "Central Programming Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
      "Central Process Unit",
    ],
    correctAnswer: "Central Processing Unit",
  },
  {
    question: "What is the purpose of 'CSS' in web development?",
    answers: [
      "Creating dynamic web content",
      "Styling web pages",
      "Managing databases",
      "Running server-side scripts",
    ],
    correctAnswer: "Styling web pages",
  },
];

const contents = document.querySelector(".contents");
const nextBtn = document.querySelector(".next");

let currentQuiz;
let answerClicked = false;
let score = 0;

function displayQuestion() {
  contents.innerHTML = "";
  currentQuiz = currentQuiz || 0;
  const quiz = document.createElement("p");
  contents.appendChild(quiz);

  const question = questions[currentQuiz];
  quiz.innerHTML = currentQuiz + 1 + ". " + question.question;

  question.answers.forEach((ans) => {
    let answer = document.createElement("button");
    answer.classList.add("answer");
    contents.appendChild(answer);
    answer.innerHTML = ans;

    function handleAnswerClick() {
      if (!answerClicked) {
        answerClicked = true;
        if (answer.innerHTML === question.correctAnswer) {
          score++;
          answer.classList.remove("answer");
          answer.classList.add("correct");
        } else {
          answer.classList.remove("answer");
          answer.classList.add("wrong");
        }
      }
    }

    answer.addEventListener("click", () => {
      handleAnswerClick();
    });
  });
}
displayQuestion();

function nextQuestion() {
  currentQuiz++;
  answerClicked = false;
  if (currentQuiz < questions.length) {
    if (currentQuiz === questions.length - 1) {
      nextBtn.innerHTML = "Finish";
    }
    displayQuestion();
  } else {
    nextBtn.innerHTML = "Restart";
    contents.innerHTML = "";
    const scoreBtn = document.createElement("span");
    scoreBtn.classList.add("score");
    contents.appendChild(scoreBtn);
    scoreBtn.innerHTML = "Score:" + score + "/" + questions.length;
  }
}
function restart() {
  currentQuiz = 0;
  score = 0;
  displayQuestion();
  nextBtn.innerHTML = "Next";
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerHTML === "Restart") {
    restart();
  } else {
    nextQuestion();
  }
});
