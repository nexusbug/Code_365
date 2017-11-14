let drops = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);

  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
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
82th
2017 November 14

this.video
Coding Challenge #4: Purple Rain in Processing
https://youtu.be/KkyIDI6rQJI
*/
