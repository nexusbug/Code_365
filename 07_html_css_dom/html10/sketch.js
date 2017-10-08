var paragraphs;
var canvas;
var button;
var p;

function setup() {
    canvas = createCanvas(100, 100);
    canvas.parent("#canvasholder");
    background(155);
    p = select("#unicorn");

    p.style("padding", "8pt");

    p.mouseOver(changeClr);
    p.mouseOut(revertClr);

    button = select("#button");
    button.mousePressed(changeBg);

    paragraphs = selectAll(".rainbow");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style("font-size", "16pt");
    }
    p.style('font-size', '24pt');


}

function changeBg() {
    background(random(255));

}

function changeClr() {
    p.style("background-color", "#F0F");

}

function revertClr() {
    p.style("background-color", "#FFF");

}
