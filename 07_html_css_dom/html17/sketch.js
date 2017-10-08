var sliders = [];
var angle = 0;
var x;
var canvas;
var y = 1;
var a = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas
    for (var i = 0; i < 60; i++) {
        sliders[i] = createSlider(0, 100, 50);
    }

    background(155);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function draw() {

    a += y;
    if (a == 255) {
        y = -y;
    } else if (a == 0) {
        y = -y;
    }

    //background(a);
    //x = random(35, 65);
    var offset = 0;
    for (var i = 0; i < sliders.length; i++) {
        offset += 0.25;
        x = map(sin(angle + offset), -1, 1, 0, 100);

        sliders[i].value(x);
    }
    angle += 0.1;


    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }



}
