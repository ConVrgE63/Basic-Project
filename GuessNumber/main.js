let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
    guesses.style.fontSize = "20px";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "aquamarine";
    lastResult.style.color = "black"
    lastResult.style.fontSize = "30px"
    lastResult.style.borderRadius = "10px";
    lastResult.style.padding = "15px";
    lastResult.style.textAlign = "center";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "yellow";
    lastResult.style.color = "black"
    lastResult.style.borderRadius = "10px";
    lastResult.style.padding = "15px";
    lastResult.style.textAlign = "center";
    lastResult.style.fontSize = "30px"
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
      lowOrHi.style.fontSize= "20px";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resetButton.style.padding = "10px";
  resetButton.style.borderRadius = "7px";
  resetButton.style.backgroundColor= "black";
  resetButton.style.color = "white";
  resetButton.style.border = "2px solid white"
  resetButton.style.boxShadow = " 0 0 10px 3px rgba(192, 214, 208, 0.8)"
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
