let font;
function preload() {
  font = loadFont('Silkscreen-Regular.ttf');
}
function setup() {
  createCanvas(1400, 900, WEBGL);
  background(0);
}
function draw() {

  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);

  textFont(font);
  textSize(width / 10);
  text('DSG', 0, 0);
  textAlign(CENTER, CENTER);

  noFill();
  stroke(255, 0, 0);

}