let particles = [];

function setup() {
  createCanvas(300, 300);
  particles[0] = new Particle(100, 50);
  particles[1] = new Particle();
  let v = createVector(150, 50);
  particles[2] = new Particle(v);
  particles[3] = new Particle("250,250");

  //let val = sum(5, 15);

}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
  }
}

class Particle {

  constructor(a, b) {
    if (a instanceof p5.Vector) {
      this.x = a.x;
      this.y = a.y;
    } else if (typeof(a) === "string") {
      let nums = a.split(',');
      this.x = Number(nums[0]);
      this.y = Number(nums[1]);
    } else {
      this.x = a || width / 2;
      this.y = b || height / 2;
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }

}
// function sum(arr) {
//
//   if (arr instanceof Array) {
//     let val = 0;
//     for (let i = 0; i < arr.length; i++) {
//       val += arr[i];
//     }
//     return val;
//   } else {
//     let val = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       val += arguments[i];
//     }
//     return val;
//   }
//
//   // if (b) {
//   //   return a + b;
//   // } else if (a) {
//   //   return a;
//   // } else {
//   //   return 0;
//   // }
//
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
58th
2017 October 21

this.video
9.17: Arguments Array in JavaScript - p5.js Tutorial
https://youtu.be/4Sw6OUXjHsk
*/
