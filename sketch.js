var width;
var height;
var ship;
var image_path="img/ships/moving/UFO.png";
var data_path="img/ships/moving/UFO.json";

function setup() {
    width = window.innerWidth-20;
    height = window.innerHeight-20;
    ship = new Sprite(image_path, data_path, 1, height - 40, width / 2, 0.75, 0.5, 0.3);
    createCanvas(width, height);
    ship.loadAnimations();
}

function shipShow(){
    image(ship.ship_animations[ship.ship_image], ship.ship_pos, ship.y);
    ship.ship_image+=1;
}

function draw() {
    background(0);
}

