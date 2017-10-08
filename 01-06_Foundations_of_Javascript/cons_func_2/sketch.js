var bubbles = [];


function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 20; i++) {
        var x = random(width);
        var y = random(height);
        bubbles.push(new Bubble(x, y, 24));
    }
}

function draw() {
    background(0);

    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].disp();
        bubbles[i].update();

        if (bubbles[i].del()) {
            bubbles.splice(i, 1);

        }
        for (var j = i - 1; j >= 0; j--) {
            if (bubbles[i].checkWith(bubbles[j])) {
                bubbles[i].changeColor();
                bubbles[j].changeColor();
            }
        }
    }
}

function mousePressed() {
    bubbles.push(new Bubble(mouseX, mouseY, 24));
}
