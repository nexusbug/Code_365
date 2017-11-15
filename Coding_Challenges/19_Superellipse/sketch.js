let slider;

function setup() {
  createCanvas(400, 400);
slider = createSlider(0,10,2,0.01);
}

function sgn(val){
  if (val > 0){
    return 1;
  }else if (val < 0){
    return -1;
  }else{
    return 0;
  }
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  let a = 100;
  let b = 100;
  let n = slider.value();


  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {

    let na = 2 / n;
    let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

    vertex(x, y);
  }
  endShape(CLOSE);

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
74th
2017 November 06

this.video
Coding Challenge #19: Superellipse
https://youtu.be/z86cx2A4_3E
*/
