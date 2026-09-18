import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");

  const {
    weather,
    loading,
    error,
    searchWeather
  } = useWeather();

  useEffect(() => {
    if (weather) {
      document.title = `${weather.city} Weather`;
    } else {
      document.title = "Weather App";
    }
  }, [weather]);

  function handleSearch() {
    searchWeather(city);
  }

  return (
    <div className="app">

      <h1 className="app-title">
        Weather App
      </h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && (
        <div className="loading">
          <p className="loading-text">
            Searching for weather...
          </p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-message">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && weather && (
        <WeatherCard
          city={weather.city}
          temperature={weather.temperature}
          humidity={weather.humidity}
          windSpeed={weather.windSpeed}
          weatherCode={weather.weatherCode}
        />
      )}

    </div>
  );
}

export default App;