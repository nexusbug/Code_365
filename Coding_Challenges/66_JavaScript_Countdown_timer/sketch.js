let counter = 0;
let timeleft = 180;
let ding;

function convertSeconds(s) {
  let min = floor(s / 60);
  let sec = s % 60;
  return nf(min, 2) + " : " + nf(sec, 2);
}

function preload() {
  ding = loadSound("Sonic.Ring.mp3");
}

function setup() {
  noCanvas();

  let params = getURLParams();
  if (params.minute) {
    let min = params.minute;
    timeleft = min * 60;
  }

  let timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter));

  let interval = setInterval(timeIt, 1000);

  function timeIt() {
    counter++;
    timer.html(convertSeconds(timeleft - counter));
    if (counter == timeleft){
      ding.play();
      clearInterval(interval);

    }
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

Sonic.Ring.mp3 file
http://www.findsounds.com/

this.day
86th
2017 November 18

this.video
Coding Challenge #66: JavaScript Countdown Timer
https://youtu.be/MLtAMg9_Svw
*/
