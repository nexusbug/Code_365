let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);

  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(100);


  // ambientLight(255);

  // rotateX(atan(cos(QUARTER_PI)));
  // rotateY(QUARTER_PI);

  ortho(-400, 400, 400, -400, 0, 1000);

  // ambientLight(255);

  rotateX(-QUARTER_PI);
  rotateY(ma);



  let offset = 0;

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      // ambientMaterial(0,255,255);
      translate(x - width / 2, 0, z - height / 2);
      box(w, h, w);
      offset += 0.1;
      pop();
    }
  }


  angle -= 0.1;
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
2017 December 12
*/
