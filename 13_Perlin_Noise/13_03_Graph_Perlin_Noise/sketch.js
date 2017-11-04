// let xoff1 = 0;
// let xoff2 = 10000;

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
  //setInterval(checkNoise, 1000);
}

function draw() {
  background(51);

  beginShape();
  let xoff=start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    noFill();
    let y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();

  start+= inc;

  //noLoop();

  //x = random(width);
  // let x = map(noise(xoff1), 0, 1, 0, width);
  // let y = map(noise(xoff2), 0, 1, 0, width);
  //
  // xoff1 += 0.01;
  // xoff2 += 0.01;
  //
  // fill(255);
  // ellipse(x, y, 24, 24);
}

// function checkNoise() {
//   console.log(noise(xoff));
// }

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
72th
2017 November 04

this.video
13.3: Graphing 1D Perlin Noise - Perlin Noise and p5.js Tutorial
https://youtu.be/y7sgcFhk6ZM
*/
