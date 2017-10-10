let bubble;

function setup() {
  createCanvas(500, 400);
  bubble = new Bubble(200, 200, 20);
  mubble = new Bubble(400, 200, 12);

}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
  mubble.move();
  mubble.show();

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }

  }

  show() {
    stroke(255);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
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
47th
2017 October 10

this.video
6.3: Constructor Arguments with Classes in JavaScript - p5.js Tutorial
https://youtu.be/rHiSsgFRgx4
*/
