import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentWeather from './Components/CurrentWeather';
import ForecastWeather from './Components/Forecast';
import logo from './Images/Logo.svg'

const App = () => {

  const LAT = `18.5887772`;
  const LONG = `74.0053302`;
  const APP_ID = process.env.REACT_APP_API_KEY;

  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Pune');

  const currentPosUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_ID}&units=metric`
  const forecastPosUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${LAT}&lon=${LONG}&appid=${APP_ID}&units=metric`;

  const forecastCityUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&appid=${APP_ID}&units=metric&cnt=5`;
  const currentCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_ID}&units=metric`;

  useEffect(() => {
    getCurrentCity();
    getForecastCity();
  }, [query])

  const getCurrentCity = async () => {
    var response = await fetch(currentCityUrl);
    var data = await response.json();
    setCurrent(data);
  }

  const getForecastCity = async () => {
    var response = await fetch(forecastCityUrl);
    var data = await response.json();
    if (data.cod && data.cod !== '200') {
      setForecast(data);
    }
    else if (data !== undefined) {
      data.list = data.list.splice(1)
      setForecast(data);
    }
  }

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div id="App" className="App">
      <img src={logo} className="logo" alt="logo" />
      <form className="search-form" onSubmit={updateQuery}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="Submit">
          <i className="fa fa-search fa-1g" aria-hidden="true"></i>
        </button>
      </form>
      <CurrentWeather response={current} />
      <ForecastWeather response={forecast} />
    </div>
  );
}

export default App;
