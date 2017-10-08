var canvas;
var bgcolor;
var button;
var h2;
var p;
var sldr;
var input;

function setup() {
    canvas = createCanvas(200, 200);
    createP("");
    button = createButton("change color");
    sldr = createSlider(10, 100, 47);
    input = createInput("type your name");
    h2 = createElement("h2", "Your name");
    p = createP("This is p created by javascript");
    bgcolor = color(200);
    button.mousePressed(changeColor); //callback

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
    ellipse(100, 100, sldr.value(), sldr.value());
    text(input.value(), 10, 30);
    h2.html(input.value());


}
