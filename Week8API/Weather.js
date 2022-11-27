let weatherjson = false;
let weatherloaded = 0;
let counter = 0;
let yr, ukdate;
let theta = 0.0; //scary... lol
let img;

function setup () {
    createCanvas(400, 400);
    setInterval(countdown, 1000); //first A-syncronus operation
    img = loadImage('temp.png');

}

function countdown () {
    let m = month();
    let d = day();
    counter --;

    if (counter<0){
        counter = 30;
        yr = int(random(1963, 2022));
        //every 30 seconds new data is loaded from the json

        let apidate = `${yr}-${m}-${d}`;
        ukdate = `${d}-${m}-${yr}`; 
        let weatherurl = "https://archive-api.open-meteo.com/v1/era5?"
        //Everything after the ? in the url are the variables we are calling
        weatherurl += `latitude=51.5002&longitude=-0.1262`;
        //This line of code adds to the URL string
        weatherurl += `&start_date=${apidate}&end_date`;
        weatherurl += "&daily=temperature_2m_max,rain_sum&timezone=auto";
        loadJSON(weatherurl, loadedweather);
    }

}

function loadedweather (json) {
    weatherjson = json;
    weatherloaded++;

}

function draw () {
    background(220);
    textSize(16);
    text(frameCount, width-150, 18);
    text(counter, width-90, 18);
    text(weatherloaded, width-25, 18);

    if(weatherjson===false) return;

    let temp = weatherjson.daily.temperature_2m_max;
    let rain = weatherjson.daily.rain_sum;

    let pos = map(temp, -20, 40, -1000, 0);
    image(img, 0, pos);

    let x = 10;
    let y = 30;
    textAlign(LEFT);
    text(`Date: ${ukdate}`, x, y);
    text(`Temp:  ${temp}°C`, x, y+15);
    text(`Rain:  ${rain}mm`, x, y+30);

}