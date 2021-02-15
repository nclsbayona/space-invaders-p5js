class Missil extends Sprite {
    constructor(animation, x, y, speed = 0.1) {
        super(animation, x, y, speed);
    }

    animate() {
        this.y -= this.speed;
    }

    show() {
        this.animate();
        let index = (floor(this.index) % (this.len - 1) + 1);
        console.log(this);
        image(this.animation[index], this.x, this.y);
    }
}