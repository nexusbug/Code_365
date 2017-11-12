function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(200, 200);
  angleMode(DEGREES);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  noFill();

  let secAngle = map(sc, 0, 60, 0, 360);
  stroke(255, 100, 150);
  arc(0, 0, 300, 300, 0, secAngle);

  push();
  rotate(secAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  let minAngle = map(mn, 0, 60, 0, 360);
  stroke(150, 100, 255);
  arc(0, 0, 280, 280, 0, minAngle);

  push();
  rotate(minAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  stroke(150, 255, 100);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(hrAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  ellipse(0, 0, 1, 1);

  // fill(255);
  // noStroke();
  // textSize(32);
  // text(hr + ":" + mn + ":" + sc, 10, 200);

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
80th
2017 November 12

this.video
Coding Challenge #74: Clock with p5.js
https://youtu.be/E4RyStef-gY
*/
