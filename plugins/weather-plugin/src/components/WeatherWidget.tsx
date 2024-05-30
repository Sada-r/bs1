// src/components/WeatherWidget.tsx
import React, { useState, useEffect } from 'react';
import { fetchWeather, WeatherData } from '../Apis/WeatherAPI';

interface WeatherWidgetProps {
  location: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ location }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await fetchWeather(location);
        setWeather(weatherData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weather) {
    return <div>Failed to fetch weather data</div>;
  }

  return (
    <div>
      <h2>Weather in {location}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Description: {weather.description}</p>
    </div>
  );
};

export default WeatherWidget;
