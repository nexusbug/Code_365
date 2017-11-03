let xoff = 0;

function setup() {
  createCanvas(400, 400);
  //setInterval(checkNoise, 1000);
}

function draw() {
  background(51);

  //x = random(width);
  let x = map(noise(xoff), 0, 1, 0, width);

  xoff += 0.01;

  fill(255);
  ellipse(x, 200, 24, 24);
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
71th
2017 November 03

this.video
13.2: noise() vs random() - Perlin Noise and p5.js Tutorial
https://youtu.be/YcdldZ1E9gU
*/
