function setup() {
    createCanvas(200, 200);
    createElement("h2", "This header created by js");
    createP("This is p created by javascript");




}

function draw() {
    background(0);
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(100, 100, 30, 30);

}

function mousePressed() {
    createP("random is " + floor(random(0, 9)));
}
