function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'fb9a26da27c14cc6a78232129240301';

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                    <h2>${data.location.name}, ${data.location.country}</h2>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Weather: ${data.current.condition.text}</p>
            `;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>City not found. Please enter a valid city name.</p>';
        });
}
