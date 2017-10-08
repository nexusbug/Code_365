var button = true;


function setup() {
    createCanvas(300, 200);
    background(0);

}

function draw() {
    if (button) {
        background(0);
    } else {
        background(255);
    }

    rectMode(CENTER);
    stroke(155);
    strokeWeight(4);
    noFill();


    if (mouseX > 130 && mouseX < 170 && mouseY > 80 && mouseY < 120) {
        fill(255, 0, 200);
    }
    rect(150, 100, 40, 40);
}

function mousePressed() {
    if (mouseX > 130 && mouseX < 170 && mouseY > 80 && mouseY < 120) {
        button = !button;
    }
}
