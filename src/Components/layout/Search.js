import React, { useContext, useState, useEffect } from 'react';
import WeatherContext from '../../context/weatherContext';

const Search = () => {
    const weatherContext = useContext(WeatherContext);
    const [search, setSearch] = useState('');

    const onChange = (e) => { setSearch(e.target.value) };

    const onSubmit = (e) => {
        e.preventDefault();
        if (search === '' || search === undefined) {
            alert('Please enter the location')
        }
        else {
            weatherContext.updateQuery(search);
            setSearch('');
        }
    }

    useEffect(() => {
        weatherContext.updateQuery('Pune');
    }, []);

    return (
        <div>
            <form className="search-form" onSubmit={onSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="City"
                    value={search}
                    onChange={onChange}
                />
                <button className="search-btn" type="Submit">
                    <i className="fa fa-search fa-1g" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}


export default Search;