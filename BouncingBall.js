var x = 0;
let speed = 3;

function setup() {
    createCanvas(600,400);

}

function draw() {
    background(0);
    stroke(255, 0, 0)
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 200, 200);

    if (x > width) {
        speed = -3;
    }

    x = x + speed;
}


