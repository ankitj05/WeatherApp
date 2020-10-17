import React from 'react';
import '../styles/Forecast.css';
import humidity from '../Images/humidity.svg'

const ForecastItems = ({ item }) => {
    var forecast = getForecast(item);
    var date = getDate(item.dt);
    getIcon.bind(item)

    return (
        <div className="forecast-item">
            <h3 className="date">{`${date}`}</h3>
            <h3 className="humidity">
                <img className="humidity-icon" src={humidity} alt="icon"></img>
                {forecast.humidity + `%`}
            </h3>
            <h3 className="max-temperature">{parseInt(forecast.maxTemp) + `\xB0C`}</h3>
            <h3 className="min-temperature">{parseInt(forecast.minTemp) + `\xB0C`}</h3>
            <h3 className={"weather-forecast"}>{forecast.weather}</h3>
        </div>
    )
}

const getForecast = (forecast) => {
    var temp = forecast.temp.day;
    var maxTemp = forecast.temp.max;
    var minTemp = forecast.temp.min;
    var weather = forecast.weather[0].description;
    var humidity = forecast.humidity;

    var result = {
        temp,
        maxTemp,
        minTemp,
        weather,
        humidity
    }

    return result;
}

const getIcon = (forecast) => {
    var weather = forecast.weather[0].description;
    let div = document.getElementsByClassName("forecast-item")
    let weatherIcon = document.createElement('img');
    if (weather.includes("cloud")) {
        weatherIcon.innerHTML = <img src="../Images/cloud_black.svg"></img>
    }
    else if (weather.includes("clear")) {
    }
    else if (weather.includes("snow")) {
    }
    else if (weather.includes("mist")) {
    }
    else if (weather.includes("thunder")) {
    }
    else if (weather.includes("rain")) {
        weatherIcon.src = `../Images/rain_black.svg`
        weatherIcon.className = "icon"
        div.appendChild(weatherIcon)
    }
}

const getDate = (unix) => {
    var timestamp = new Date(unix * 1000);
    timestamp = timestamp.toString().split(' ');
    var date = `${timestamp[2]} ${timestamp[1]} , ${timestamp[0]}`;
    return date;
}

export default ForecastItems;