let snow = [];
let gravity;
let texture;

let zOff = 0;

let flakes = [];



function preload() {
  texture = loadImage("f32.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);

  for (let i = 0; i < texture.width; i += 32) {
    for (let j = 0; j < texture.height; j += 32) {
      let img = texture.get(i, j, 32, 32);
      image(img, i, j);
      flakes.push(img);
    }
  }

  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(flakes);
    snow.push(new Snowflake(x, y, design));
  }



}

function draw() {
  background(0);

  zOff += 0.01;

  for (let flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.01);


    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.render();
    flake.update();
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

this.video
Coding Challenge #88: Snowfall
https://youtu.be/cl-mHFCGzYk
*/
