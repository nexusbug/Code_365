class Drop {

  constructor(x, y) {
    this.x = random(width);
    this.y = random(-500, -100);
    this.yspeed = random(4, 10);
    this.lngth = random(5, 15);
    this.gravity = 0.1;
  }

  fall() {
    this.y = this.y + this.yspeed;
    this.yspeed += this.gravity;


    if (this.y > height) {
      this.y = random(-250, 100);
      this.yspeed = random(4, 10);
    }

  }

  show() {
    strokeWeight(3);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.lngth);

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
