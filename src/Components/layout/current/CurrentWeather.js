import React, { useContext } from 'react';
import '../../../styles/Current.css'
import humidity from '../../../Images/humidity_white.svg'
import WeatherContext from '../../../context/weatherContext';

const CurrentWeather = () => {

    const weatherContext = useContext(WeatherContext);

    const { currentWeather } = weatherContext;

    const temperature = currentWeather.main;
    const city = currentWeather.name;
    const weather = currentWeather.weather;
    setClassBasedonWeather(temperature, weather);

    return (
        <div className="current">
            {
                (temperature && weather[0]) ? (
                    <div >
                        <h2 className={`city white`}>{city}</h2>
                        <div className={`current-summary white`}>
                            <h3 className={`temperature white`}>{parseInt(temperature.temp) + `\xB0C`}</h3>
                            <h3 className={`weather white`}>{weather[0].main}</h3>
                            <h3 className={`humidity white`}>
                                <img className="humidity-icon" src={humidity} alt="icon"></img>
                                {temperature.humidity + ` %`}
                            </h3>
                        </div>
                    </div>
                ) : (
                        <div>
                            {(currentWeather.cod === '404') ? (
                                <div>
                                    <h1 className="Loading">City Not Found</h1>
                                </div>
                            ) : (' ')}

                        </div>
                    )
            }

        </div >
    )
}

const setClassBasedonWeather = (temperature, weather) => {
    if (temperature && weather[0]) {
        let main = weather[0].main;
        let mausam = 'App';
        if (main.includes("Cloud")) {
            mausam = 'cloud';
        }
        else if (main.includes("Clear")) {
            mausam = 'clear-sky';
        }
        else if (main.includes("Snow")) {
            mausam = 'snow';
        }
        else if (main.includes("Rain")) {
            mausam = 'rain';
        }
        else if (main.includes("Thunderstorm")) {
            mausam = 'thunder'
        }
        else {
            mausam = 'mist'
        }
        var div = document.getElementById("App");
        div.className = `App ${mausam}`
    }
}
export default CurrentWeather;