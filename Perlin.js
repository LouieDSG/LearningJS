// function setup() {
//     createCanvas(400, 400);
//   }
  
//   function draw() {
//     background(0);
//     noFill();
//     stroke(255, 0, 0);
  
//     beginShape();
//     for (var x = 0; x < width; x++) {
//     //   var nx = map(x, 0, width, 0, 10);
//       var nx = random(100, 200);
//       var y = height * noise(nx);
//       vertex(x, y);
//     }
//     endShape();
//   }

var t;

function setup() {
  createCanvas(1400, 900);
  stroke(255, 0, 0, 50);
  noFill();
  t = 1;
  background(0);
}

function draw() {
  var x1 = width * noise(t + 100);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 850);
  var x4 = width * noise(t + 200);
  var y1 = height * noise(t + 1);
  var y2 = height * noise(t + 650);
  var y3 = height * noise(t + 750);
  var y4 = height * noise(t + 850);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.07;

//   clear the background every 500 frames using mod (%) operator
//   if (frameCount % 500 == 0) {
// 	background(0);
//   }
}

function mousePressed() {
    background(0);
}

