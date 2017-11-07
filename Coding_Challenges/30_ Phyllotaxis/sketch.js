let n = 0;
let c = 7;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  let a = n * 137.5;
  let r = c * sqrt(n);

  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;

  fill(180, 255, 255);
  noStroke();
  ellipse(x, y, 8, 8);

  n++;
}

/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365

About
Doing a challenge, coding three sixty five
There I hop on the train of Mr. Shiffman
And code along rainbow colored railway
One video each day, keeps the gray away

Coding Train
Daniel Shiffman
https://www.youtube.com/user/shiffman/
https://www.patreon.com/codingtrain

Framework
p5js - A beautiful Javascript library
https://p5js.org/

this.day
75th
2017 November 07

this.video
Coding Challenge #30: Phyllotaxis
https://youtu.be/KWoJgHFYWxY
*/
