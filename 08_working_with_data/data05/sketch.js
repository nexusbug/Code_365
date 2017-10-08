var a = 0;
var x;
var y;
var issData;
var ix = 0;
var iy = 0;

function setup() {
    createCanvas(400, 400);

    setInterval(whereIss, 1000);
}

function whereIss() {
    loadJSON('http://api.open-notify.org/iss-now.json', getData, 'jsonp');
}

function getData(iss) {
    issData = iss;
    x = issData.iss_position.longitude;
    y = issData.iss_position.latitude;

    ix = map(x, -180, 180, 0, width);
    iy = map(y, -90, 90, 0, height);

    //    console.log(x);
    //    console.log(y);
}

function draw() {

    background(0);
    stroke(155);
    fill(255);
    line(a, 0, a, height);
    a += 1;
    if (a == width) {
        a = 0;
    }

    if (issData) {
        ellipse(ix, iy, 24, 24);
    }



}
