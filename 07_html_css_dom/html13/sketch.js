function setup() {

    for (var i = 0; i < 10; i++) {
        var p = createP("apples");
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.position(x, y);
        p.class("apple");
    }

    for (var i = 0; i < 10; i++) {
        var p = createA("#", "apricots");
        var x = floor(random(windowWidth));
        var y = floor(random(windowHeight));
        p.position(x, y);
        p.class("apricot");
        p.mousePressed(becomeApple);
    }


}


function becomeApple() {
    this.removeClass();
    this.class("apple");
}
