const down = document.querySelector(".down");
const up = document.querySelector(".up");
const guess = document.querySelector("#guess-number");
const guessBtn = document.querySelector("#guess-btn");
const report = document.querySelector(".report");
const attempts = document.querySelector(".attempts");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const resetBtn = document.querySelector(".reset");
const prevGuesses = [];
const answer = randomNumber();
let isGameOver = false;
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
easy.addEventListener("click", () => {
  attempts.innerText = 10;
});
hard.addEventListener("click", () => {
  attempts.innerText = 5;
});

guessBtn.addEventListener("click", () => {
  if (isGameOver) return;
  if (prevGuesses.includes(guess.value)) {
    report.innerText = `You already guessed ${guess.value}`;
  } else {
    if (guess.value > answer) {
      report.innerText = "Little lower!";
      up.innerText = guess.value;
    } else if (guess.value < answer) {
      report.innerText = "Little higher!";
      guess.value > down.innerText ? (down.innerText = guess.value) : null;
    } else if (guess.value == "" || guess.value == null) {
      report.innerText = "Please enter a number";
    } else {
      report.innerText = `You got it right! The answer is ${answer}`;
      isGameOver = true;
      return;
    }
    prevGuesses.push(guess.value);
    attempts.innerText -= 1;
    if (attempts.innerText == 0) {
      report.innerText = `You run out of attempts! The answer was ${answer}`;
      isGameOver = true;
    }
  }
});

resetBtn.addEventListener("click", () => {
  isGameOver = false;
  up.innerText = 100;
  down.innerText = 1;
  report.innerText = "Make a guess";
  attempts.innerText = 10;
});
