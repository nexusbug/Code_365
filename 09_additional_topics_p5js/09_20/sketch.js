let angle = 0;

let x;
let y;
let r, dx, dy;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);




}

function draw() {
  background(151);
  x = 100;
  y = 100;
  stroke(255);
  strokeWeight(8);
  point(x, y);

  angle = 40;
  r = 100;

  dx = r * cos(angle);
  dy = r * sin(angle);

  point(x + dx, y + dy);
  line(x, y, x + dx, y + dy);
}


/*
Daniel Shiffman's Tutorial
9.20: Polar Coordinates - p5.js Tutorial
https://youtu.be/N633bLi_YCw
*/
