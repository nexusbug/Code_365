var paragraphs;

function setup() {
    noCanvas();
    paragraphs = selectAll("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].mouseOver(hilight);
        paragraphs[i].mouseOut(unhilight);
    }



}

function hilight() {
    this.style("padding", "16pt");
    this.style("background-color", "#F0F");
    this.style("font-size", "18pt");

}

function unhilight() {
    this.style("padding", "5pt");
    this.style("background-color", "#FFF");
    this.style("font-size", "12pt");

}
