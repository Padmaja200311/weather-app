import { useState } from "react";
import { getWeather } from "../services/weatherApi";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather(city) {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    loading,
    error,
    searchWeather
  };
}

export default useWeather;