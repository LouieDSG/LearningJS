let weatherjson = false;
let weatherloaded = 0;
let counter = 0;
let yr, ukdate;
let theta = 0.0; // speed of waves, maybe I will use

//API variables

let noiseMax = 0.5;
let noiseMax2 = 0.3;

//visual variables

function setup () {

    createCanvas(windowWidth, windowHeight);

    setInterval(countdown, 1000); //first asyncronus operation 

}

function countdown(){
    // Variables to work with in the rest of the script
    let m = month();
    let d = day();
    counter--; 
  
    // Timer to load JSON data every 30 seconds
    if(counter<0){
      // Reset countdown to 30 secs
      counter = 30;        
      yr = int(random(1963, 2022));
      // Build date strings for the API URL and to draw
      let apidate = `${yr}-${m}-${d}`;
      ukdate = `${d}-${m}-${yr}`;
      // Build the weather URL (see https://open-meteo.com/en/docs#api_form) 
      let weatherurl = "https://archive-api.open-meteo.com/v1/era5?";
      weatherurl += `latitude=51.5002&longitude=-0.1262`;
      weatherurl += `&start_date=${apidate}&end_date=${apidate}`;
      weatherurl += "&daily=temperature_2m_max,rain_sum&timezone=auto";
      // Load the JSON
      loadJSON(weatherurl, loadedweather); 
    }
  }

function loadedweather(json) {

    weatherjson = json;
}

function draw () {

//drawing text to display weather info

    textSize(18);
    text(frameCount, width-150, 18)
    text(counter, width-100, 18)
    text(weatherloaded, width-50, 18)

//drawing for weather visualiser

    if(weatherjson===false) return;

    let temp = weatherjson.daily.temperature_2m_max;
    let rain = weatherjson.daily.rain_sum;

    let textX = 10;
    let textY = 30;
    textAlign(LEFT);
    text(`Date: ${ukdate}`, textX, textY);
    text(`Temp: ${temp}°C`, textX, textY+30);
    text(`Rain: ${rain}mm`, textX, textY+60);


    ///NEED TO FIX THIS

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



    beginShape();

    stroke(255, 0, 0);

    for(let a = 0; a < TWO_PI; a+=0.1) {
        let xoff = map(cos(a), -10, 20, 0, noiseMax);
        let yoff = map(sin(a), -10, 1, 0, noiseMax);
        // let r = random(mouseX, mouseY);
        let r = map(noise(xoff, yoff), 0, 1, 140, 450);
        let x = r * cos (a);
        let y = r * sin (a);
        vertex(x,y)

    }
    endShape(CLOSE);


    beginShape();

    stroke(255, 0, 0);

    for(let a = 0; a < TWO_PI; a+=0.1) {
        let xoff = map(cos(a), -10, 30, 0, noiseMax);
        let yoff = map(sin(a), -10, 1, 0, noiseMax);
        // let r = random(mouseX, mouseY);
        let r = map(noise(xoff, yoff), 0, 1, 130, 400);
        let x = r * cos (a);
        let y = r * sin (a);
        vertex(x,y)

    }
    endShape(CLOSE);


    noiseMax += 0.01;

    noiseMax2 += 0.02;

}