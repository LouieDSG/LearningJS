
let tileSize = 50;
let tiles;
let font;

let speed = 0.1;

function preload() {

    font = loadFont('HelveticaNeue.ttf')
}

function setup () {

    createCanvas(1000, 800);

    background(0);

    let pg = createGraphics(width, height) //make sure to add width and height to work


    //code formatting TYPE
    pg.background(0, 10);
    pg.textFont(font);
    pg.textAlign(CENTER, CENTER);
    pg.textSize(300);
    // pg.noFill(0);
    // pg.noStroke();
    pg.stroke(255);
    pg.text('DSG', pg.width/2, pg.height/2.2);

    pg.textSize(12);
    for (let i=0; i<500; i++) {
        pg.text('DSG', random(pg.width), random(pg.height));
    }

    tiles = [];     //This sets the code up, the the constructor does the work

    for (let y=0; y<pg.height; y+=tileSize) {
        for (let x=0; x<pg.width; x+=tileSize) {
            let tile = new Tile(x, y, tileSize, pg);
            tiles.push(tile);
        }
    }
    console.log(tiles);
}

function draw () {

    for(let i=0; i<tiles.length; i++){
        tiles[i].display();
    }

    speed +=0.05;

}

class Tile {
    constructor(x, y, w, pg) {
        this.x = x;
        this.y = y;

        this.img = createImage(w, w);
        this.img.copy(pg, x,y, w,w, 0,0, w,w);
    }

display() {
    push();
    translate(this.x, this.y);
    // rotate(map(height, 0,width, speed,TWO_PI));
    rotate(map(height, 0,TWO_PI));
    image(this.img, 100,0) 
    pop();
  }

}