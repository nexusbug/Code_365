//var p;

var images = [];

function setup() {
    noCanvas();

    var button = createButton("clear images");
    button.style('margin', '24px');
    button.style('padding', '14px');
    button.mousePressed(delPhoto);

    for (var i = 0; i < 5; i++) {
        p = createP("This is a link: ");
        p.style("background-color", "#CCC");
        p.style("padding", '24px');

        var a = createA("#", "apples");
        a.parent(p);
        a.mousePressed(addPhoto);

    }

}

function addPhoto() {
    var img = createImg("apple.jpg");
    var asd = createImg("asd.jpg");
    img.size(100, 100);
    asd.size(100, 100);
    img.parent(this.parent());
    asd.parent(this.parent());

    images.push(img);
}

function delPhoto() {
    //images = selectAll('img');

    for (var i = 0; i < images.length; i++) {
        images[i].remove();
    }
}
