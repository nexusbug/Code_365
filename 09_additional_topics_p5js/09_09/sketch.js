/*
even though the only difference was let
instead of var
from the tutorial
it did not work
so I changed it a bit
every now and then
still does not work

will get back to this later
*/


//array for adding later created vectors
let vertices = [];

function setup() {
  createCanvas(600, 600);
  for (let n = 0; n < 20; n++) {
    let s = createVector(random(width), random(height));
    vertices.push(s);
  }
}

function mousePressed() {
  //create a vector when clicked at where the mouse is
  let v = createVector(mouseX, mouseY);
  vertices.push(v); //add this vector to the vertices array
}

function draw() {
  background(101);

  let reac = []; //vertices that we reached already
  let unreac = []; //other vertices that we have not yet reached
  let rI = 0; //for storing the index number with the least distance
  let uI = 0; //for storing the index number with the least distance
  let rcrd = 1000;
  let d = 1000;

  for (let m = 0; m < vertices.length; m++) {
    unreac.push(vertices[m]);
  }

  reac.push(unreac[0]); //start with getting one point to reached
  unreac.splice(0, 1); //delete the one that became reached

  while (unreac.length > 0) {
    for (let i = 0; i < reac.length; i++) {
      for (let j = 0; j < unreac.length; j++) {
        d = dist(reac[i].x, reac[i].y, unreac[j].x, unreac[j].y);
        if (d < rcrd) {
          rcrd = d;
          rI = i;
          uI = j;
        }
      }
    }
    line(reac[rI].x, reac[rI].y, unreac[uI].x, unreac[uI].y);
    reac.push(unreac[uI]);
    unreac.splice(uI, 1);
  }

  for (let k = 0; k < vertices.length; k++) {
    stroke(255);
    strokeWeight(2);
    fill(255);
    stroke(255);
    //draw a circle using values from the array
    ellipse(vertices[k].x, vertices[k].y, 16, 16);
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
51th
2017 October 14

this.video
9.9: Minimum Spanning Tree (Prim's Algorithm) - p5.js Tutorial
https://youtu.be/BxabnKrOjT0
*/
