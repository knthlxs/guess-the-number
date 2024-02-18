'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 53;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 0;
console.log(document.querySelector('.guess').value);
*/
// let score = Number(document.querySelector('.score').textContent);

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const winStyle = function (body, number) {
  document.querySelector('body').style.backgroundColor = body;

  document.querySelector('.number').style.width = number;
};

const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      displayMessage('🚫 No number!');
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');

      winStyle('#60b347', '30rem');

      displaySecretNumber(secretNumber);

      if (highScore < score) {
        highScore = score;
        displayHighScore(highScore);
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '☝️ Too High!' : '👇 Too Low!');
      score--;
      displayScore(score);
    }
  } else {
    displayMessage('💔 Out of lives!');
    displayScore(0);
  }
};

// Event handler when the check button is clicked
document.querySelector('.check').addEventListener('click', check);

const again = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  winStyle('#222', '15rem');

  displaySecretNumber('?');

  displayMessage('Start guessing...');

  displayScore(score);

  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', again);
