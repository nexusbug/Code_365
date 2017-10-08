var canvas;
var button;
var happy = ["rainbow", "unicorns", "purple", "bacteria"];

function setup() {
    canvas = createCanvas(200, 200);
    canvas.parent("canvas");
    button = select("#button");
    button.style("font-size", "12pt");
    button.mousePressed(makeHappy);

}

function makeHappy() {
    var i = floor(random(0, happy.length));
    var li = createElement("li", happy[i]);
    li.parent("#happy");
}

function draw() {
    background(0);
    rectMode(CENTER);
    fill(0, 255, 255);
    rect(100, 100, random(60), random(60));

}
