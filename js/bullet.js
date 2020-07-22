class Bullet {
    constructor(x, y) {
        this.body = createSprite(x, y, 0, 0);
        this.img = loadImage('images/fireball.png');
        this.body.addImage(this.img);
        this.body.scale = 0.3;

    }
    move() {

        this.body.velocityX = 35;

    }
    ret() {
        if (this.body.x >= 800) {
            this.body.x = mario.x + 30;
            this.body.y = mario.y + 15;
            firb.play();
        }
    }
}