let spritesheetS;
let spritedataS;
let spritesheetM;
let spritedataM;

let animationS = [];
var animationM = [];
let ufo;
let UFOroute = "img/ships/moving/";
let UFOobjectName = "UFO";
var missilRoute = "img/missils/";
var missilName = "light-blue";
var missilType = '-round';
let height;
let width;
let missils=[]

function preload() {
  spritedataS = loadJSON(UFOroute + UFOobjectName + '.json');
  spritesheetS = loadImage(UFOroute + UFOobjectName + '.png');
  spritesheetM = loadImage(missilRoute + "beams.png");
  spritedataM = loadJSON(missilRoute + missilName + missilType + '.json');
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

  ufo = new ShipSprite(animationS, width / 2, height - 30, Math.random()*10);
}

function draw() {
  background(0);
  ufo.show();
  console.log(missils)
  for (let i=0; i<missils.length; ++i)
  showMissil(i)
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

function showMissil(i){
  missils[i].show();
}

function loadM() {
  while (animationM.length)
    animationM.pop()
  spritedataM = loadJSON(missilRoute + missilName + missilType + '.json');
  frames = spritedataM.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetM.get(pos.x, pos.y, pos.w, pos.h);
    animationM.push(img)
  }
}