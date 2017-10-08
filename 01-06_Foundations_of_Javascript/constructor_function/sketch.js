var bubbles = [];


function setup() {
    createCanvas(600, 400);

    for (var i = 0; i < 4; i++) {
        bubbles[i] = new Bubble(random(width), random(height));
    }
    //    console.log(bubbles);

}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].disp();
        bubbles[i].move();
    }

    if (bubbles.length == 50) {
        bubbles.splice(0, 1);
    }
}

function mouseDragged() {

    bubbles.push(new Bubble(mouseX, mouseY));
}

function mousePressed() {
    var r = 0;
    for (var i = 0; i < bubbles.length; i++) {
        r = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
        if (r <= 12) {
            bubbles.splice(i, 1);
        }
    }
}
