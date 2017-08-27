var col = {
  r: 0,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(600, 400);
  background(0);

  fill(255, 0, 0);
  rectMode(CENTER);
  rect(150, 390, 20, 20);

  fill(0, 255, 0);
  rectMode(CENTER);
  rect(300, 390, 20, 20);

  fill(0, 0, 255);
  rectMode(CENTER);
  rect(450, 390, 20, 20);

  stroke(255);
  fill(0);
  rectMode(CENTER);
  rect(70, 390, 20, 20);

}

function draw() {

  if (mouseX > 60 && mouseX < 80) {
    if (mouseY > 380) {
      col.r = 20;
      col.g = 20;
      col.b = 20;
    }
  }

  if (mouseX > 140 && mouseX < 160) {
    if (mouseY > 380) {
      col.r = 255;
    }
  }
  if (mouseX > 290 && mouseX < 310) {
    if (mouseY > 380) {
      col.g = 255;
    }
  }
  if (mouseX > 440 && mouseX < 460) {
    if (mouseY > 380) {
      col.b = 255;
    }
  }

  if (mouseIsPressed) {
    fill(col.r, col.g, col.b);
    noStroke();
    if (mouseY > 370) {
      noFill();
    }
    ellipse(mouseX, mouseY, 24, 24);
  }

}

// function mousePressed() {
//     background(0);
// }
