class Obstacle {
    constructor(carinfo) {
      this.x = carinfo.x;
      this.y = carinfo.y;
      this.height = carinfo.height;
      this.width = carinfo.width;

      this.image = carinfo.image
      this.speed = carinfo.speed
    }

    draw() {
        this.x += this.speed
        image(this.image, this.x, this.y, this.width, this.height);
    }
  }