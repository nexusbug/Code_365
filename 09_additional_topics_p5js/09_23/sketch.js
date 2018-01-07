let angle = 0;

let graphics;

let x;
let y;

let offset1 = 0;
let offset2 = 10000;

let yo, xo;


function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(0);



  graphics = createGraphics(100, 100);
  graphics.background(0);

  x = 50;
  y = 50;

}

function draw() {
  background(0);

  graphics.fill(255);
  graphics.stroke(255);
  graphics.ellipse(x, y, 5);
  xo = map(noise(offset1), 0, 1, -1, 1);
  yo = map(noise(offset2), 0, 1, 1, -1);

  x += xo;
  y += yo;

  // image(graphics, 100, 200);
  for (let i = 0; i < 400; i += 100) {
    for (let j = 0; j < 400; j += 100) {
      image(graphics, i, j);
    }
  }

  if (x < 0 || x > graphics.width || y < 0 || y > graphics.height) {
    x = random(0, graphics.width);
    y = random(0, graphics.height);
  }



  // fill(0,255,255);
  // ellipse(mouseX,mouseY,32);

  offset1 += 0.01;
  offset2 += 0.01;


}
