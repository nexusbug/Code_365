let w;

function setup() {

  createCanvas(600, 600);
  w = new Walker();

}

function draw() {

  background(51);
  w.update();
  w.show();

}

class Walker {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 24, 24);
  }

}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/


Special Thanks to
Daniel Shiffman

These studies are
Still part of Code_365 Challenge

this.day
60th
2017 October 23

this.info
Random Walker
*/
