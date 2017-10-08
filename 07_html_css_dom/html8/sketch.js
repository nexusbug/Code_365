var p;
var inputBox;
var slider;

function setup() {
    noCanvas();
    inputBox = createInput("enter here");
    slider = createSlider(10, 64, 16);
    p = createP("Starting Text");

    //inputBox.changed(doSomething);
    //slider.changed(changeSize);
    inputBox.input(doSomething);
    slider.input(changeSize);


}

function doSomething() {
    p.html(inputBox.value());
}

function changeSize() {
    p.style("font-size", slider.value() + "pt");
}
