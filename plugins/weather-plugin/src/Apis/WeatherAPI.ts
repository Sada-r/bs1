// src/api/weatherApi.ts
import axios from 'axios';

const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  temperature: number;
  description: string;
}

export async function fetchWeather(location: string): Promise<WeatherData> {
  try {
    const response = await axios.get(`${BASE_URL}?q=${location}&appid=${WEATHER_API_KEY}`);
    const data = response.data;
    const weatherData: WeatherData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
