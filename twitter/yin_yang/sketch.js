let angle = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  rotate(PI-angle);

  fill(0);
  rect(0, -height * 1.5, width * 1.5, height * 3);
  fill(255);
  rect(-width * 1.5, -height, width * 1.5, height * 3);
  fill(0);
  arc(0, 0, 200, 200, HALF_PI, -HALF_PI);
  fill(255);
  arc(0, 0, 200, 200, -HALF_PI, HALF_PI);
  noStroke();
  ellipse(0, -50, 100);
  fill(0);
  ellipse(0, -50, 20);
  ellipse(0, 50, 100);
  fill(255);
  ellipse(0, 50, 20);

  angle += 0.03;

}



/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365

About
yin and yang
*/
