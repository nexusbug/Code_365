var canvas;
var h2;
var x = 100;
var y = 100;

function setup() {
    canvas = createCanvas(200, 200);
    h2 = createElement("h2", "This header created by js");
    createP("This is p created by javascript");

    canvas.position(200, 300);
    //h2.position(300, 400);




}

function draw() {
    background(155);
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(x, y, 30, 30);
    h2.position(x + 10, y + 20);
    x = x + random(-2, 2);

}

function mousePressed() {
    createP("random is " + floor(random(0, 9)));
    h2.html("Now Im gonna show you a random number")
}
