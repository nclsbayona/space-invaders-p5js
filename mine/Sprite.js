class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.boost = 1;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
    this.animate()
  }

  animate() {
    this.index += (this.speed * this.boost)*0.039;
  }

}
