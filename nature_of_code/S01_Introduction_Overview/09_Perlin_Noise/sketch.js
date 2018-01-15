let xoff = 0;

function setup() {
  createCanvas(600, 360);
}

function draw() {
  background(51);

  //let x = random(0, width);

  let x = noise(xoff) * width;

  xoff += 0.01;

  fill(255);
  ellipse(x, 180, 48, 48);
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
64th
2017 October 27

this.info
Perlin Noise
*/
