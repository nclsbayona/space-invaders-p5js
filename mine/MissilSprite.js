class Missil extends Sprite {
    constructor(animation, x, y, speed = 1.5) {
        super(animation, x , y, speed);
    }

    animate() {
        this.y -= this.speed;
    }

    first() {
        image(this.animation[0], this.x, this.y);
    }

    show() {
        this.animate();
        let index = (this.index++ % (this.len - 1) + 1);
        let i = 10;
        if (index == 1)
            image(this.animation[index], this.x, this.y);
        else if (index == 2)
            image(this.animation[index], this.x, this.y);
        else
            image(this.animation[index], this.x, this.y);
    }
}