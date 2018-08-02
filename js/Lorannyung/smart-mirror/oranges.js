// Variable Declaration
var amOrPm;
var A = 130;
var realminute;
var numberCount = 0;
var currentTemp, currentHour, intMonth, intDay, intYear, disCountry, disCity;
var start;
var x, y;

function integerMonth() {
  if (month() == 1) return "January";
  if (month() == 2) return "February";
  if (month() == 3) return "March";
  if (month() == 4) return "April";
  if (month() == 5) return "May";
  if (month() == 6) return "June";
  if (month() == 7) return "July";
  if (month() == 8) return "August";
  if (month() == 9) return "September";
  if (month() == 10) return "October";
  if (month() == 11) return "November";
  if (month() == 12) return "December";
}

function weatherLength(){
  if (weather.main.temp.toString().length >= 3 && weather.main.temp.toString().includes('-')) return (weather.main.temp.toString().length - 1.00);
  if (weather.main.temp.toString().length <= 2) return (weather.main.temp.toString().length);
  else if (weather.main.temp.toString().length >= 3 && weather.main.temp.toString().length < 4 ) return (weather.main.temp.toString().length - 0.5);
  else if (weather.main.temp.toString().length >= 4) return (weather.main.temp.toString().length - 0.75);
  else if (weather.main.temp.toString().length >= 5) return (weather.main.temp.toString().length - 0.25);
  else return (weather.main.temp.toString().length);

}

function weatherLength2(value) {
    var temp = value.toString().split();
    var tempInt = 0;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == "." || temp[i] == "-") {
            tempInt += 0.5;
        } else {
            tempInt++;
        }
    }
}

function drawScreen() {
  // Border
  fill(200);
  rect (15, 15, displayWidth - 30 , displayHeight - 30);
  fill(0)
  rect (26, 26, displayWidth - 52 , displayHeight - 52);

  // Information
  noStroke();
  fill(255);
  textSize(90);
  text(currentHour + ':' + realminute, 55, 160);
  text(currentTemp, displayWidth - (90/weatherLength()+ (weatherLength()*50) + A), 160);
  textSize(45);
  text("°C", displayWidth - (90/weatherLength()+ (weatherLength()*50) - (textWidth(currentTemp)*2) + A), 115);
  textSize(35);
  text(intMonth + ' ' + intDay + ', ' + intYear, 60, 75);
  text(disCity + ', '+ disCountry, displayWidth - (100/weatherLength()+ (weatherLength()*50) + A), 75);

  // A box
  fill(0);
  rect(x, y, width, height);
}

function logics() {
  numberCount++; // frameRate + resetable

  if (minute() < 10) {
    realminute = "0" + minute();
  } else {
    realminute = minute();
  }

  if (numberCount >= 432000) { // 7200s(2h) * 60fps
    intMonth = integerMonth();
    intDay = day();
    intYear = year();
    currentCount = 0;
  }

  if (numberCount >= 36000) { // 600s(10min) * 60fps
    currentTemp = weather.main.temp;
  }

  if (!start) { // Make the box move
    x = 0; y = 0;
  } else {
    x += width / 100;
    y += height / 100;
  }
}
