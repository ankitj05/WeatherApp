import React from 'react';
import humidity from '../../../Images/humidity.svg'

const ForecastItems = ({ item }) => {
    var forecast = getForecast(item);
    var date = getDate(item.dt);
    getIcon.bind(item)

    return (
        <div className="mx-4 mt-10 rounded-lg border border-solid border-black box-border bg-gray-200 bg-opacity-30 w-72 h-80 font-montserrat font-sans font-normal text-4xl">
            <h3 className="text-center mt-3">{`${date}`}</h3>
            <div className="mr-3">
                <img className="w-7 ml-40 mt-8" src={humidity} alt="icon"></img>
                <h3 className="font-light text-right -mt-8">{forecast.humidity + `%`}</h3>
            </div>
            <h3 className="font-light ml-5">{parseInt(forecast.maxTemp) + `\xB0C`}</h3>
            <h3 className="font-light mt-1 ml-5">{parseInt(forecast.minTemp) + `\xB0C`}</h3>
            <h3 className="text-3xl text-center mt-14 capitalize">{forecast.weather}</h3>
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
        weatherIcon.innerHTML = <img src="../../../Images/cloud_black.svg"></img>
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
        weatherIcon.src = `../../../Images/rain_black.svg`
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