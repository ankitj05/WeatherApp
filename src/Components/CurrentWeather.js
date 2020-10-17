import React from 'react';
import '../styles/Current.css'
import humidity from '../Images/humidity_white.svg'

const CurrentWeather = ({ response }) => {
    const temperature = response.main;
    const city = response.name;
    const weather = response.weather;
    var color = 'white';

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
            color = 'black'
        }
        else if (main.includes("Rain")) {
            mausam = 'rain';
        }
        else if (main.includes("Thunderstorm")) {
            mausam = 'thunder'
        }
        else {
            mausam = 'mist'
            color = 'black'
        }
        var div = document.getElementById("App");
        div.className = `App ${mausam}`
    }

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
                        <h1 className="Loading">Loading...  </h1>
                    )
            }

        </div >
    )
}

export default CurrentWeather;