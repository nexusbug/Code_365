let inc = 0.01;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);

}

function draw() {

  let yoff = 0;
  loadPixels();

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {

      let index = (x + y + width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
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
73th
2017 November 05

this.video
13.4: 2D Noise - Perlin Noise and p5.js Tutorial
https://youtu.be/ikwNrFvnL3g
*/
