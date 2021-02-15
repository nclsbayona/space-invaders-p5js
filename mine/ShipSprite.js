class ShipSprite extends Sprite {
    constructor(animation, x, y, speed) {
        super(animation, x, y, speed);
        this.w = this.animation[0].width;
    }

    moveLeft() {
        if (this.x <= 0)
            this.x = width+this.w
        this.x -= this.speed * this.boost;
    }

    moveRight() {
        if (this.x >= width)
            this.x = -this.w
        this.x += this.speed * this.boost;
    }

    speed_up() {
        if(this.speed+0.5<10)
            this.speed += 0.5;
    }

    speed_down() {
        if (this.speed - 0.5 > 0)
            this.speed -= 0.5;
    }

    shoot(missil_animations, speed=1) {
        let shooted=new Missil(missil_animations, this.x+(this.w/5), this.y-this.w, speed);
        return shooted
    }

}