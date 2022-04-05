import React from "react";
import { changeCity } from "./citiesAction";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}

export const Cities = (props) => {
    const handleChange = (e) => {
        const city = e.target.value.split(',');
        props.store.dispatch(changeCity(`https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&units=imperial&appid=${process.env.API_KEY}`))
    }

    return (
        <select name="cities" className="form-control"
        onChange={ (e) => handleChange(e) }>
            {
                cities.map( city => (
                    <option value={[city.name,city.country]}
                    key={city.name+city.country}>
                        {city.name}, {city.country}
                    </option>
                ))
            }
        </select>
    );
}

const cities = [
    { name: 'Fresno', country: 'US' },
    { name: 'Los Angeles', country: 'US' },
    { name: 'New York', country: 'US' },
    { name: 'London', country: 'UK' },
    { name: 'Paris', country: 'FR' },
    { name: 'Madrid', country: 'ES' },
    { name: 'Tokyo', country: 'JP' },
    { name: 'Beijing', country: 'CN' },
    { name: 'Bangkok', country: 'TH' }
];