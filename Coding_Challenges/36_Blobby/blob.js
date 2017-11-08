class Blob {


  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0, 0);
    this.yoff = 0;
  }

  update() {
    let newvel = createVector(mouseX - width / 2, mouseY - height / 2);
    newvel.div(50);

    newvel.limit(3);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  eats() {
    let d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      let sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      return true;
    } else {
      return false;
    }
  }

  constrain() {
    blob.pos.x = constrain(blob.pos.x, -width / 4, width / 4);
    blob.pos.y = constrain(blob.pos.y, -height / 4, height / 4);
  }

  show() {
    fill(255);
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);

    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    let xoff = 0;
    for (let a = 0; a < TWO_PI; a += 0.1) {

      let offset = map(noise(xoff + this.yoff), 0, 1, -25, 25);
      let r = this.r + offset;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      xoff += 0.1;
    }
    endShape();


    pop();

    this.yoff += 0.01;

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
76th
2017 November 08

this.video
Coding Challenge #36: Blobby!
https://youtu.be/rX5p-QRP6R4
*/
