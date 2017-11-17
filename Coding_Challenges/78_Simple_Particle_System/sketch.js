let particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].show();
    particles[i].update();

    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
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
85th
2017 November 17

this.video
Coding Challenge #78: Simple Particle System
https://youtu.be/UcdigVaIYAk
*/
