class Obstacle {
    constructor(carinfo) {
      this.x = carinfo.x;
      this.y = carinfo.y;
      this.height = carinfo.height;
      this.width = carinfo.width;

      this.image = carinfo.image
      this.speed = carinfo.speed
    }
  

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height /2;
        // console.log(obstacleX, obstacleY, playerX, playerY);
    
        if (dist(obstacleX, obstacleY, playerX, playerY) < 70)
        {
          return true;
        } else {
          return false
        }
      }

    draw() {
        this.x += this.speed
        // console.log(this.image, this.x, this.y, this.width, this.height, this.speed)
        image(this.image, this.x, this.y, this.width, this.height);
    }
  }