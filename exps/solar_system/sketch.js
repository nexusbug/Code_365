/*
http://nexusbug.com/

STORY of ONE

EP 000: Template
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

  space = new Space(300);

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
  rotate(rot);
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
      rotate(rt * frameCount / 200);
      ellipse(this.x + cW / x, this.y, cW / size);
      pop();
    }

    this.beltyPlanet = function(h, s, l, x, e1, e2, size, rt) {
      rotate(10);
      strokeWeight(1);
      stroke(1, 0, 100);
      noFill();
      push();
      rotate(rt * frameCount / 200);
      ellipse(this.x + cW / x, this.y, cW / e1, cH / e2);
      fill(h, s, l);
      noStroke();
      ellipse(this.x + cW / x, this.y, cW / 20);
      pop();
    }
  }



  disp() {
    //sun
    this.planet(48, 100, 100, 100000, 6, 0);
    //mercury
    this.planet(204, 0, 73, 10, 49, 11);
    //venus
    this.planet(46, 50, 60, 7.5, 42, 9);
    //earth
    this.planet(230, 100, 100, 6, 39, 7);
    //mars
    this.planet(37, 100, 64, 5, 45, 4);
    //jupiter
    this.planet(37, 20, 64, 3.9, 13, 3);
    //saturn
    this.beltyPlanet(51, 40, 64, 2.9, 11, 16, 17, 2);
    //uranus
    this.beltyPlanet(193, 58, 60, 2.35, 19, 13, 20, 1.5);
    //neptune
    this.planet(210, 80, 68, 2.1, 25, 1);

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
      this.xp = random(cW + 250);
      this.yp = random(cH + 250);
      fill(190, 100, 100);
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
