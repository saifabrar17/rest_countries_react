import React from 'react';
import './Country.css'


const Country = (props) => {
    const {area, name,  region} = props.country;
    return (
        <div className="country">
            {/* <h1>Country: {name}</h1>
            <h4>Population: {population}</h4> */}
            <p>Name: {name.common}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;