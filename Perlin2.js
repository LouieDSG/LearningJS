var t;

function setup() {
  createCanvas(1400, 900);
//   stroke(255, 0, 0, 50);
//   noFill();
  t = 1;
  background(0);
}

function draw() {

    textSize(500);
    text('DSG', 150, 550);

  stroke(255, 0, 0, 50);
  noFill();

  var x1 = width * noise(t + 100);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 850);
  var x4 = width * noise(t + 200);
  var y1 = height * noise(t + 1);
  var y2 = height * noise(t + 650);
  var y3 = height * noise(t + 750);
  var y4 = height * noise(t + 850);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.007;

//   noStroke();
//   Fill(255, 0 , 0);

//   blendMode(SUBTRACT);

//   clear the background every 500 frames using mod (%) operator
//   if (frameCount % 500 == 0) {
// 	background(0);
//   }
}

function text() {


}





function mousePressed() {
    background(0);
}
