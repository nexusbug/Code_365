let wW, wH, cW, cH;
let canvas;
let sp;

let img;

let galaxy;
let ga2;

let rot = 0;

function preload() {
  img = loadImage("whirlpool.png");
}

function setup() {
  calcCanvasSize();
  canvas = createCanvas(cW, cH);


  galaxy = new Whirlpool(1);
  ga2 = new Whirlpool(1);

  sp = new Space();

}



function draw() {
  //angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  imageMode(CENTER);
  background(0);
  translate(cW / 2, cH / 2);
  stroke(39, 55, 82);
  strokeWeight(4);
  noFill();

  rotate(frameCount / 200.0);

  push();
  translate(-cW / 2, -cH / 2);
  sp.stars();
  pop();




  push();
  rotate(-2 * frameCount / 200.0);
  image(img, 0, 0, 400, 400);
  pop();

  push();
  galaxy.center();
  pop();

  push();
  rotate(-2 * frameCount / 200.0);
  galaxy.disp();
  pop();

  // push();
  // rotate(1.75);
  // ga2.disp();
  // pop();


  rot -= 0.01;

}

class Space {
  constructor() {
    this.xp = width / 2;
    this.yp = height / 2;
  }

  stars() {
    noStroke();;
    randomSeed(4);
    for (let i = 0; i < 300; i++) {
      this.xp = random(cW + 200);
      this.yp = random(cH + 200);
      fill(random(360), 85, 78);
      ellipse(this.xp, this.yp, 2);
    }
  }

}

class Whirlpool {
  constructor(scale) {
    this.a = scale;
    this.b = 0.5;
    this.n = 4;
    this.c;
    this.r;


  }

  center() {
    let l = 70;
    for (let radius = 40; radius >= 10; radius -= 1) {
      noStroke();
      fill(59, 90, l);
      ellipse(0, 0, radius);
      l += 1;
    }
  }

  disp() {
    beginShape();
    for (let angle = 0.03; angle < 0.9 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = 100 * (this.a / this.c);

      let x = this.r * -cos(angle);
      let y = this.r * -sin(angle);

      vertex(x, y);
    }
    endShape();

    beginShape();
    for (let angle = 0.03; angle < 0.9 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = 100 * (this.a / this.c);

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
