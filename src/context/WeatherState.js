import React, { useReducer } from 'react';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import {
    SET_LOADING,
    UPDATE_CURRENT_WEATHER,
    UPDATE_FORECAST
} from '../types';

let APP_ID = process.env.REACT_APP_API_KEY;

const WeatherState = (props) => {

    const initialState = {
        currentWeather: [],
        forecast: [],
        loading: false
    }

    const [state, dispatch] = useReducer(weatherReducer, initialState);

    const updateQuery = (query) => {
        setLoading();

        getCurrentCity(query);
        getForecastCity(query);
    }

    const getCurrentCity = async (query) => {
        let currentCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_ID}&units=metric`;
        var response = await fetch(currentCityUrl);
        var data = await response.json();
        dispatch({
            type: UPDATE_CURRENT_WEATHER,
            payload: data
        })
    }

    const getForecastCity = async (query) => {
        let forecastCityUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&appid=${APP_ID}&units=metric&cnt=5`;
        var response = await fetch(forecastCityUrl);
        var data = await response.json();
        if (data.cod && data.cod !== '200') {
            dispatch({
                type: UPDATE_FORECAST,
                payload: data
            })
        }
        else if (data !== undefined) {
            data.list = data.list.splice(1)
            dispatch({
                type: UPDATE_FORECAST,
                payload: data
            })
        }
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <WeatherContext.Provider
        value={{
            currentWeather: state.currentWeather,
            forecast: state.forecast,
            loading: state.loading,
            updateQuery,
        }}>
        {props.children}
    </WeatherContext.Provider>
}

export default WeatherState;