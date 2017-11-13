let stars = [];

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 300; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0);

    for (let i = 0; i < stars.length; i++) {
        stars[i].disp();
        stars[i].update();

    }
    fill(255);
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
81st
2017 November 13

this.video
Coding Challenge #1: Starfield in Processing
https://youtu.be/17WoOqgXsRM
*/
