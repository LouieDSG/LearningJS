let Noise = 0.1;

function setup () {

    createCanvas(600, 600);

}

function draw () {

    background(0,10);
    translate(width/2, height/2);
    stroke(255, 0, 0)
    noFill();

    beginShape();

    for (let a = 0; a < TWO_PI; a += 0.1) {
        let xoff = map(cos(a), -1, 1, 0, Noise);
        let yoff = map(sin(a), -1, 1, 0, Noise);
        let r = map(noise(xoff, yoff), 0, 2, 100, 200); //the perlin noise range is always between 0 and 1
        let x = r * cos (a);
        let y = r * sin (a);
        vertex (x, y);

    }
    endShape(CLOSE);

    Noise += 0.05
}