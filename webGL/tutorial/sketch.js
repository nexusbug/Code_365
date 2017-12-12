let angle = 0;

function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(175);


  // ambientLight(255);

  pointLight(255, 255, 255, -200, 0, 0);


  rotateX(angle * 0.5);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);



  ambientMaterial(0, 255, 255, 40);
  torus(80, 20, 84, 84);


  angle += 0.04;
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
