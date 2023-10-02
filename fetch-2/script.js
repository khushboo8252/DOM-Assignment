function searchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = document.getElementById('cityInput').value;

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('cityName');
            const weatherIcon = document.getElementById('weatherIcon');
            const minTemp = document.getElementById('minTemp');
            const maxTemp = document.getElementById('maxTemp');
            const wind = document.getElementById('wind');
            const clouds = document.getElementById('clouds');
            const sunrise = document.getElementById('sunrise');
            const sunset = document.getElementById('sunset');

            cityName.textContent = data.name;
            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            minTemp.textContent = data.main.temp_min;
            maxTemp.textContent = data.main.temp_max;
            wind.textContent = data.wind.speed;
            clouds.textContent = data.clouds.all;
            sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            // Embed Google Map
            const map = document.getElementById('map');
            map.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${city}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
