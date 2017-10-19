let bubbles = [];

function setup() {
  createCanvas(500, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}


function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }

  show() {
    stroke(255);
    strokeWeight(3);
    //noStroke();
    //noFill();
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  changeColor(brghtnss) {
    this.brightness = brghtnss;
  }

  contains(px, py) {
    let d = dist(this.x, this.y, px, py);
    if (d < this.r) {
      //console.log("clicked on bubble");
      return true;
    } else {
      return false;
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
55th
2017 October 19
I was sick for the October 18th
Needed to skip
I apologize

this.video
7.5: Removing Objects from Arrays - p5.js Tutorial
https://youtu.be/tA_ZgruFF9k
*/
