// let xpos = 5;
// let xstep = 5;
// let t = 0.5;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     rectMode(CENTER);
//     background(0);
// }

// function draw() {

//     // background(0);


//     for(let i = 0; i < width/xstep; i++) {
//         fill(255, 0, 0);

//         factor = i/20;

//         ypos = map(noise(factor), 0, 1, 0, height);


//         // ypos = map(noise(), 0, 1, 0, height);

//         rect(xpos + (xstep * i), ypos, xstep, xstep)
//     }

//     t += 0.005;

//     if (frameCount % 100 == 0) {
//         background(0);
//       }
// }

// function mousePressed() {
//     background(0);
// }


// NEW 

let xpos = 0.01;
let start = 0;
let t = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 5);
  
  noFill();

  beginShape();
  let xoff = start;

  for (let x = 0; x < width; x++) {
    stroke(255, 0, 0);

    let y = noise(t *xoff) * height;
    vertex(x, y);
    
    xoff += xpos;
  }
  endShape();
  
  start += xpos;

  t += 0.001;

      if (frameCount % 100 == 0) {
        background(0);
      }
  
//   noLoop();
}



