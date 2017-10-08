var mapimg;
var zoomlvl = 1;
var url1 = "https://api.mapbox.com/styles/v1/mapbox/";
var maptype = "dark-v9/static/";
var lngtude = "0,";
var lttude = "0,";
var zoom = "1,";
var rtate = "0,";
var tilt = "0/";
var mapsize = "1024x700";
var token = "?access_token=pk.eyJ1IjoibmV4dXNidWciLCJhIjoi" +
  "Y2o4N2ltMXV6MTByOTMydWRpdGI3cXpiayJ9.tq7bmuk6rMiXZpXgCyURdQ";

var url = url1 + maptype + lngtude + lttude + zoom +
  rtate + tilt + mapsize + token;

var clat = 0;
var clon = 0;

var lat = 49.2827; //North Coord
var lon = -123.1207; //East Coord

var earthquakes;

function preload() {
  mapimg = loadImage(url);
  earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
}

// Web mercator substitute for square map to rectangle map
function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoomlvl);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoomlvl);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 700);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);



  for (var i = 0; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);
    var lat = data[1];
    var lon = data[2];
    var mag = data[4];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    //mag = pow(10, mag);
    mag = sqrt(mag);

    //var magmax = sqrt(pow(10, 10));

    var d = map(mag, 0, sqrt(10), 0, 8);
    fill(0, 255, 255, 200);
    ellipse(x, y, d, d);
  }


}
