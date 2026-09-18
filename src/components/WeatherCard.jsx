function WeatherCard({
  city,
  temperature,
  humidity,
  windSpeed,
  weatherCode
}) {
  function getWeatherCondition(code) {
    if (code === 0) {
      return { text: "Clear Sky", icon: "☀️" };
    }

    if (code >= 1 && code <= 3) {
      return { text: "Cloudy", icon: "☁️" };
    }

    if (code === 45 || code === 48) {
      return { text: "Foggy", icon: "🌫️" };
    }

    if (code >= 51 && code <= 57) {
      return { text: "Drizzle", icon: "🌦️" };
    }

    if (code >= 61 && code <= 67) {
      return { text: "Rain", icon: "🌧️" };
    }

    if (code >= 71 && code <= 77) {
      return { text: "Snow", icon: "❄️" };
    }

    if (code >= 80 && code <= 82) {
      return { text: "Rain Showers", icon: "🌦️" };
    }

    if (code >= 95) {
      return { text: "Thunderstorm", icon: "⛈️" };
    }

    return { text: "Unknown", icon: "🌤️" };
  }

  const condition = getWeatherCondition(weatherCode);

  return (
    <div className="weather-card">

      <div className="city-section">
        <h2 className="city-name">
          {city}
        </h2>

        <p className="current-weather">
          Current Weather
        </p>
      </div>

      <div className="weather-condition">
        <div className="weather-icon">
          {condition.icon}
        </div>

        <p className="condition-text">
          {condition.text}
        </p>
      </div>

      <div className="temperature">
        <p className="temperature-value">
          {temperature}°C
        </p>
      </div>

      <div className="weather-details">

        <div className="weather-detail">
          <p className="detail-icon">💧</p>

          <p className="detail-label">
            Humidity
          </p>

          <p className="detail-value">
            {humidity}%
          </p>
        </div>

        <div className="weather-detail">
          <p className="detail-icon">💨</p>

          <p className="detail-label">
            Wind Speed
          </p>

          <p className="detail-value">
            {windSpeed} km/h
          </p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;