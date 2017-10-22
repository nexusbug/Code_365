class Particle {
  constructor() {
    this.x = 100;
    this.y = 99;
  }

  // show() {
  //   point(this.x, this.y);
  // }
}

Particle.prototype.show = function() {
  point(this.x, this.y);
}

let p;
let v;

p5.Vector.prototype.double = function() {
  this.x *= 2;
  this.y *= 2;
  this.z *= 2;
}

function setup() {
  createCanvas(300, 300);
  p = new Particle();

  v = createVector(3, 4);
}

function draw() {
  background(0);
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
59th
2017 October 22

this.video
9.19: Prototypes in Javascript - p5.js Tutorial
https://youtu.be/hS_WqkyUah8
*/
