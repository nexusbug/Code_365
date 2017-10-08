var canvas;
var bgcolor;
var button;
var h2;
var p;

function setup() {
    canvas = createCanvas(200, 200);
    createP("");
    button = createButton("change color");
    h2 = createElement("h2", "This header created by js");
    p = createP("This is p created by javascript");
    bgcolor = color(200);
    button.mousePressed(changeColor);

}

function changeColor() {
    bgcolor = color(random(255));
}

function mousePressed() {
    createP("random is " + floor(random(0, 9)));


}

function draw() {
    background(bgcolor);
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(100, 100, 30, 30);


}
