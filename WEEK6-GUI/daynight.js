let angle = 0;
let speed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noStroke();

    // buttonFast = createButton('fast');
    // buttonFast.position(100, 500);
    // buttonFast.mousePressed(Fast);

    // buttonSlow = createButton('slow');
    // buttonSlow.position(200, 500);
    // buttonSlow.mousePressed(Slow);

    slider = createSlider(180 , 360, 0);
    slider.position(80, 450);
    slider.style('width', '200px');
}

// function Fast() {
//     angle = 5;
// }

// function Slow() {
//     angle = 0.5;
// }

function draw() {
    background(0,10);

    fill(255, 0, 0, 20);
    rect(0, windowHeight/2, windowWidth);

    push();

    translate(width/2, height/2);
    rotate(angle * speed);
    fill(100);
    ellipse(0, -100, 50, 50);

    fill(100);
    ellipse(0, 100, 50, 50);

    fill(100);
    ellipse(0, 40, 50, 50);

    fill(100);
    ellipse(0, -40, 50, 50);

    fill(255);
    ellipse(0, -160, 50, 50);

    fill(255);
    ellipse(0, 160, 50, 50);

    fill(0);
    ellipse(0, 220, 50, 50);

    fill(0);
    ellipse(0, -220, 50, 50);

    fill(255);
    ellipse(0, -280, 50, 50);
    
    fill(255);
    ellipse(0, 280, 50, 50);

    fill(255);
    ellipse(0, -340, 50, 50);

    fill(255);
    ellipse(0, 340, 50, 50);

    pop();

    angle += 3;

    //0 1   180 360
    speed = map(slider.value(), 180, 0, 0, 2);

}

