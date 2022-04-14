import React from "react";

const CountriesList = ({ filteredCountries }) => {
    return (
        <ul>
            {filteredCountries.map(fC => <li key={fC.ccn3}>{fC.name.common}</li>)}
        </ul>
    )
}

export default CountriesList
