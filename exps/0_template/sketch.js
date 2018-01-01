/*
http://nexusbug.com/

STORY of ONE

EP 000: Template

SCALE = pow(10, x) meters
*/

let wW, wH, cW, cH;

let cnv;



function preload() {

}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);


}



function draw() {
  background(0);
  imageMode(CENTER);

  // colorMode(HSB, 360, 100, 100);
  // translate(cW / 2, cH / 2);

}

class Name {
  constructor() {

  }

  disp() {

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
