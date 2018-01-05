/*
http://nexusbug.com/

STORY of ONE

EP 006: The City

SCALE = pow(10, 1) meters
*/

let wW, wH, cW, cH;

let cnv;

let boston;

let boat, boat2, boat3, bird1, bird2, bird3;

let human;

let littleHuman;

let flock = [];

function preload() {}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  boston = new Boston(0, -60);
  boat = new Boat(30, 200)
  boat2 = new Boat(-190, 170);
  boat3 = new Boat(-90, 120);

  bird1 = new Bird(-10, -240, 0.3, -2);
  bird2 = new Bird(-100, -310, 0.3, -2);
  bird3 = new Bird(700, -10, 0.5, -2);

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2; j++) {
      flock.push(new Bird(i * 150 + j * 120, -950 - j * 80, 0.2, -2));
    }
  }

  human = new HomoSapien(-450, 410, 0.5);
  littleHuman = new HomoSapien(-650, 800, 0.3);
}



function draw() {
  imageMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  background(10, 55, 100);
  translate(cW / 2, cH / 2);

  strokeWeight(9);
  stroke(255);
  noFill();
  for (let i of flock) {
    i.update();
    i.disp();
  }

  noStroke();
  fill(220, 60, 100);
  rect(-cW / 2, 0, cW, cH / 2);

  strokeWeight(4);
  stroke(0);
  fill(0);
  boston.disp();

  boat.disp();
  boat.update();
  boat2.disp();
  boat2.update();
  boat3.disp();
  boat3.update();

  push();
  noFill();
  strokeWeight(10);
  stroke(255);
  bird1.update();
  bird1.disp();
  bird2.update();
  bird2.disp();
  bird3.update();
  bird3.disp();
  pop();

  noStroke();
  fill(0);
  rect(-cW / 2, cS(240), cW, cS(60));

  fill(255);
  human.disp();
  littleHuman.disp();
}

class Bird {
  constructor(x, y, scale, speed) {
    this.x = x || 0;
    this.y = y || 0;
    this.scale = scale || 0.5;
    this.speed = speed;
    this.move;
    this.s = 0;
    this.a;
    this.d;
    this.yoff = 0;
  }

  disp() {
    push();
    scale(this.scale);
    translate(this.x, this.y);
    push();
    rotate(this.d);
    arc(cS(-30), cS(0), cS(60), cS(80), 1.3 * PI, TWO_PI);
    pop();
    push();
    rotate(-this.d);
    arc(cS(30), cS(0), cS(60), cS(80), PI, PI + 0.7 * PI);
    pop();
    pop();
  }

  update() {
    this.yoff += 0.01;
    this.s += 0.05;
    this.y = noise(this.yoff) * sin(this.yoff) * 3 + this.y;
    this.a = sin(this.s);
    this.d = map(this.a, -1, 1, 0, -1.2);
    this.x = this.x - noise(this.yoff) * 5;

    if (this.x < ((-cW / 2) / this.scale) - cS(80)) {
      this.x = ((cW / 2) / this.scale) + cS(80);
    }
  }
}

class HomoSapien {
  constructor(x, y, scale) {
    this.x = x || 0;
    this.y = y || 0;
    this.scale = scale || 0.5;
  }

  disp() {
    push();
    scale(this.scale);
    rectMode(CENTER);
    translate(cS(this.x), cS(this.y));
    ellipse(cS(0), cS(0), cS(30));
    rect(cS(0), cS(56), cS(45), cS(76), cS(8));
    push();
    rotate(-0.3);
    rect(cS(10), cS(62), cS(10), cS(75), cS(10));
    pop();
    push();
    rotate(0.3);
    rect(cS(-10), cS(62), cS(10), cS(75), cS(10));
    pop();
    rect(cS(-12), cS(130), cS(12), cS(85), cS(10));
    rect(cS(12), cS(130), cS(12), cS(85), cS(10));
    pop();
  }
}

class Boat {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.xoff = 0;
    this.m;
  }

  disp() {
    beginShape();
    vertex(cS(this.x + 0), cS(this.y + 0));
    vertex(cS(this.x + 10), cS(this.y + 0));
    vertex(cS(this.x + 10), cS(this.y + -70));
    vertex(cS(this.x + -10), cS(this.y + 0));
    vertex(cS(this.x + 0), cS(this.y + 0));
    vertex(cS(this.x + 0), cS(this.y + 10));
    vertex(cS(this.x + -15), cS(this.y + 10));
    vertex(cS(this.x + -17), cS(this.y + 18));
    vertex(cS(this.x + 10), cS(this.y + 20));
    vertex(cS(this.x + 20), cS(this.y + 18));
    vertex(cS(this.x + 30), cS(this.y + 5));
    vertex(cS(this.x + 20), cS(this.y + 10));
    vertex(cS(this.x + 0), cS(this.y + 10));
    endShape();
  }

  update() {
    this.m = map(cW, 400, 600, 2 / 3, 1);

    this.xoff += 0.01;
    this.x += noise(this.xoff);

    if (this.x > (cW / 2 + cS(30)) / this.m) {
      this.x = ((-cW / 2) - cS(30)) / this.m;
    }
  }
}

class Boston {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  disp() {
    beginShape();
    vertex(cW / 2, cS(this.y + 90));
    vertex(cW / 2, cS(this.y + -20));
    vertex(cS(this.x + 270), cS(this.y + -20));
    vertex(cS(this.x + 270), cS(this.y + 10));
    vertex(cS(this.x + 255), cS(this.y + 10));
    vertex(cS(this.x + 255), cS(this.y + -130));
    vertex(cS(this.x + 250), cS(this.y + -132));
    vertex(cS(this.x + 250), cS(this.y + -145));
    vertex(cS(this.x + 235), cS(this.y + -147));
    vertex(cS(this.x + 235), cS(this.y + -170));
    vertex(cS(this.x + 235), cS(this.y + -147));
    vertex(cS(this.x + 220), cS(this.y + -145));
    vertex(cS(this.x + 220), cS(this.y + -132));
    vertex(cS(this.x + 215), cS(this.y + -130));
    vertex(cS(this.x + 215), cS(this.y + 20));
    vertex(cS(this.x + 195), cS(this.y + 20));
    vertex(cS(this.x + 195), cS(this.y + -30));
    vertex(cS(this.x + 185), cS(this.y + -30));
    vertex(cS(this.x + 185), cS(this.y + -80));
    vertex(cS(this.x + 180), cS(this.y + -90));
    vertex(cS(this.x + 175), cS(this.y + -95));
    vertex(cS(this.x + 165), cS(this.y + -95));
    vertex(cS(this.x + 160), cS(this.y + -90));
    vertex(cS(this.x + 155), cS(this.y + -80));
    vertex(cS(this.x + 155), cS(this.y + -30));
    vertex(cS(this.x + 100), cS(this.y + -30));
    vertex(cS(this.x + 100), cS(this.y + 10));
    vertex(cS(this.x + 80), cS(this.y + 10));
    vertex(cS(this.x + 80), cS(this.y + -50));
    vertex(cS(this.x + 30), cS(this.y + -50));
    vertex(cS(this.x + 30), cS(this.y + -60));
    vertex(cS(this.x + 10), cS(this.y + -65));
    vertex(cS(this.x + -10), cS(this.y + -65));
    vertex(cS(this.x + -10), cS(this.y + 15));
    vertex(cS(this.x + -50), cS(this.y + 15));
    vertex(cS(this.x + -50), cS(this.y + -5));
    vertex(cS(this.x + -90), cS(this.y + -5));
    vertex(cS(this.x + -90), cS(this.y + -225));
    vertex(cS(this.x + -115), cS(this.y + -230));
    vertex(cS(this.x + -170), cS(this.y + -220));
    vertex(cS(this.x + -170), cS(this.y + -60));
    vertex(cS(this.x + -235), cS(this.y + -58));
    vertex(cS(this.x + -235), cS(this.y + -80));
    vertex(cS(this.x + -245), cS(this.y + -100));
    vertex(cS(this.x + -255), cS(this.y + -100));
    vertex(cS(this.x + -255), cS(this.y + -125));
    vertex(cS(this.x + -255), cS(this.y + -100));
    vertex(cS(this.x + -265), cS(this.y + -100));
    vertex(cS(this.x + -275), cS(this.y + -80));
    vertex(cS(this.x + -275), cS(this.y + 20));
    vertex(-cW / 2, cS(this.y + 20));
    vertex(-cW / 2, cS(this.y + 90));
    endShape(CLOSE);
  }
}

//template

//convert Size
function cS(num) {
  let n = num;
  n = cW / (600 / n);
  return n;
}

function calcCanvasSize() {
  wW = windowWidth;
  wH = windowHeight;

  if (wW < wH) {
    wH = wW
  } else {
    wW = wH
  }

  cW = wW - 300;

  if (wW <= 700) {
    cW = 400;
  } else if (wW >= 900) {
    cW = 600;
  }
  cH = cW;
}

function windowResized() {
  calcCanvasSize();
  resizeCanvas(cW, cH);
}
