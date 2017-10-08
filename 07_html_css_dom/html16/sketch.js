var sliders = [];
var angle = 0;
var x;

function setup() {
    noCanvas();
    for (var i = 0; i < 60; i++) {
        sliders[i] = createSlider(0, 100, 50);
    }
}

function draw() {
    //x = random(35, 65);
    var offset = 0;
    for (var i = 0; i < sliders.length; i++) {
        offset += 0.25;
        x = map(sin(angle + offset), -1, 1, 0, 100);

        sliders[i].value(x);
    }
    angle += 0.1;
}
