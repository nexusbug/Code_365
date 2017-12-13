let wW, wH, cW, cH;

let cnv;


let mwArm1; //milkyway arm 1
let mwArm2; //milkyway arm 2
let wp; //whirlpool
let ngc13;
let ngc47;

let space;

let rot = 0;



function preload() {

}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  space = new Space();

  mwArm1 = new Galaxy(0.5, 0.5, 4, 30, 0.03, 0.9, 120);
  mwArm2 = new Galaxy(0.5, 0.5, 4, 20, 0.03, 0.9, 120);

  wp = new Galaxy(0.5, 0.5, 4, 20, 0.03, 0.9, 100);

  ngc13 = new Galaxy(0.3, 1, 2, 12, 0.03, 0.3, 130);

  ngc47 = new Galaxy(0.6, 3, 2, 10, 0.03, 0.1, 80);


}



function draw() {
  colorMode(HSB, 360, 100, 100);
  imageMode(CENTER);
  background(0);
  translate(cW / 2, cH / 2);
  rot = frameCount / 100;

  rotate(rot);

  push();
  translate(-cW / 2, -cH / 2);
  space.stars();
  pop();




  push();
  stroke(195, 96, 49);
  strokeWeight(5);
  noFill();
  translate(cW / 4, cH / 4);
  rotate(-5 * rot);
  push();
  mwArm1.disp();
  pop();
  rotate(1.60);
  push();
  mwArm2.disp();
  pop();
  mwArm1.center();
  pop();


  push();
  stroke(45, 58, 62);
  strokeWeight(5);
  noFill();
  translate(-cW / 4, -cH / 4);
  rotate(-3 * rot);
  push();
  wp.disp();
  pop();
  wp.center();
  pop();

  push();
  stroke(290, 90, 62);
  strokeWeight(5);
  noFill();
  translate(cW / 4, -cH / 4);
  rotate(-2 * rot);
  push();
  ngc13.disp();
  pop();
  ngc13.center();
  pop();

  push();
  stroke(269, 96, 62);
  strokeWeight(5);
  noFill();
  translate(-cW / 4, cH / 4);
  rotate(-1.5 * rot);
  push();
  ngc47.disp();
  pop();
  ngc47.center();
  pop();


}

class Galaxy {
  constructor(scale, b, n, con1, con2, con3, con4) {
    this.a = scale;
    this.b = b;
    this.n = n;
    this.c;
    this.r;

    this.con1 = con1;
    this.con2 = con2;
    this.con3 = con3;
    this.con4 = con4;
  }

  center() {
    let l = 50;
    for (let radius = this.con1; radius >= 10; radius -= 1) {
      noStroke();
      fill(59, 90, l);
      ellipse(0, 0, radius);
      l += 1;
    }
  }

  disp() {

    // let arrcount;
    // let arr1 = [];
    // let arr2 = [];
    // let v;

    let colors = [2, 50, 195, 232, 278];

    beginShape();
    for (let angle = this.con2; angle < this.con3 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = this.con4 * (this.a / this.c);

      let x = this.r * -cos(angle);
      let y = this.r * -sin(angle);

      vertex(x, y);
      // v = createVector(x, y);
      // arr1.push(v);
    }
    endShape();

    beginShape();
    for (let angle = this.con2; angle < this.con3 * TWO_PI; angle += 0.01) {
      this.c = log(this.b * tan(angle / (2 * this.n)));

      this.r = this.con4 * (this.a / this.c);

      let x = this.r * cos(angle);
      let y = this.r * -sin(-angle);

      // arrcount = floor((angle * 100) - 3);

      vertex(x, y);
      // v = createVector(x, y);
      // arr2.push(v);
    }
    endShape();

    // Formula for putting stars around arms
    // cancelled (performance-wise)

    // for (let i = 0; i < arrcount; i++) {
    //   strokeWeight(1);
    //   stroke(random(colors), 78, 80);
    //   fill(random(colors), 78, 80);
    //   ellipse(arr1[i].x + random(-20, 20), arr1[i].y + random(-20, 20), random(0, 0.4));
    //   ellipse(arr2[i].x + random(-20, 20), arr2[i].y + random(-20, 20), random(0, 0.4));
    // }

  }

}

class Space {
  constructor() {
    this.xp = width / 2;
    this.yp = height / 2;
  }

  stars() {
    noStroke();
    randomSeed(4);
    for (let i = 0; i < 300; i++) {
      this.xp = random(cW + 200);
      this.yp = random(cH + 200);
      fill(random(360), 85, 78);
      ellipse(this.xp, this.yp, 2);
    }
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
