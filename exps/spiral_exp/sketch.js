let wW, wH, cW, cH;
let canvas;

let img;

let galaxy;
let ga2;

let rot = 0;

function preload() {
  img = loadImage("wp.png");
}

function setup() {
  calcCanvasSize();
  canvas = createCanvas(cW, cH);

galaxy = new Whirlpool(1);
ga2 = new Whirlpool(0.5);

}


function draw() {
  //angleMode(DEGREES);
  background(51);
  translate(cW / 2, cH / 2);
  stroke(255, 0, 0);
  strokeWeight(4);
  noFill();

rotate(rot);

  push();
  rotate(100 + rot);
  image(img, -200, - 200, 400, 400);
  pop();

  //galaxy.rotateG();
  push();
  rotate(rot);
  galaxy.disp();
  pop();

  push();
  translate(200 , 200);
  rotate(rot);
  ga2.disp();
  pop();


rot -= 0.01;

}

class Whirlpool {
  constructor(scale) {
    this.a = scale;
    this.b = 0.5;
    this.n = 4;
    this.c;
    this.r;
  }

  disp() {
    beginShape();
    for (let angle = 0; angle < 0.9 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = 120 * (this.a / this.c);

      let x = this.r * -cos(angle);
      let y = this.r * -sin(angle);

      vertex(x, y);
    }
    endShape();

    beginShape();
    for (let angle = 0; angle < 0.9 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = 120 * (this.a / this.c);

      let x = this.r * cos(angle);
      let y = this.r * -sin(-angle);

      vertex(x, y);
    }
    endShape();
  }

}


//template
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


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365
*/
