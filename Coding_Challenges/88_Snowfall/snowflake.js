function getRandomSize() {

  let r = pow(random(0, 1), 3);
  return constrain((r * 36), 2, 32);


  // let r = randomGaussian() * 2;
  // return constrain(abs(r * r), 2, 36);

  // while (true) {
  //   let r1 = random(1);
  //   let r2 = random(1);
  //
  //   if (r2 > r1) {
  //     return r1 * 36;
  //   }
  // }
}


class Snowflake {

  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(-100, -10);
    this.img = img;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  applyForce(force) {
    //parallax effect
    let f = force.copy();
    f.mult(this.r);


    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(f);
  }

  render() {
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.r, this.r);
  }


  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }


    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize();
    }
  }

  offScreen() {
    return (this.pos.y > height + this.r);
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
*/
