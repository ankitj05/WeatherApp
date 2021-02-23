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
            <form className="flex justify-center items-center" onSubmit={onSubmit}>
                <input
                    className="w-4/6 h-9 border-black rounded-2xl p-2 my-4 outline-none md:w-2/6"
                    type="text"
                    placeholder="City"
                    value={search}
                    onChange={onChange}
                />
                <button className="border-none -ml-10 py-1 my-4 " type="Submit">
                    <i className="fa fa-search fa-1g" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}


export default Search;