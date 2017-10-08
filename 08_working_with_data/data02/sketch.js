var x = 0;
var spaceData;

function setup() {
    createCanvas(200, 200);

    loadJSON('http://api.open-notify.org/astros.json', getData, 'jsonp');
}

function getData(dt) {
    spaceData = dt;
}

function draw() {
    background(0);
    stroke(255);
    fill(255);
    line(x, 0, x, height);
    x += 1;
    if (x == width) {
        x = 0;
    }

    if (spaceData) {
        randomSeed(5);
        for (var i = 0; i < spaceData.number; i++) {
            ellipse(random(width), random(height), 12, 12);
        }
    }

}
