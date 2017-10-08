var bubble = {
    x: 300,
    y: 200,
    dia: 10,
    r: 230,
    g: 0,
    b: 200,
}

function setup() {
    createCanvas(600, 400);
    background(0);

}

function draw() {
    bubble.x = random(0, width);
    bubble.y = random(0, height);
    bubble.r = random(150, 255);
    bubble.b = random(150, 240);
    noStroke();
    fill(bubble.r, bubble.g, bubble.b, 100, 100);
    ellipse(bubble.x, bubble.y, bubble.dia, bubble.dia);
}
