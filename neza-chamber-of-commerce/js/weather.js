
function weatherInfo () {
    let weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=19.4116&lon=-99.0212&units=imperial&exclude=minutely,hourly&appid=8647c7488ee65eeef25bce2fbb5f6304"

    fetch(weatherUrl)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (weatherObject) {
            console.table(weatherObject);  // temporary checking for valid response and data parsing
            let currentTemp = weatherObject["current"];
            let dailyTemp = weatherObject["daily"];

            let temp = document.getElementById("temperature");
            let condition = document.getElementById("condition");
            let humidity = document.getElementById("humidity");

            temp.innerHTML = `${currentTemp.temp} °F`;
            condition.innerHTML = currentTemp.weather[0].main;
            humidity.innerHTML = `${currentTemp.humidity} %`

            dailyTemp.forEach((element, i) => {
                let forecastDay = new Date(element.dt * 1000);
                const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                
                if (i == 1 || i == 2 || i == 3) {
                    let forDay = document.getElementById(`day${i}`);
                    let forImg = document.getElementById(`img${i}`);
                    let forTemp = document.getElementById(`forTemp${i}`);

                    forDay.innerHTML = shortDays[forecastDay.getDay()];
                    forImg.setAttribute("src", `https://openweathermap.org/img/w/${element.weather[0].icon}.png`);
                    forImg.setAttribute("alt", element.weather[0].description);
                    forTemp.innerHTML = `${element.temp.day} °F`;
                }
            });
            
        }
    );
}

weatherInfo();