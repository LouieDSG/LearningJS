let noiseMax = 0.0;

let noiseMax2 = 0.0;

function setup () {

    createCanvas(windowWidth, windowHeight);

}

function draw () {

    stroke(0, 0, 255);

    background(0,10);
    translate(width/2, height/2);
    stroke(255, 0, 0);
    noFill();
    
    beginShape();
    for(let a = 0; a < TWO_PI; a+=0.1) {
        let xoff = map(cos(a), -10, 10, 0, noiseMax);
        let yoff = map(sin(a), -10, 10, 0, noiseMax);
        // let r = random(mouseX, mouseY);
        let r = map(noise(xoff, yoff), 0, 1, 150, 480);
        let x = r * cos (a);
        let y = r * sin (a);
        vertex(x,y)

    }
    endShape(CLOSE);



    // beginShape();

    // stroke(255, 0, 0);

    // for(let a = 0; a < TWO_PI; a+=0.1) {
    //     let xoff = map(cos(a), -10, 20, 0, noiseMax);
    //     let yoff = map(sin(a), -10, 1, 0, noiseMax);
    //     // let r = random(mouseX, mouseY);
    //     let r = map(noise(xoff, yoff), 0, 1, 140, 450);
    //     let x = r * cos (a);
    //     let y = r * sin (a);
    //     vertex(x,y)

    // }
    // endShape(CLOSE);


    // beginShape();

    // stroke(255, 0, 0);

    // for(let a = 0; a < TWO_PI; a+=0.1) {
    //     let xoff = map(cos(a), -10, 30, 0, noiseMax);
    //     let yoff = map(sin(a), -10, 1, 0, noiseMax);
    //     // let r = random(mouseX, mouseY);
    //     let r = map(noise(xoff, yoff), 0, 1, 130, 400);
    //     let x = r * cos (a);
    //     let y = r * sin (a);
    //     vertex(x,y)

    // }
    // endShape(CLOSE);


    noiseMax += 0.00;

    noiseMax2 += 0.02;




}