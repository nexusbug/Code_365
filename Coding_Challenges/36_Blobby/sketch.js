let blob;

let blobs = [];
let zoom = 1;

function setup() {
  createCanvas(600, 600);
  blob = new Blob(0, 0, 128);

}

function draw() {
  background(0);

  translate(width/2,height/2);
  let newzoom = 128 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  blob.show();
  blob.update();
  blob.constrain();

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
