const play = document.getElementById("btn");
const restart = document.getElementById("res");
const final = document.getElementById("view");

play.addEventListener("click", function () {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomnumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  var randomnumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomnumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomnumber1 > randomnumber2) {
    final.textContent = "Player 1 wins";
  } else if (randomnumber2 > randomnumber1) {
    final.textContent = "Player 2 wins";
  } else {
    final.textContent = "Draw";
  }
});

restart.addEventListener("click", function () {
  final.textContent = "Click Play to see who wins!";
});
