let r = 200;
let circle = 0;
let total = 0;
let pi = 0;
let recordPI = 0;
let recordDiff;
let diff = 0;

function setup() {
  createCanvas(410, 410);

  background(0);
  translate(width / 2, height / 2);
  rectMode(CENTER);

  stroke(255);
  strokeWeight(1);
  noFill();
  ellipse(0, 0, r * 2, r * 2);
  rect(0, 0, r * 2, r * 2);


}

function draw() {
  translate(width / 2, height / 2);

  for (let i = 0; i < 10000; i++) {
    let x = random(-r, r);
    let y = random(-r, r);
    total++;

    let d = x * x + y * y;

    if (d < r * r) {
      circle++;
      fill(0, 255, 255);
    } else {
      fill(255, 255, 0);
    }

    pi = 4 * (circle / total);
    recordDiff = abs(PI - recordPI);
    diff = abs(PI - pi);
    if(diff < recordDiff){
      recordDiff = diff;
      recordPI = pi;
    }


    point(x, y);
  }





  console.log(recordPI);


}

/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365

Approximating PI using monte carlo method

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
Coding Challenge #95: Approximating the Value of Pi
https://youtu.be/5cNnf_7e92Q
*/
