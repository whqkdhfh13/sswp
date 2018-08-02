function preload() {
 weather = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Edmonton&APPID=a91daf84655e083d34ed54a9e0b4d2d2&units=metric');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  textFont('Helvetica');
  currentTemp = weather.main.temp;
  intMonth = integerMonth();
  intDay = day();
  intYear = year();
  currentHour = hour();
  disCountry = weather.sys.country;
  disCity = weather.name;
  start = false;
}

function draw() {
  logics();
  drawScreen();
}
