var canvas;
var bgcolor;
var button;
var h2;
var p;
var sldr;
var nameInput;

function setup() {
    canvas = createCanvas(200, 200);
    createP("");
    button = createButton("change color");
    sldr = createSlider(10, 100, 47);
    nameInput = createInput("type your name");
    h2 = createElement("h2", "Get your mouse here");
    h2.style("background-color", "purple");
    h2.style("color", "white");
    h2.style("padding", "8pt");
    p = createP("This is p created by javascript");
    bgcolor = color(200);
    button.mousePressed(changeColor); //callback

    h2.mouseOver(changeStyle);
    h2.mouseOut(revertStyle);
    nameInput.changed(updateText);

    sldr.input(changeSize);



}

function changeSize() {
    p.style("font-size", sldr.value() + "px");
}

function changeStyle() {
    h2.style("background-color", "blue");

}

function revertStyle() {
    h2.style("background-color", "purple");

}

function getHere() {
    h2.html("your mouse is over me");
}

function getOut() {
    h2.html("your mouse is out");
}

function updateText() {
    h2.html(nameInput.value());
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
    text(nameInput.value(), 10, 30);




}
