var x = 0;
var seconds = 0;
var timer;
var button;
var interval;

var btnchange = false;

function setup() {
  createCanvas(200, 200);
  timer = createP('timer');
  button = createButton('start timer');
  button.style("font-size", "16px")
  button.mousePressed(changeTimer);
}

function secondCounter() {
  timer.html(seconds);
  seconds++;
}

function changeTimer() {

  if (btnchange) {
    clearInterval(interval);
    button.html("start timer");
    btnchange = !btnchange;
  } else {
    interval = setInterval(secondCounter, 1000);
    button.html("stop timer");
    btnchange = !btnchange;
  }

}


function draw() {
  background(51);
  stroke(255);
  line(x, 0, x, height);
  x += 3;
  if (x > width) {
    x = 0;
  }
}
