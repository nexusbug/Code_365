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
p5js - beautiful Javascript library
https://p5js.org/

this.day
44th
2017 October 07

this.video
9.6: JavaScript Closure - p5.js Tutorial
https://youtu.be/-jysK0nlz7A
*/


var x = 0;
var timer1;
var timer2;



function setup() {
  createCanvas(200, 200);
  timer1 = createP('timer1');
  timer2 = createP('timer2');

  makeTimer(timer1, 1000);
  setTimeout(makeTimer(timer2, 500), 1000);
  //could not figure out why setTimeout is not working
  //will be back

}


function makeTimer(elt, time) {
  var counter = 0;
  setInterval(timeThat, time);

  function timeThat() {
    elt.html(counter);
    counter++;
  }

}



function draw() {
  background(51);
  stroke(255);
  line(x, 0, x, height);
  x += 3;
  if (x > width) {
    x = 0;
  }
}
