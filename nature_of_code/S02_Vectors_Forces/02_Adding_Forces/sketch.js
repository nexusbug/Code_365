let particle;

function setup() {

  createCanvas(600, 360);
  particle = new Particle();
}

function draw() {

  background(51);
  particle.update();
  particle.show();

  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);
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
66th
2017 October 29

this.info
Adding Forces
*/
