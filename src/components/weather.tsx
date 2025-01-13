'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  description: string;
  icon: string;
}

const weatherIcons: { [key: string]: string } = {
  'clear': '☀️',
  'mostly clear': '🌤️',
  'partly cloudy': '⛅',
  'mostly cloudy': '🌥️',
  'cloudy': '☁️',
  'rain': '🌧️',
  'snow': '🌨️',
  'thunderstorm': '⛈️',
  'fog': '🌫️'
};

function getWeatherIcon(description: string): string {
  const lowercaseDesc = description.toLowerCase();
  for (const [key, icon] of Object.entries(weatherIcons)) {
    if (lowercaseDesc.includes(key)) {
      return icon;
    }
  }
  return '🌡️'; // default icon
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            console.log('Fetching weather with coordinates:', { latitude, longitude });

            // First, get the grid point from NWS API
            const pointsResponse = await fetch(
              `https://api.weather.gov/points/${latitude},${longitude}`,
              {
                headers: {
                  'User-Agent': '(Perfect Food and Gas, contact@perfectfoodandgas.com)'
                }
              }
            );

            if (!pointsResponse.ok) {
              throw new Error(`NWS API error: ${pointsResponse.status}`);
            }

            const pointsData = await pointsResponse.json();
            console.log('Points data:', pointsData);

            // Then get the forecast using the grid endpoint
            const forecastResponse = await fetch(
              pointsData.properties.forecast,
              {
                headers: {
                  'User-Agent': '(Perfect Food and Gas, contact@perfectfoodandgas.com)'
                }
              }
            );

            if (!forecastResponse.ok) {
              throw new Error(`NWS API error: ${forecastResponse.status}`);
            }

            const forecastData = await forecastResponse.json();
            console.log('Forecast data:', forecastData);

            const currentPeriod = forecastData.properties.periods[0];
            setWeather({
              location: pointsData.properties.relativeLocation.properties.city,
              temperature: currentPeriod.temperature,
              humidity: currentPeriod.relativeHumidity?.value ?? 0,
              description: currentPeriod.shortForecast,
              icon: getWeatherIcon(currentPeriod.shortForecast)
            });
          } catch (error) {
            console.error('Weather fetch error:', error);
            let errorMessage = 'Unable to fetch weather data. ';
            if (error instanceof Error) {
              errorMessage += error.message;
            }
            setError(errorMessage);
          }
        },
        () => {
          setError('Location access denied');
        }
      );
    } else {
      setError('Geolocation is not supported');
    }
  }, []);

  if (!weather) {
    return (
      <div className="flex items-center justify-center p-4">
        {error ? (
          <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="font-medium mb-1">Weather Service Error</p>
            <p className="text-sm text-red-500">{error}</p>
            <p className="text-xs text-red-400 mt-2">Please check browser console for details</p>
          </div>
        ) : (
          <div className="text-blue-600 text-center">
            <svg className="animate-spin h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p>Loading weather data...</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">{weather.location}</h2>
          <div className="flex items-center">
            <span className="text-4xl mr-2">{weather.icon}</span>
            <p className="text-lg">{weather.description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold mb-1">{Math.round(weather.temperature)}°F</p>
          <div className="flex items-center justify-end space-x-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>{Math.round(weather.humidity)}% Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}