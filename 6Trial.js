// let circleX = 100; 

// function setup() {

//     createCanvas(windowWidth, windowHeight);
//     background(0);
// }

// function draw() {

//     noStroke();
//     fill(255, 0, 0, 50);
//     circle(mouseX, mouseY, 75);
// }

// function mousePressed() {

//     background(0);
// }


// draw a spinning cone
// with radius 40 and height 7
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function draw() {
    stroke(255, 0, 0);
    rotateX(frameCount * 0.02);
    rotateZ(frameCount * 0.05);
    rotateY(frameCount * 0.01);
    rect(50, 200, 200, 0);
    fill(255, 0, 0)
    // fill(random)
  }

  function mousePressed() {
    background(0);
  }