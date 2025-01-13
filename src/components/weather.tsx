'use client';

import { useEffect, useState } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
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
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
            );
            
            if (!response.ok) {
              console.error('Weather API Error:', await response.text());
              throw new Error(`Weather API returned ${response.status}`);
            }
            
            const data = await response.json();
            if (data.cod && data.cod !== 200) {
              console.error('Weather API Error:', data);
              throw new Error(data.message || 'Weather API error');
            }
            
            setWeather(data);
          } catch (error) {
            console.error('Weather fetch error:', error);
            setError('Unable to fetch weather data. Please try again later.');
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
          <div className="text-red-600 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>{error}</p>
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
          <h2 className="text-2xl font-bold mb-1">{weather.name}</h2>
          <div className="flex items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-16 h-16 -ml-4 -my-2"
            />
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold mb-1">{Math.round(weather.main.temp)}°F</p>
          <div className="flex items-center justify-end space-x-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>{weather.main.humidity}% Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}