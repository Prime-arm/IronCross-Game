const WIDTH = 1300
const HEIGHT = 800

class Game {

    constructor() {
    this.background = new Background();
    this.obstacles = [];
    }

    preload() {
        this.backgroundImg = loadImage("Media/bcg.png")

        this.carsRun = [
            {
              width: 120,
              height: 70,
              image: loadImage("Media/car01_b.png"),
              x: WIDTH,
              y: HEIGHT - 640,
              speed: -8
            },
      
            {
              width: 120,
              height: 70,
              image: loadImage("Media/car03_a.png"),
              x: - 70,
              y: HEIGHT - 530,
              speed: 7
            },
          
            {
              width: 120,
              height: 70,
              image: loadImage("Media/tdrc01_car04_d.png"),
              x: WIDTH,
              y: HEIGHT - 390,
              speed: -6
            },
          
            {
              width: 120,
              height: 70,
              image: loadImage("Media/tdrc01_car07_f.png"),
              x: - 70,
              y: HEIGHT - 280,
              speed: 4
            }]
        
        this.playerImg = loadImage('Media/tdrc01_car09_f.png');
        this.player2Img = loadImage('Media/tdrc01_car07_d.png');
    }

    setup() {
        this.background = new Background()
        this.background.image = this.backgroundImg

        this.player = new Player();
        this.player.image = this.playerImg;
        console.log(this.player);

        this.player2 = new Player2();
        this.player2.image2 = this.player2Img;
        console.log(this.player2);
    }

    draw() {
        clear();
        this.background.drawBackground();
        this.player.drawPlayer();
        this.player2.drawPlayer();

          if (frameCount % 30 === 0) {
            let randomIndex = Math.floor(Math.random() * this.carsRun.length);
            let randomObstacle = this.carsRun[randomIndex];
    
            this.obstacles.push(new Obstacle(randomObstacle));
          }
    

          this.obstacles.forEach((car, index) => {
            car.draw();
            if (this.isCollision(this.player, car)) {
              
              this.obstacles.splice(index, 1);
              this.player.y = height - 70;
            }
            if (this.isCollision2(this.player2, car)) {
              
              this.obstacles.splice(index, 1);
              this.player2.y2 = height - 70;

            }
          });
          }

          isCollision(player, car) {
        
            const distance = (player, car) => {
              return Math.sqrt(
                (player.x + player.width / 2 - (car.x + car.width / 2)) ** 2 +
                  (player.y + player.height / 2 - (car.y + car.height / 2)) ** 2
              );
            };
        
        
            let dist = distance(player, car);
            if (dist <= 80) {
              return true;
            }
            return false;
          }

          isCollision2(player2, car) {
        
            const distance = (player2, car) => {
              return Math.sqrt(
                (player2.x2 + player2.width / 2 - (car.x + car.width / 2)) ** 2 +
                  (player2.y2 + player2.height / 2 - (car.y + car.height / 2)) ** 2
              );
            };
        
        
            let dist = distance(player2, car);
            if (dist <= 80) {
              return true;
            }
            return false;
          }
    }