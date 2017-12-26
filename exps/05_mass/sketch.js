/*
http://nexusbug.com/

STORY of ONE

EP 005: Mass

SCALE = pow(10, 4) meters
*/

let wW, wH, cW, cH;

let cnv;

let mass;

let ma;

let sc = 0.1;

let sw;

let interval;

let c; //clover
let cstem;

let alpha = 15;

let clouds = [];

function preload() {}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  ma = new Mass;

  c = new Lemniscate(35, 0.25, 0.75);
  cstem = new Lemniscate(35, 0.75, 0.92);

  for (let i = 0; i < 1000; i++) {
    let x = random(cW);
    let y = random(cH);
    let r = random(20, 40);
    clouds[i] = new Cloud(x, y, r, 65, 0);
  }


  interval = setInterval(timer, 1);

}



function draw() {
  background(20);

  if (sc <= 3) {
    colorMode(RGB, 255);
    for (let i = 0; i < clouds.length; i++) {
      fill(255, alpha);
      clouds[i].move();
      clouds[i].show();
    }
  }

  imageMode(CENTER);

  colorMode(HSB, 360, 100, 100);
  translate(cW / 2, cH / 2);




  // image(mass, 0, -15, cS(150), cS(150));

  sw = map(sc, 0.1, 6, 8, 0.1);

  noFill();
  strokeWeight(4);
  stroke(50);



  if (sc <= 5) {
    push();
    scale(sc);
    ma.disp();
    pop();
  }
  if (sc <= 112) {
    push();
    scale(sc);
    stroke(152, 100, 50);
    c.disp();
    rotate(PI);
    c.disp();
    rotate(1.5 * PI);
    c.disp();
    rotate(0.15 * PI);
    cstem.disp();
    pop();
  }


  if (110 < sc) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(152, 100, 50);
    rect(0, 0, cW, cH);
    pop();
  }

  if (175 < sc) {
    clearInterval(interval);
  }

}


function timer() {
  if (sc <= 5) {
    sc += 0.005;
    alpha -= 1;
  } else if (5 < sc <= 112) {
    sc += 0.05;
    alpha -= 1;
    sw = map(sc, 5.1, 112, 1, 8);
  }
}

class Cloud {
  constructor(x, y, r, density, limit) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.a = density;
    this.l = limit;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    if (this.x > cW || this.x < 0 || this.y > cH || this.y < 0) {
      this.x = random(cW);
      this.y = random(cH);
    }

    if (this.a >= this.l) {
      this.a -= 0.5;
    }

  }

  show() {
    noStroke();
    fill(255, this.a);
    ellipse(this.x, this.y, this.r * 2);
  }
}


class Mass {
  constructor() {
    this.cx = 35;
    this.cy = 10;
  }

  disp() {

    beginShape();
    vertex(cS(this.cx) + cS(30), cS(this.cy) + cS(0));
    vertex(cS(this.cx) + cS(35), cS(this.cy) + cS(-30));
    vertex(cS(this.cx) + cS(75), cS(this.cy) + cS(-70));
    vertex(cS(this.cx) + cS(50), cS(this.cy) + cS(-120));
    vertex(cS(this.cx) + cS(-15), cS(this.cy) + cS(-80));
    vertex(cS(this.cx) + cS(-265), cS(this.cy) + cS(-90));
    vertex(cS(this.cx) + cS(-300), cS(this.cy) + cS(45));
    vertex(cS(this.cx) + cS(-15), cS(this.cy) + cS(55));
    vertex(cS(this.cx) + cS(25), cS(this.cy) + cS(145));
    vertex(cS(this.cx) + cS(75), cS(this.cy) + cS(115));
    vertex(cS(this.cx) + cS(90), cS(this.cy) + cS(155));
    vertex(cS(this.cx) + cS(190), cS(this.cy) + cS(110));
    vertex(cS(this.cx) + cS(165), cS(this.cy) + cS(55));
    vertex(cS(this.cx) + cS(140), cS(this.cy) + cS(35));
    vertex(cS(this.cx) + cS(165), cS(this.cy) + cS(95));
    vertex(cS(this.cx) + cS(115), cS(this.cy) + cS(120));
    vertex(cS(this.cx) + cS(70), cS(this.cy) + cS(10));
    endShape(CLOSE);
  }

}

class Lemniscate {
  constructor(scale, c1, c2) {
    this.scale = scale || 150;
    this.r;

    this.c1 = c1 || 0.25;
    this.c2 = c2 || 0.75;
  }


  disp() {

    beginShape();
    for (let angle = this.c1 * TWO_PI; angle < this.c2 * TWO_PI; angle += 0.01) {
      this.r = this.scale * (sqrt(2) * cos(angle)) / (pow(sin(angle), 2) + 1);
      let x = this.r;
      let y = this.r * sin(angle);
      vertex(cS(x), cS(y));
    }
    endShape();

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
