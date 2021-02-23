import React from 'react';
import CurrentWeather from './Components/layout/current/CurrentWeather';
import ForecastWeather from './Components/layout/forecast/Forecast';
import Search from './Components/layout/Search';
import WeatherState from './context/WeatherState';

const App = () => {

  return (
    <WeatherState>
      <div id="App" className="min-h-screen	">
        <Search />
        <CurrentWeather />
        <ForecastWeather />
      </div>
    </WeatherState>
  );
}

export default App;
