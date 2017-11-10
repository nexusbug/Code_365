let x = 0;
let y = 0;
let spacing = 15;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);

  if (y < height) {
    if (random(1) < 0.5) {
      line(x, y, x + spacing, y + spacing);
    } else {
      line(x, y + spacing, x + spacing, y);
    }
    x += spacing;

    if (x > width) {
      x = 0;
      y += spacing;
    }
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
78th
2017 November 10

this.video
Coding Challenge #76: 10PRINT in p5.js
https://youtu.be/bEyTZ5ZZxZs
*/
