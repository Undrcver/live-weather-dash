var apiKey = 'b2e84c46f018834647d0f36e3c4ac96f'
var content = document.getElementById('content');
var cityContainerEl = document.querySelector('#city-container');
var searchBtn = document.querySelector('#search-btn');
var searchInput = document.getElementById('search-input');
var weekHeader = document.getElementById('week-header');
var first = document.getElementById('1day1');
var second = document.getElementById('2day2');
var third = document.getElementById('3day3');
var fourth = document.getElementById('4day4');
var fifth = document.getElementById('5day5')

var getApis = function () {

    var geoUrl = "https://api.openweathermap.org/data/2.5/weather/?&q=" + searchInput.value + "&appid=" + apiKey + "&units=imperial";



    fetch(geoUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('data for weather', data);

            cityContainerEl.classList.add('city');
            var cityName = document.createElement('h3');
            var temp = document.createElement('p');
            var wind = document.createElement('p');
            var humidity = document.createElement('p');
            var uvIndex = document.createElement('p');
            var latitude = data.coord.lat;
            var long = data.coord.lon;


            cityName.textContent = data.name;
            temp.textContent = 'Temp: ' + data.main.temp + ' °F';
            wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

            cityContainerEl.appendChild(cityName);
            cityContainerEl.appendChild(temp);
            cityContainerEl.appendChild(wind);
            cityContainerEl.appendChild(humidity);

            var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + long + "&appid=" + apiKey + "&units=imperial";

            fetch(oneCallApi)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                })
        })
};
