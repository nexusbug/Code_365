var numbers = [100, 25, 46, 74];
var x = 0;
//var y = 0;

function setup() {
    createCanvas(600, 400);
    background(155);
}

function draw() {

    //    x = random(0, 600);
    //    y = random(0, 400);
    //
    //    for (var i = 0; i < numbers.length; i++) {
    //        fill(random(0, 255), random(0, 255), random(0, 255));
    //        noStroke(255);
    //        ellipse(x, y, numbers[i], numbers[i])
    //        x = random(0, 600);
    //        y = random(0, 400);
    //    }

}

function mousePressed() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    noStroke(255);
    if (x == numbers.length) {
        x = 0;
    }
    ellipse(mouseX, mouseY, numbers[x], numbers[x]);
    x = x + 1;
}
