'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!!';
// document.querySelector('.number').textContent = 10;

// let score = (document.querySelector('.guess').value = 23);
// console.log(score);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function checkhighscore(score, highScore) {}

function checkZero(score) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'number is too high';
  } else {
    document.querySelector('.message').textContent = 'you lost the game';
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  let GuessNumber = Number(document.querySelector('.guess').value);

  if (!GuessNumber) {
    document.querySelector('.message').textContent = 'please enter a number';
  } else if (GuessNumber < 0 || GuessNumber > 20) {
    alert('invalid number');
  } else if (GuessNumber === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'winner!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
    }
    document.getElementById('.check').disabled = true;
  } else if (GuessNumber > randomNumber) {
    checkZero(score);
    document.querySelector(
      '.label-score'
    ).textContent = `💯 Score ${(score -= 1)}`;
  } else if (GuessNumber < randomNumber) {
    checkZero(score);
    document.querySelector('.message').textContent = 'number is too low';
    document.querySelector(
      '.label-score'
    ).textContent = `💯 Score ${(score -= 1)}`;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💯 Score:';
  document.querySelector('.guess').textContent = '';
});
