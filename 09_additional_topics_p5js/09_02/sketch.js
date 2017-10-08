let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  //rectMode(CENTER);

}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  scale(1, -1);
  stroke(255);
  fill(100);
  rect(0, 0, 100, 50);
  pop();

  angle += 2;


}
