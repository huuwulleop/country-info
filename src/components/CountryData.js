import React from "react";

const CountryData = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
        </div>
    )
}

export default CountryData
