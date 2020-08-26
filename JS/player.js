class Player {
    constructor() {
        this.height = 100;
        this.width = 50;
        this.x = 230;
        this.y = 650;
        this.image
    }
    drawPlayer() {
        if (keyIsDown(68)) {
            this.x += 3
            }
        if (keyIsDown(65)) {
            this.x -= 3
            }
        if (keyIsDown(87)) {
            this.y -= 3
            }
        if (keyIsDown(83)) {
            this.y += 3
            }
        
        image(this.image, this.x, this.y, this.width, this.height);
    }
}

class Player2 {
    constructor() {
        this.x2 = 935;
        this.y2 = 650;
        this.height = 100;
        this.width = 50;
        this.image2
    }
    drawPlayer() {
        if (keyIsDown(39)) {
            this.x2 += 3
            }
        if (keyIsDown(37)) {
            this.x2 -= 3
            }
        if (keyIsDown(38)) {
            this.y2 -= 3
            }
        if (keyIsDown(40)) {
            this.y2 += 3
            }

        
        image(this.image2, this.x2, this.y2, this.width, this.height);
    }
}