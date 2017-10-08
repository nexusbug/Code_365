var cir = {
    x: 0,
    y: 0,
    dia: 24,
}

function setup() {
    createCanvas(600, 400);
    background(0);

}

function draw() {
    stroke(255, 0, 250);
    strokeWeight(3);
    fill(0, 220, 225);
    while (cir.x <= width) {
        ellipse(cir.x, cir.y, cir.dia, cir.dia);
        for (cir.y = 0; cir.y <= height; cir.y += 50) {
            ellipse(cir.x, cir.y, cir.dia, cir.dia);
        }
        cir.x = cir.x + 50;
    }
}
