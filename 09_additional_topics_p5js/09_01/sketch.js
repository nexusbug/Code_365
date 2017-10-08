let angle =0;


function setup() {
createCanvas(400, 400);
angleMode(DEGREES);
rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255);

push();
  translate(50, 50);
  rotate(angle);
  // stroke(255);
  // line(0,0,50,50);
  fill(255,100,50);
  rect(0,0,100,50);
  pop();

fill(50,100,255);
  rect(100,100,20,20);

  angle +=5;


}
