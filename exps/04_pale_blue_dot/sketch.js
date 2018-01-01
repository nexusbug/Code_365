/*
http://nexusbug.com/

STORY of ONE

EP 004: Pale Blue Dot

SCALE = pow(10, 7) meters
*/


let wW, wH, cW, cH;

let cnv;

let rot = 0;

let space;



function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  space = new Space(800);

}



function draw() {
  background(0);
  imageMode(CENTER);

  colorMode(HSB, 360, 100, 100);
  translate(cW / 2, cH / 2);
  rot = frameCount / 100;


  push();
  rotate(rot / 5);
  translate(-cW / 2, -cH / 2);
  space.stars();
  pop();



  rotate(-rot / 6);
  for (let i = 55; i < 101; i += 1) {
    stroke(1, 0, i);
    fill(1, 0, i);
    ellipse(cS(240), 0, cS(65) - (i - 55) * cS(1.3));
  }


  strokeWeight(2);

  rotate(-rot * 4.8);


  for (let i = 99; i >= 10; i -= 1) {
    stroke(207, i, 50);
    ellipse(0, 0, cS(240) - (99 - i) * cS(2.6));
  }


  noStroke();
  fill(1, 0, 80);

  beginShape();
  vertex(cS(20), 0);
  vertex(cS(20), -cS(15));
  vertex(cS(10), -cS(35));
  vertex(cS(10), -cS(35));
  vertex(-cS(10), -cS(45));
  vertex(-cS(30), -cS(15));
  vertex(-cS(20), cS(15));
  vertex(-cS(10), cS(30));
  endShape(CLOSE);

  noStroke();
  fill(120, 28, 60);

  beginShape();
  vertex(-cS(10), -cS(50));
  vertex(-cS(20), -cS(60));
  vertex(-cS(30), -cS(40));
  vertex(-cS(50), -cS(40));
  vertex(-cS(70), -cS(45));
  vertex(-cS(90), -cS(35));
  vertex(-cS(100), -cS(25));
  vertex(-cS(110), -cS(5));
  vertex(-cS(100), cS(15));
  vertex(-cS(80), cS(45));
  endShape(CLOSE);


  beginShape();
  vertex(cS(10), -cS(50));
  vertex(cS(20), -cS(60));
  vertex(cS(30), -cS(50));
  vertex(cS(70), -cS(46));
  vertex(cS(78), cS(16));
  vertex(cS(60), cS(60));
  vertex(cS(5), cS(86));
  vertex(cS(15), cS(56));
  vertex(cS(45), cS(46));
  endShape(CLOSE);

  noStroke();
  fill(81, 28, 60);

  beginShape();
  vertex(cS(80), -cS(66));
  vertex(cS(100), -cS(36));
  vertex(cS(110), cS(16));
  vertex(cS(100), cS(36));
  vertex(cS(97), cS(56));
  vertex(cS(47), cS(100));
  vertex(cS(57), cS(80));
  vertex(cS(85), cS(16));
  endShape(CLOSE);

  noFill();
}

//convert Size
function cS(num) {
  let n = num;
  n = cW / (600 / n);
  return n;
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
      this.xp = random(-100, cW + 100);
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
