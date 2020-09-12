
var weather; //Creating a global variable

var api = 'api.openweathermap.org/data/2.5/weather?q=';
//var city = 'London';
var api_Key = '&appid=c7c23d750f13ea42ebbbd870842fb92b';
var unit = '&units=metric';

var input;


function setupData() {

    var button = select('#submit');
    button.mousePressed(weatherCall);

    input = select('#city');
}

function weatherCall() {
    var url = api + input.value() + api_Key + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data; //Making our weather variable = parameter of data
}

function displayResult() {
    var icon;
    icon = getElementByClass('temp-icon');
    var value;
    value = getElementByClass('temp-value');
    var description;
    description = getElementByClass('temp-description');
    var location;
    location = getElementByClass('weather-location');

    if (weather) {
        value = weather.main.temp;
        return value;
    }
}