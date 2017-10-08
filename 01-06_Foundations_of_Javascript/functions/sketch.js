var a = 0;

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(150);
    road(a, 130);
    road(a, 270);
    car(260, 200, 255, 0, 0);
    car(70, 70, 0, 255, 255);
    car(450, 350, 255, 255, 0);

    a = a - 1; //road moving
}

function car(x, y, r, g, b) {

    // x: center of car in x direction
    // y: center of car in y direction
    // r: body color red value
    // g: body color green value
    // b: body color blue value
    //body

    rectMode(CENTER);
    fill(r, g, b); //set color for body
    triangle(x - 35, y - 45, x - 35, y - 15, x - 55, y - 15);
    triangle(x + 15, y - 45, x + 15, y - 15, x + 30, y - 15); //windshield

    rect(x - 10, y - 30, 50, 30); //upper body
    rect(x, y, 110, 35); //lower body

    //tires

    fill(0); //set black color for tires
    ellipse(x - 30, y + 20, 30, 30); //back tire
    ellipse(x + 30, y + 20, 30, 30); //front tire

    //rims

    fill(250); //set gray color for rims
    ellipse(x - 30, y + 20, 15, 15); //back rim
    ellipse(x + 30, y + 20, 15, 15); //front rim
}

function road(x, y) {

    // y: y coordinate of road

    fill(255);
    rectMode(CENTER);

    // draw road lines

    for (0; x <= width + 20; x += 60) {
        rect(x, y, 40, 10);
    }


}
