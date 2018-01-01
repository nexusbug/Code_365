/*
http://nexusbug.com/

STORY of ONE

EP 001: Template

SCALE = pow(10, 27) meters
*/

let wW, wH, cW, cH;

let cnv;

let stars = [];


function setup() {
  calcCanvasSize();
  cnv = createCanvas(cW, cH);

  for (let i = 0; i < 200; i++) {
    stars.push(new Field(25));
  }
}

function draw() {
  background(0);
  imageMode(CENTER);

  for (let i = 0; i < stars.length; i++) {
    stars[i].paint();
  }
}

class Field {

  constructor(speed) {
    this.x = random(50, cW - 50); // x coordinate of starting point
    this.y = random(50, cH - 50); //y coordinate of starting point
    this.radi = 4; //radius of the star
    this.dia = this.radi * 2; //diameter
    this.speed = speed; //speed of the animation
  }

  paint() {
    this.update();
    this.dist();
    this.move();
    this.calcDia();
    this.disp()
  }

  update() {
    //check if the star is going outside of canvas
    if (this.x > cW || this.x < 0 || this.y > cH || this.y < 0) {
      //take it back to somwhere around center of canvas
      this.x = random(cW / 2 - 350, cW / 2 + 350);
      this.y = random(cH / 2 - 350, cH / 2 + 350);
    }
  }

  //display the star
  disp() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.dia, this.dia);
  }

  //distance of x and y coordinates to center
  dist() {
    this.sx = this.x - cW / 2;
    this.sy = this.y - cH / 2;
  }

  //cumulative increment from center to sides
  move() {
    this.x = this.x + (this.sx / cW / 2) * this.speed;
    this.y = this.y + (this.sy / cH / 2) * this.speed;
  }

  // calculates diameter according to the distance to center
  calcDia() {
    this.d = dist(this.x, this.y, cW / 2, cH / 2); //vectoral distance to center
    this.dia = map(this.d, 0, cW / 2, 0, cW / 100); //this mapping will result change in the diameter of the star, will be zero at the center and increase through to sides
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
