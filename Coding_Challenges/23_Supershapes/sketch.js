let slider;

let n1 = 0.3;
let n2 = 0.3;
let n3 = 0.3;
let m = 5;
let a = 1;
let b = 1;

let osc = 0;

function setup() {
  createCanvas(400, 400);
  //slider = createSlider(0, 10, 5, 1);
}

function supershape(theta) {

  let part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  } else {
    return (1 / part3);
  }
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  m = map(sin(osc), -1, 1, 0, 10);
  osc += 0.02;
  let radius = 100;

  let total = 500;
  let increment = TWO_PI / total;

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += increment) {


    let r = supershape(angle);
    let x = radius * r * cos(angle);
    let y = radius * r * sin(angle);
    // let na = 2 / n;
    // let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    // let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

    vertex(x, y);
  }
  endShape(CLOSE);

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
84th
2017 November 16

this.video
Coding Challenge #23: 2D Supershapes
https://youtu.be/ksRoh-10lak
*/
