"use strict";
const secretNumberGen = function () {
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  return secretNumber;
};
const scoreDom = document.querySelector(".score");
const messageDom = document.querySelector(".message");
const numberDom = document.querySelector(".number");
const guessDom = document.querySelector(".guess");
const bodyDom = document.querySelector("body");
let secretNumber = secretNumberGen();
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = secretNumberGen();
  scoreDom.textContent = score;
  bodyDom.style.backgroundColor = "#222";
  numberDom.style.width = "15rem";
  numberDom.textContent = "?";
  guessDom.value = "";
  messageDom.textContent = "Start guessing...";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessDom.value);
  //
  if (!guess) {
    messageDom.textContent = `🚫 You didn't pick a number! 🚫 `;
    guessDom.value = "";
    //
  } else if (guess > 20 || guess <= -1) {
    messageDom.textContent = `Only numbers between 1 & 20!`;
    guessDom.value = "";
    //
  } else if (guess === secretNumber) {
    if (score === 1) {
      messageDom.textContent = `You have lost the game! 😒`;
      scoreDom.textContent = 0;
      //
    } else {
      messageDom.textContent = `😁 You have guessed correct! 🥳`;
      numberDom.textContent = secretNumber;
      //
      bodyDom.style.backgroundColor = "#439f27";
      numberDom.style.width = "20rem";
      guessDom.value = "";
      if (highscore < score) highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //
  } else if (guess !== secretNumber) {
    if (score === 1) {
      messageDom.textContent = `You have lost the game! 😒`;
      scoreDom.textContent = 0;
      guessDom.value = "";
      //
    } else {
      messageDom.textContent =
        guess > secretNumber
          ? `You need a lower number! 👇`
          : `You need a higher number! 👆`;
      score--;
      scoreDom.textContent = score;
      guessDom.value = "";
    }
  }
});
