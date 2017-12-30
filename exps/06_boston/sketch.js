/*
http://nexusbug.com/

STORY of ONE

EP 000: Template

SCALE = pow(10, x) meters
*/

let wW, wH, cW, cH;

let cnv;

let ref;

let ref2;

let boston;

let boat;

let bird;

let cird;



function preload() {
  ref = loadImage("ref.jpg");
  ref2 = loadImage("h.png");
}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  boston = new Boston(0, -60);
  boat = new Boat(30, 200)
  b2 = new Boat(-190, 120);
  b3 = new Boat(-90, 250);

  bird = new Bird(0, -500, 0.5, 0);
  cird = new Bird(120, -450, 0.3, -2);
  kird =new Bird(20, -550, 0.3, -2);
    tird =new Bird(120, -600, 0.3, -2);




}



function draw() {
  background(0);
  imageMode(CENTER);
  rectMode(CENTER);
  tint(255, 120);
  // image(ref, cW / 2, cH / 2, cS(600), cS(600));
  // image(ref2, cW / 2 + 3, cH / 2 + 3, cS(140), cS(240));



  // colorMode(HSB, 360, 100, 100);
  translate(cW / 2, cH / 2);



  strokeWeight(4);
  stroke(255);


  fill(0);
  boston.disp();

  boat.disp();
  boat.update();
  b2.disp();
  b2.update();
  b3.disp();
  b3.update();

  // push();
  // noFill();
  // bird.update();
  // bird.disp();
  // pop();
  push();
  noFill();
  cird.update();
  cird.disp();
  pop();
  push();
  noFill();
  kird.update();
  kird.disp();
  pop();
  push();
  noFill();
  tird.update();
  tird.disp();
  pop();





}

class Name {
  constructor() {

  }

  disp() {

  }
}

class Bird {
  constructor(x, y, scale, speed) {
    this.x = cS(x) || 0;
    this.y = cS(y) || 0;
    this.scale = scale || 0.5;
    this.speed = speed;
    this.move;
    this.s = 0;
    this.a;
    this.d;

  }

  disp() {
    scale(this.scale);

    push();
    translate(cS(this.x), cS(this.y));
    rotate(this.d);
    arc(cS(-30), cS(0), cS(60), cS(80), 1.3 * PI, TWO_PI);
    pop();
    push();
    translate(cS(this.x), cS(this.y));
    rotate(-this.d);
    arc(cS(30), cS(0), cS(60), cS(80), PI, PI + 0.7 * PI);
    pop();

  }
  update() {
    this.s += 0.05;
    this.a = sin(this.s);
    this.d = map(this.a, -1, 1, 0, -1.2);

    this.x = this.x + this.speed;
    if (this.x > (cW/2 + cS(30)) / this.scale) {
      this.x = (-cW/2 - cS(30)) / this.scale;
    } else if(this.x < (-cW/2-cS(30)) / this.scale){
      this.x = (cW/2 + cS(30)) / this.scale;
    }
  }
}

class HomoSapien {
  constructor() {

  }

  disp() {
    ellipse(cS(0), cS(-80), cS(30));
    rect(cS(0), cS(-20), cS(45), cS(76), cS(10));
    push();
    rotate(9);
    rect(cS(-35), cS(8), cS(10), cS(75), cS(10));
    pop();
    push();
    rotate(-9);
    rect(cS(35), cS(8), cS(10), cS(75), cS(10));
    pop();
    rect(cS(-12), cS(55), cS(12), cS(85), cS(10));
    rect(cS(12), cS(55), cS(12), cS(85), cS(10));
  }
}

class Boat {
  constructor(x, y) {
    this.x = cS(x) || 0;
    this.y = cS(y) || 0;

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
    this.x = this.x + 1;
    if (this.x > cW/2 + cS(30)) {
      this.x = -cW/2 - cS(30);
    }
  }
}

class Boston {
  constructor(x, y) {
    this.x = cS(x) || 0;
    this.y = cS(y) || 0;
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
