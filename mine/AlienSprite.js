class AlienSprite extends Sprite{
    constructor(animation, x, y, speed = 5) {
        super(animation, x , y, speed);
    }

    show(x, y) {
        this.animate(x, y);
        this.index+=0.01
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x, this.y);
    }

    animate(x, y){
        this.x+=x;
        this.y+=y;
    }
}