export async function getCoordinates(city) {
  const url =
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to find location");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return data.results[0];
}

export async function getWeather(city) {
  const location = await getCoordinates(city);

  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=celsius&wind_speed_unit=kmh`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch weather");
  }

  const data = await response.json();

  return {
  city: location.name,
  temperature: data.current.temperature_2m,
  humidity: data.current.relative_humidity_2m,
  windSpeed: data.current.wind_speed_10m,
  weatherCode: data.current.weather_code
};
}