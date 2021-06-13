function updateDice(val, i) {
  let img = document.querySelector(".img" + i);
  switch (val) {
    case 1:
      img.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      img.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      img.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      img.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      img.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      img.setAttribute("src", "images/dice6.png");
      break;

    default:
      console.log("Dice image updation Failed!");
      break;
  }
}

function winner(val1, val2) {
  var winText = document.querySelector("h1");

  if (val1 > val2) {
    winText.innerHTML = "Player 1 won!";
  } else if (val1 < val2) {
    winText.innerHTML = "Player 2 won!";
  } else {
    winText.innerHTML = "Game Draw!";
  }
}

function Play() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  updateDice(randomNumber1, 1);
  updateDice(randomNumber2, 2);

  winner(randomNumber1, randomNumber2);
}
