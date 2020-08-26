const WIDTH = 1300
const HEIGHT = 800

class Game {

    constructor() {
    this.background = new Background();
    this.obstacles = [];
    }

    preload() {
        this.backgroundImg = loadImage("../Media/bcg.png")

        this.carsRun = [
            {
              width: 80,
              height: 80,
              image: loadImage("../Media/car01_b.png"),
              x: WIDTH,
              y: HEIGHT - 580,
              speed: -5
            },
      
            {
              width: 70,
              height: 70,
              image: loadImage("../Media/car03_a.png"),
              x: - 70,
              y: HEIGHT - 440,
              speed: 4
            }]
        this.playerImg = loadImage('../Media/tdrc01_car09_f.png');
    }

    setup() {
        this.background = new Background()
        this.background.image = this.backgroundImg

        this.player = new Player();
        this.player.image = this.playerImg;
    }

    draw() {
        clear();
        this.background.drawBackground();
        this.player.drawPlayer();

        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.carsRun[1]));
          }
      
          this.obstacles.forEach((obstacle) => {
            obstacle.draw();
          });

          this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.collision(this.player)) {
              return false
            } else {
              return true
            }
          })

          }
    }