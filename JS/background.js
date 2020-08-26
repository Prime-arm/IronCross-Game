class Background {
    constructor() {
        this.x=0;
        this.image;
    }

    drawBackground() {

        image(this.image, this.x, 0, width, height);
    }
}
