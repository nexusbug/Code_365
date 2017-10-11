let bubbles = [];

function setup() {
  createCanvas(500, 400);
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
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
    // stroke(255);
    // strokeWeight(3);
    noStroke();
    fill(255, 10);
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
48th
2017 October 11

this.video
7.3: Arrays of Objects - p5.js Tutorial
https://youtu.be/fBqaA7zRO58
*/
