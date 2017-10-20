let cols = 10;
let rows = 10;

let colors = new Array(cols);
// or let colors = [];

function setup() {
  createCanvas(300, 300);


  for (let i = 0; i < cols; i++) {

    colors[i] = new Array(rows);
    // or colors[i] = [];

    for (let j = 0; j < rows; j++) {
      colors[i][j] = random(255);


    }
  }

}

function draw() {
  background(51);


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 30;
      let y = j * 30;

      stroke(0);
      fill(colors[i][j]);
      rect(x, y, 30, 30);
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
56th
2017 October 20

this.video
9.15: 2D Arrays in JavaScript - p5.js Tutorial
https://youtu.be/OTNpiLUSiB4
*/
