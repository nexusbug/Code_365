let slider;

let img;


let a = 1;
let b = 0.5;
let n = 4;
let c;

let rot = 0;

function preload() {
  img = loadImage("wp.png");
}

function setup() {
  createCanvas(600, 600);
  //slider = createSlider(0,360,45,15);

}


function draw() {
  //angleMode(DEGREES);
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(4);
  noFill();

  rotate(rot);

  push();
  rotate(100);
  image(img, -200, -200, 400, 400);
  pop();

  beginShape();
  for (let angle = 0; angle < 0.9 * TWO_PI; angle += 0.01) {


    c = log(b * tan(angle / (2 * n)));

    let r = 120 * (a / c);

    let x = r * -cos(angle);
    let y = r * -sin(angle);

    vertex(x, y);
  }

  endShape();

  beginShape();
  for (let angle = 0; angle < 0.9 * TWO_PI; angle += 0.01) {


    c = log(b * tan(angle / (2 * n)));

    let r = 120 * (a / c);

    let x = r * cos(angle);
    let y = r * -sin(-angle);


    vertex(x, y);
  }

  endShape();


  rot +=0.01;

}


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365
*/
