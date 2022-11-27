let t = 0;
let z = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    noFill();
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < 200; i += 20) {
      bezier(
        // mouseX - i / 2.0,
        2.0 * t,
        40 + i,
        410 * t,
        20 * z,
        440,
        300,
        240 - i / 16.0,
        300 + i / 8.0
      );
    }
    t += 5;
    z += 10;
  }