let circles = [];

let counter = 0;

class Circle {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(12, 48);
  }
}


function setup() {
  createCanvas(600, 600);

  while (circles.length < 1000) {
    let overlapping = false;
    let proposalCircle = new Circle;
    for (let j = 0; j < circles.length; j++) {
      let existingCircle = circles[j];
      let d = dist(proposalCircle.x, proposalCircle.y, existingCircle.x, existingCircle.y);
      if (d < proposalCircle.r + existingCircle.r) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push(proposalCircle);
      noStroke();
      fill(0, 255, 250, 100);
      ellipse(proposalCircle.x, proposalCircle.y, proposalCircle.r * 2, proposalCircle.r * 2);
    }

    counter++;
    if (counter > 100000) {
      break;
    }
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

this.day
50th
2017 October 13

this.video
9.8: Random Circles with No Overlap - p5.js Tutorial
https://youtu.be/XATr_jdh-44
*/
