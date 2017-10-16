let sketch = function(a) {
  a.x = a.width / 2;
  a.y = a.height / 2;

  a.setup = function() {
    a.createCanvas(200, 200);
    a.background(51);
  }

  a.draw = function() {
    a.fill(0, 200, 255, 25);
    a.noStroke();
    a.ellipse(a.x, a.y, 48);

    a.x += a.random(-15, 15);
    a.y += a.random(-15, 15);

    if (a.x < 0 || a.x > a.width || a.y > a.height || a.y < 0) {
      a.background(51);
      a.x = a.width / 2;
      a.y = a.height / 2;
    }
  }
}

let myp51 = new p5(sketch);
let myp52 = new p5(sketch);

// resetTimer(myp51);
//
//
//
// function resetTimer() {
//   this.background(51);
//   setInterval(resetTimer, 3000);
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
53th
2017 October 16

this.video
9.11: Instance Mode (aka "namespacing") - p5.js Tutorial
https://youtu.be/Su792jEauZg
*/
