class enemy {
    constructor(x, y) {

        this.body = createSprite(x, y, 0, 0);
        this.image = loadImage('images/enemy.png');
        this.body.addImage(this.image);
        this.body.scale = 1;
        this.c = 1;

    }
    misc() {
        mario.collide(this.body);
        if (this.body.collide(mario)) {
            lives = lives - 1;
            this.body.y = 1000;
        }
        if (mario.collide(this.body)) {
            ek.play();
            this.c -= 1;
        } else {
            if (this.body.y > 510) {
                if (this.c > 0) {
                    ek.play();
                    this.c = -1
                }
            }
        }
        if (this.body.y < 450) {
            this.body.y = 506;
            this.body.x = 810;
        }
        if (this.body.x < mario.x - 20) {
            if (mario.y > 480) {
                this.body.velocityX = 2;
            } else {
                this.body.velocityX = 0;
            }
        }
        if (this.body.collide(bt.body)) {
            this.body.y = 1000;
        }
        if (this.body.x > mario.x) {
            this.body.velocityX = -5;
        }
        for (var lop = 0; lop < pipes.length; lop++) {
            this.body.bounceOff(pipes[lop].body);
        }
        if (state == "end") {
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
    }

}