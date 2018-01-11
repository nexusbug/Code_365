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
    this.angle = random(TWO_PI);
    this.dir = (random(1) > 0.5) ? 1 : -1;
    this.xOff = 0;

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
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();

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

    this.xOff = sin(this.angle * 2) * this.r * 2;


    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.1);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }


    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize();
    }

    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }

    this.angle += this.dir * this.vel.mag() / 300;
  }

  offScreen() {
    return (this.pos.y > height + this.r ||
      this.pos.x < -this.r ||
      this.pos.x > width + this.r);
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
