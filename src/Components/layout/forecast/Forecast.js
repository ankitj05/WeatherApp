import React, { useContext } from 'react';
import ForecastItems from './ForecastItems';
import { v4 as uuid } from 'uuid';
import WeatherContext from '../../../context/weatherContext';

const ForecastWeather = () => {
    const weatherContext = useContext(WeatherContext);
    const { forecast } = weatherContext;
    const items = forecast.list;

    return (
        <div className="forecast">
            {(items) ? (<div className="flex justify-around -mt-4 flex-wrap">
                {
                    items.map(forecast => (
                        <ForecastItems key={uuid()} item={forecast} />
                    ))
                }
            </div>) : ('')}
        </div>
    )
}

export default ForecastWeather;