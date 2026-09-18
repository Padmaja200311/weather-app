# Weather App

A responsive weather application built using React and JavaScript.

## Project Description

This application allows users to search for a city and view its current weather information.

The application first gets the city coordinates using the Open-Meteo Geocoding API and then uses those coordinates to fetch current weather information from the Open-Meteo Weather API.

## Features

- Search weather by city name
- Display current temperature
- Display humidity
- Display wind speed
- Display weather condition
- Weather icons
- Loading state
- Error handling
- Responsive design
- Enter key support for search

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- Open-Meteo API

## React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- Custom Hooks
- Event Handling
- Controlled Components
- Conditional Rendering
- async/await
- try/catch/finally

## Project Structure

```text
src/
├── components/
│   ├── SearchBar.jsx
│   └── WeatherCard.jsx
├── hooks/
│   └── useWeather.js
├── services/
│   └── weatherApi.js
├── App.jsx
├── main.jsx
└── index.css