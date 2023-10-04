async function fetchWeather() {
    try {
        let APIKey = 'cd26a9ba159302799273a74bc8ea0f0b';
        let city = document.getElementById('cityInput').value;

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
        let data = await res.json();
        console.log(data);

        let iconId = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/w/${iconId}.png`;
        document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById("minTemp").innerText = data.main.temp_min;
        document.getElementById("maxTemp").innerText = data.main.temp_max;
        document.getElementById("wind").innerText = data.wind.speed;
        document.getElementById("clouds").innerText = data.clouds.all;
        document.getElementById("sunrise").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
        document.getElementById("googleMap").src = googleMapUrl;



           // Fetch 5-day forecast data
           const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`);
           const forecastData = await forecastRes.json();
           console.log(forecastData);
   
           // Update the forecast section in your HTML
           const forecastDaysContainer = document.getElementById("forecastDays");
           forecastDaysContainer.innerHTML = ""; // Clear previous forecast data
   
           for (let i = 0; i < forecastData.list.length; i += 8) {
               const forecastItem = forecastData.list[i];
               const date = new Date(forecastItem.dt * 1000);
               const minTemp = forecastItem.main.temp_min;
               const maxTemp = forecastItem.main.temp_max;
   
               const forecastDayElement = document.createElement("div");
               forecastDayElement.classList.add("forecast-day");
               forecastDayElement.innerHTML = `
                   <p>${date.toDateString()}</p>
                   <p>Min Temp: ${minTemp}°C</p>
                   <p>Max Temp: ${maxTemp}°C</p>
               `;
               forecastDaysContainer.appendChild(forecastDayElement);
           }
        // getForecastData(city);

    } catch (error) {
        console.error(error);
    }
}
