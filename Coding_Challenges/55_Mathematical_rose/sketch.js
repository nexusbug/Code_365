let k;
let d = 8;
let n = 5;
let sliderD;
let sliderN;

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 10, 5, 0.1);
  sliderN = createSlider(1, 10, 5, 0.1);
}

function draw() {
  background(0);
  d = sliderD.value();
  n = sliderN.value();
  k = n / d;
  translate(width / 2, height / 2);
  //fill(255);

  beginShape();
  stroke(255);
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
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
79th
2017 November 11

this.video
Coding Challenge #55: Mathematical Rose Patterns
https://youtu.be/f5QBExMNB1I
*/
