const game = new Game

function preload() {
    game.preload()
}

function setup() {
createCanvas(WIDTH, HEIGHT)
game.setup()
}

function draw() {
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

}