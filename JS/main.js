const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const startPage = document.querySelector(".start");
let gameMode = "off";

function preload() {
    game.preload()
}

function setup() {
createCanvas(WIDTH, HEIGHT)
game.setup()
}

let gameOver = false;
let winner = "";

function draw() {

  if (gameOver) {
    document.querySelector("#gameover").style.visibility = "visible";
    document.querySelector(".player-won").innerHTML = `${winner} won !!!`;
  }

game.draw()

// borders
if (game.player.y > HEIGHT - 120) {
    game.player.y = game.player.y - 40;
  }

  if (game.player.x > WIDTH - 40) {
    game.player.x = game.player.x - 40;
  }

  if (game.player2.y2 > HEIGHT - 120) {
    game.player2.y2 = game.player2.y2 - 40;
  }

  if (game.player2.x2 > WIDTH - 40) {
    game.player2.x2 = game.player2.x2 - 40;
  }

//   if (game.player.x < WIDTH - 40) {
//     game.player.x = game.player.x - 40;
//   }
}

function keyPressed() {
  if (keyCode === 13) {
    // enter
    gameMode = "on";
    startPage.style.visibility = "hidden";
  }

 // 'Space' to reload the page
  if (keyCode === 32) {
    window.location.reload();
  }
  // When the game is over, Press 'R' to reset the score and return players to original position

  // if (gameOver && keyCode === 82) {
  //   gameOver = false;
  //   gameMode = "on";
  //   document.querySelector("#gameover").style.visibility = "hidden";
  //   score1.innerHTML = 0;
  //   score2.innerHTML = 0;
  //   game.player.y = HEIGHT - 70;
  //   game.player2.y2 = HEIGHT - 70;
  // }

  // Add score when players reach a specific height of the canvas

  if (game.player.y <= HEIGHT - 650) {
    game.player.y = HEIGHT - 70;
    addScore(score1, game.player);
  }

  if (game.player2.y2 <= HEIGHT - 650) {
    game.player2.y2 = HEIGHT - 70;
    addScore(score2, game.player2);
  }

 


}

// Add score function and end game when one of the two players reaches a certain score

function addScore(score, player) {
  let s = Number(score.innerHTML) + 1;
  if (s >= 5) {
    console.log(`${player.name} won!`);
    winner = player.name;
    gameOver = true;
    gameMode = "off";
  }
  score.innerHTML = s;
}

const game = new Game