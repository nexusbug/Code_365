var data;
var birds;

function preload() {
    data = loadJSON('birds.json');
}

function setup() {
    noCanvas();

    birds = data.birds;

    for (var i = 0; i < birds.length; i++) {
        createElement('h2', birds[i].family);
        var members = birds[i].members;
        for (var j = 0; j < members.length; j++) {
            createDiv(members[j]);
        }
    }


}
