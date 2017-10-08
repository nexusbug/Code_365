var images = [];
var img;

function preload() {
    img = loadImage("nexusbug.PNG");
}

function setup() {
    createCanvas(600, 400);

    noCursor();

    for (var i = 0; i < 2; i++) {
        var x = random(width);
        var y = random(height);
        images.push(new PutImg(img, x, y));
    }
}

function draw() {
    background(155);
    imageMode(CENTER);
    tint(255, 255);
    image(img, mouseX, mouseY);

    for (var i = images.length - 1; i >= 0; i--) {
        images[i].disp();
        images[i].update();

        if (images[i].lifetime < 0) {
            images.splice(i, 1);
        }

    }
    //    console.log(images);
}

function mousePressed() {
    images.push(new PutImg(img, mouseX, mouseY));
}
