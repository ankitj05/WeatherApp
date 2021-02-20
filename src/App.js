import React from 'react';
import './App.css';
import CurrentWeather from './Components/layout/current/CurrentWeather';
import ForecastWeather from './Components/layout/forecast/Forecast';
import logo from './Images/Logo.svg'
import Search from './Components/layout/Search';
import WeatherState from './context/WeatherState';

const App = () => {

  return (
    <WeatherState>
      <div id="App" className="App">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <Search />
        <CurrentWeather />
        <ForecastWeather />
      </div>
    </WeatherState>
  );
}

export default App;
