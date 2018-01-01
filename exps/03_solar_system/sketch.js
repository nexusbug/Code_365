/*
http://nexusbug.com/

STORY of ONE

EP 001: Template

SCALE = pow(10, 13) meters
*/

let wW, wH, cW, cH;

let cnv;

let rot = 0;

let space;

let ss; //solar system



function preload() {

}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  space = new Space(800);

  ss = new SolarSystem(0, 0);


}



function draw() {
  background(0);
  imageMode(CENTER);

  colorMode(HSB, 360, 100, 100);
  translate(cW / 2, cH / 2);
  rot = frameCount / 100;

  // fill(1, 0, 100);
  // ss.text();

  // rotate(rot);

  push();
  rotate(rot / 5);
  translate(-cW / 2, -cH / 2);
  space.stars();
  pop();

  ss.disp();

}

class SolarSystem {
  constructor(centerx, centery) {
    this.x = centerx;
    this.y = centery;

    this.planet = function(h, s, l, x, size, rt) {
      rotate(10);
      noStroke();
      fill(h, s, l);
      push();
      rotate(-rt * frameCount / 200);
      ellipse(this.x + cW / x, this.y, cW / size);
      pop();
    }

    this.beltyPlanet = function(h, s, l, x, e1, e2, size, rt, rt2) {
      rotate(10);
      strokeWeight(2);
      stroke(1, 0, 80);
      noFill();
      push();
      rotate(-rt * frameCount / 200);
      translate(this.x + cW / x, this.y, cW / e1, cH / e2);
      rotate(-rt2 * frameCount / 50);
      // ellipse(this.x + cW / x, this.y, cW / e1, cH / e2);
      ellipse(0, 0, cW / e1, cH / e2);
      fill(h, s, l);
      noStroke();
      // ellipse(this.x + cW / x, this.y, cW / size);
      ellipse(0, 0, cW / size);
      pop();
    }
  }



  disp() {
    //sun
    this.planet(50, 100, 100, 100000, 6, 0);
    //mercury
    this.planet(204, 0, 83, 10, 49, 8.8);
    //venus
    this.planet(46, 50, 60, 7.5, 42, 6.5);
    //earth
    this.planet(200, 100, 100, 6, 39, 5.5);
    //mars
    this.planet(37, 100, 64, 5, 45, 4.4);
    //Asteroid belt
    strokeWeight(2);
    stroke(1, 0, 80);
    noFill();
    ellipse(this.x, this.y, cW / 2.3);
    //jupiter
    this.planet(37, 10, 64, 3.65, 10, 2.4);
    //saturn
    this.beltyPlanet(31, 40, 84, 2.7, 10, 13, 15, 1.8, 1);
    //uranus
    this.beltyPlanet(193, 58, 60, 2.25, 19, 15, 24, 1.25, -1);
    //neptune
    this.planet(220, 80, 98, 2.05, 28, 1);

  }

}

class Space {
  constructor(count) {
    this.xp = 0;
    this.yp = 0;

    this.count = count;
  }

  stars(s) {
    noStroke();
    randomSeed(4);
    for (let i = 0; i < this.count; i++) {
      this.xp = random(- 100, cW + 100);
      this.yp = random(-100, cH + 100);
      fill(190, 0, 100);
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
