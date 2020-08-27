const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const startPage = document.querySelector(".overlay");
let gameMusic
let scoreSound
let crashSound
let gameMode = "off";

function preload() {
    gameMusic = loadSound("Media/Sounds/gamemusic.mp3");
    scoreSound = loadSound("Media/Sounds/score.wav");
    crashSound = loadSound("Media/Sounds/crash.wav");
    game.preload()
}

function setup() {
createCanvas(WIDTH, HEIGHT)
gameMusic.setVolume(0.2);
gameMusic.loop();
crashSound.setVolume(0.6);
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
    gameMusic.play();
  }

 // 'Space' to reload the page
  if (keyCode === 32) {
    window.location.reload();
  }

  // Add score when player reach other side

  if (game.player.y <= HEIGHT - 750) {
    game.player.y = HEIGHT - 70;
    addScore(score1, game.player);
    scoreSound.play();
  }

  if (game.player2.y2 <= HEIGHT - 750) {
    game.player2.y2 = HEIGHT - 70;
    addScore(score2, game.player2);
    scoreSound.play();
  }

 


}

// Add score function and end game when one of the two players reaches a certain score

function addScore(score, player) {
  let s = Number(score.innerHTML) + 1;
  if (s >= 5) {
    console.log(`${player.name} won!`);
    winner = "friendship";
    gameOver = true;
    gameMode = "off";
  }
  score.innerHTML = s;
}

const game = new Game