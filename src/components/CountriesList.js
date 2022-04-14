import React from "react";

// components
import CountryData from "./CountryData";

const CountriesList = ({ filteredCountries }) => {
    console.log(filteredCountries);

    return (
        <div>
            {filteredCountries.length === 1
                ? <CountryData country={filteredCountries[0]} />
                : (<ul>
                    {filteredCountries.map(fC => <li key={fC.ccn3}>{fC.name.common}</li>)}
                </ul>)
            }
        </div>

    )
}

export default CountriesList
