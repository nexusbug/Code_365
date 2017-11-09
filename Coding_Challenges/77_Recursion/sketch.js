let fx;
let fy;
let d = 300;

function setup() {
  createCanvas(700, 700);
  fx = width / 2;
  fy = height / 2;

}

function draw() {
  background(0);
  fractal(fx, fy, d);
  //d += 5;

}

function fractal(x, y, d) {
  //strokeWeight(1);
  stroke(255);
  noFill();
  ellipse(x, y, d);
  if (d > 1){
  fractal(x + d / 2, y, d / 2);
  fractal(x - d / 2, y, d / 2);
  //fractal(x, y + d / 2, d / 2);
  fractal(x, y - d / 2, d / 2);
}
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
77th
2017 November 09

this.video
Coding Challenge #77: Recursion
https://youtu.be/jPsZwrV9ld0
*/
