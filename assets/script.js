var apiKey = '70cd7f91f800d28afddcb09daee627b7'
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
            var lat = data.coord.lat;
            var long = data.coord.lon;


            cityName.textContent = data.name;
            temp.textContent = 'Temp: ' + data.main.temp + ' °F';
            wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

            cityContainerEl.appendChild(cityName);
            cityContainerEl.appendChild(temp);
            cityContainerEl.appendChild(wind);
            cityContainerEl.appendChild(humidity);

            var oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" + apiKey + "&units=imperial";

            fetch(oneCallApi)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                })
            weekHeader.textContent = 'Weekly Forecast:';

            first.classList.add('day-container');
            second.classList.add('day-container');
            third.classList.add('day-container');
            fourth.classList.add('day-container');
            fifth.classList.add('day-container');

            var firstDate = document.createElement('h4');
            var secondDate = document.createElement('h4');
            var thirdDate = document.createElement('h4');
            var fourthDate = document.createElement('h4');
            var fifthDate = document.createElement('h4');

            var firstTemp = document.createElement('p');
            var secondTemp = document.createElement('p');
            var thirdTemp = document.createElement('p');
            var fourthTemp = document.createElement('p');
            var fifthTemp = document.createElement('p');

            var firstWind = document.createElement('p');
            var secondWind = document.createElement('p');
            var thirdWind = document.createElement('p');
            var fourthWind = document.createElement('p');
            var fifthWind = document.createElement('p');

            var firstHumidity = document.createElement('p');
            var secondHumidity = document.createElement('p');
            var thirdHumidity = document.createElement('p');
            var fourthHumidity = document.createElement('p');
            var fifthHumidity = document.createElement('p');


            // day forcast //

            firstDate.textContent = data.daily[0].dt;
            firstTemp.textContent = 'Temp: ' + data.daily[0].temp.day + ' °F';
            firstWind.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH';
            firstHumidity.textContent = 'Humidity: ' + data.daily[0].humidity + '%';

            first.appendChild(firstDate);
            first.appendChild(firstTemp);
            first.appendChild(firstWind);
            first.appendChild(firstHumidity);

            secondDate.textContent = data.daily[1].dt;
            secondTemp.textContent = 'Temp: ' + data.daily[1].temp.day + ' °F';
            secondWind.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH';
            secondHumidity.textContent = 'Humidity: ' + data.daily[1].humidity + '%';

            second.appendChild(secondDate);
            second.appendChild(secondTemp);
            second.appendChild(secondWind);
            second.appendChild(secondHumidity);

            thirdDate.textContent = data.daily[2].dt;
            thirdTemp.textContent = 'Temp: ' + data.daily[2].temp.day + ' °F';
            thirdWind.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH';
            thirdHumidity.textContent = 'Humidity: ' + data.daily[2].humidity + '%';

            third.appendChild(thirdDate);
            third.appendChild(thirdTemp);
            third.appendChild(thirdWind);
            third.appendChild(thirdHumidity);

            fourthDate.textContent = data.daily[3].dt;
            fourthTemp.textContent = 'Temp: ' + data.daily[3].temp.day + ' °F';
            fourthWind.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH';
            fourthHumidity.textContent = 'Humidity: ' + data.daily[3].humidity + '%';

            fourth.appendChild(fourthDate);
            fourth.appendChild(fourthTemp);
            fourth.appendChild(fourthWind);
            fourth.appendChild(fourthHumidity);

            fifthDate.textContent = data.daily[4].dt;
            fifthTemp.textContent = 'Temp: ' + data.daily[4].temp.day + ' °F';
            fifthWind.textContent = 'Wind: ' + data.daily[4].wind_speed + ' MPH';
            fifthHumidity.textContent = 'Humidity: ' + data.daily[4].humidity + '%';

            fifth.appendChild(fifthDate);
            fifth.appendChild(fifthTemp);
            fifth.appendChild(fifthWind);
            fifth.appendChild(fifthHumidity);
        })
};

searchBtn.addEventListener('click', getApis);