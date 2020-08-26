class Player {
    constructor() {
        this.height = 100;
        this.width = 100;
        this.x = 0;
        this.y = height - this.height;
        this.image
    }
    drawPlayer() {
        if (keyIsDown(68)) {
            this.x += 2
            }
        if (keyIsDown(65)) {
            this.x -= 2
            }
        if (keyIsDown(87)) {
            this.y -= 2
            }
        if (keyIsDown(83)) {
            this.y += 2
            }
        
        image(this.image, this.x, this.y, this.width, this.height);
    }
}