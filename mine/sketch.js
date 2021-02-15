let spritesheetS;
let spritedataS;
let spritesheetM;
let spritedataM;
let spritesheetAS;
let spritedataAS = [];

let aliens = [];
let animationAS = [];
let animationS = [];
var animationM = [];
let ufo;
let AlienShipsRoute = "img/ships/aliens/"
let names = ["round-alien", "squared-alien", "triangle-alien"]
let UFOroute = "img/ships/moving/";
let UFOobjectName = "UFO";
var missilRoute = "img/missils/";
var missilName = "light-blue-thin";
let height;
let width;
let missils = []

function preload() {
  spritedataS = loadJSON(UFOroute + UFOobjectName + '.json');
  spritesheetS = loadImage(UFOroute + UFOobjectName + '.png');
  spritesheetM = loadImage(missilRoute + "beams.png");
  spritedataM = loadJSON(missilRoute + missilName + '.json');
  spritesheetAS = loadImage(AlienShipsRoute + "aliens.png");
  for (let i = 0; i < names.length; ++i)
    spritedataAS[i] = loadJSON(AlienShipsRoute + names[i] + '.json');
  width = window.outerWidth - 20
  height = window.outerHeight - 100
}

function setup() {
  createCanvas(width, height);

  let frames = spritedataS.frames;

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetS.get(pos.x, pos.y, pos.w, pos.h);
    animationS.push(img)
  }

  frames = spritedataM.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetM.get(pos.x, pos.y, pos.w, pos.h);
    animationM.push(img)
  }

  for (let i = 0; i < spritedataAS.length; ++i) {
    animationAS.push([]);
    frames = spritedataAS[i].frames;
    for (let j = 0; j < frames.length; j++) {
      let pos = frames[j].position;
      let img = spritesheetAS.get(pos.x, pos.y, pos.w, pos.h);
      animationAS[i].push(img)
    }
  }

  for (let i = 0; i < spritedataAS.length*3; ++i)
    aliens.push(new AlienSprite(animationAS[i%spritedataAS.length], i+100*i, 10));
  ufo = new ShipSprite(animationS, width / 2, height - 30, Math.random() * 10);
}

let x=1, y=0;

function draw() {
  background(0);
  ufo.show();
  await showAliens(x, y);
  await showMissils();
  console.log(missils.length)
}

function keyPressed() {
  if (key == "ArrowLeft") {
    ufo.moveLeft()
  }

  else if (key == "ArrowRight") {
    ufo.moveRight()
  }

  else if (key == "u") {
    ufo.speed_up()
  }

  else if (key == "d") {
    ufo.speed_down()
  }

  else if (key == "s") {
    missils.push(ufo.shoot(animationM));
  }
}

async function showAliens(x, y) {
  for (let i = 0; i < aliens.length; ++i) {
    alien = aliens[i]
    alien.show(x, y);
  }
}

async function showMissils() {
  for (let i = 0; i < missils.length; ++i) {
    missil = missils[i]
    if (missil.y <= 0)
      missils = missils.slice(i)
    else
      missil.show()
  }
}