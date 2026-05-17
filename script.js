async function getWeather() {

  const city = document.getElementById("cityInput").value;

  const response = await fetch(
    `http://127.0.0.1:5000/weather/${city}`
  );

  const data = await response.json();

  const resultDiv = document.getElementById("weatherResult");

  if (data.error) {
    resultDiv.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  resultDiv.innerHTML = `
    <h2>${data.city}</h2>
    <p>Temperature: ${data.temperature} °C</p>
    <p>Weather: ${data.weather}</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.wind_speed} m/s</p>
  `;
}