function setup() {
  createCanvas(600, 400);
  background(155);
}

//drawing an alien

function draw() {

  //body part
  fill(255, 0, 0);
  rect(240, 145, 20, 100);

  //head
  fill(0, 0, 255);
  ellipse(250, 145, 70, 70);

  //eyes
  fill(0, 255, 0);
  ellipse(235, 140, 15, 30);
  ellipse(265, 140, 15, 30);

  //legs
  line(240, 245, 220, 270);
  line(260, 245, 280, 270);

}
