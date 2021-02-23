import React, { useContext } from 'react';
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
        <div className="text-white font-sans non-italic font-normal slashed-zero text-center font-montserrat">
            {
                (temperature && weather[0]) ? (
                    <div >
                        <h2 className="relative text-8xl text-center -mt-2">{city}</h2>
                        <div className="flex flex-wrap justify-around items-center mt-1 text-8xl md:flex-1">
                            <h3 className="">{parseInt(temperature.temp) + `\xB0C`}</h3>
                            <h3 className="break-words">{weather[0].main}</h3>
                            <div>
                                <img className="w-12 -ml-16 -mb-20" src={humidity} alt="icon"></img>
                                <h3 className="-mb-5">{temperature.humidity + ` %`}</h3>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div>
                            {(currentWeather.cod === '404') ? (
                                <div>
                                    <h1 className="text-center text-white">City Not Found</h1>
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
            mausam = 'bg-cloud';
        }
        else if (main.includes("Clear")) {
            mausam = 'bg-clear-sky';
        }
        else if (main.includes("Snow")) {
            mausam = 'bg-snow';
        }
        else if (main.includes("Rain")) {
            mausam = 'bg-rain';
        }
        else if (main.includes("Thunderstorm")) {
            mausam = 'bg-thunder'
        }
        else {
            mausam = 'bg-mist'
        }
        var div = document.getElementById("App");
        div.className = `min-h-screen h-full bg-center bg-no-repeat bg-cover ${mausam} opacity-80`
    }
}
export default CurrentWeather;