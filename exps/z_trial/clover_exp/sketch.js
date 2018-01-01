/*
http://nexusbug.com/

STORY of ONE

https://en.wikipedia.org/wiki/Lemniscate_of_Bernoulli
*/


let wW, wH, cW, cH;

let cnv;


let c; //clover
let cstem;



function preload() {

}

function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);


  c = new Lemniscate(150, 0.25, 0.75);
  cstem = new Lemniscate(150, 0.75, 0.92);

}



function draw() {
  colorMode(HSB, 360, 100, 100);
  imageMode(CENTER);
  background(0);
  translate(cW / 2, cH / 2);
  rot = frameCount / 100;

  // rotate(rot);




  strokeWeight(5);
  stroke(152, 100, 50);
  noFill();
  push();
  c.disp();
  rotate(PI);
  c.disp();
  rotate(1.5 * PI);
  c.disp();
  rotate(0.15 * PI);
  cstem.disp();
  pop();


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


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365
*/
