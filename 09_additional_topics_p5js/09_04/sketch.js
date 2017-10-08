var x = 0;

function setup() {
  createCanvas(200, 200);
  setTimeout(rainbow, 3000);
}

function rainbow(){
  createP('rainbow');
  setTimeout(rainbow, 3000);
}

function draw() {
  background(151);
  stroke(255);
  line(x, 0, x, height);

  x = x + 1;
  if (x > width) {
    x = 0;
  }
}
