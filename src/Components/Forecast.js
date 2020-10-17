import React from 'react';
import ForecastItems from './ForecastItems';
import { v4 as uuid } from 'uuid';
import '../styles/Forecast.css';

const ForecastWeather = ({ response }) => {
    const items = response.list;
    return (
        <div className="forecast">
            {(items) ? (<div className="forecast-list">
                {
                    items.map(forecast => (
                        <ForecastItems key={uuid()} item={forecast} />
                    ))
                }
            </div>) : (<h1 className="Loading">Loading...  </h1>)}
        </div>
    )
}

export default ForecastWeather;