function setup() {

    var canvas = createCanvas(200, 200);
    background(0);

    dropzone = select("#dropzone");
    dropzone.dragOver(hilight);
    dropzone.dragLeave(unHilight);
    dropzone.drop(getImg, unHilight);


}

function hilight() {
    dropzone.style("background-color", '#CCC');

}

function unHilight() {
    dropzone.style("background-color", '#FFF');
}

function getImg(file) {
    createP(file.name);
    var img = createImg(file.data);
    img.size(100, 100);


}
