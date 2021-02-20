import {
    SET_LOADING,
    UPDATE_CURRENT_WEATHER,
    UPDATE_FORECAST
} from '../types';


export default (state, action) => {
    switch (action.type) {

        case UPDATE_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
                loading: false
            }

        case UPDATE_FORECAST:
            return {
                ...state,
                forecast: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state
            }
    }
} 