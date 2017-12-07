let slider;

let f;

let a = 1;
let b = 0.5;
let n = 4;
let c = log(b * tan(f/(2 * n)));

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,360,45,15);
}


function draw() {
  //angleMODE(DEGREES);
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();




  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {

    f = angle;

    let na = 2 / n;
    let x = c * cos(angle);
    let y = c * sin(angle);

    vertex(x, y);
  }
  endShape(CLOSE);

}


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365
*/
