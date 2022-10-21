var font;
var vehicles = [];

function preload () {
    font = loadFont('Silkscreen-Regular.ttf')
}

function setup() {
    createCanvas(1063, 600);
    background(5);
    // textFont(font);
    // textSize(200);
    // fill(255);
    // noStroke();
    // text('DSG', 170, 210);

    var points = font.textToPoints('DSG', 80, 400, 400);
    console.log(points);
    
    for(var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255, 0, 0);
        // strokeWeight(7);
        // point(pt.x, pt.y);
    }
}

function draw () {
    background(5);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}