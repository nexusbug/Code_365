var url;
var common;
var appid;
var city;
var units;

var data;

var button;

function setup() {

    createCanvas(400, 200);
    background(0);

    city = select('#city');

    button = select('#button');
    button.mousePressed(submitCity);

}

function submitCity() {
    common = "http://api.openweathermap.org/data/2.5/weather?q=";
    appid = "&appid=554d1b54eec24594fcf6b88b2a3addb6&units=";
    units = "metric";
    url = common + city.value() + appid + units;

    loadJSON(url, fetchData, 'jsonp');

}

function fetchData(weather) {
    data = weather;
}

function draw() {
    background(0);
    fill(255);
    if (data) {
        ellipse(100, 100, data.main.temp, data.main.temp);
        ellipse(300, 100, data.main.humidity, data.main.humidity);
    }
}
