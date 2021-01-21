class Sprite {

    constructor(image_path, data_path, speed, y, starting_pos, force, drag, spring_strength) {
        this.ship_spritesheet = loadImage(image_path);
        this.data = loadJSON(data_path);
        this.ship_animations = [];
        this.ship_image = 0;
        this.ship_speed = speed;
        this.ship_target;
        this.y = y;
        this.ship_pos = starting_pos;
        this.spring_force = force;
        this.drag_force = drag;
        this.spring_strength = spring_strength;
    }

    movement() {
        this.ship_target = mouseX; //Or 0 or x
        this.spring_force = this.ship_target - this.ship_pos;
        this.spring_force *= this.spring_strength;
        this.ship_velocity *= this.drag_force;
        this.ship_velocity += this.spring_force;
        this.ship_pos += this.ship_velocity;
    }

    loadAnimations() {
        alert (this.data[prueba]);
    }

    show() {
        image(ship.ship_animations[ship.ship_image], ship.ship_pos, ship.y);
        ship.ship_image += 1;
    }
}