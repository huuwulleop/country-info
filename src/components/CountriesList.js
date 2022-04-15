import React from "react";

// components
import CountryData from "./CountryData";
import Country from "./Country";

const CountriesList = ({ filteredCountries }) => {
    console.log(filteredCountries);

    return (
        <div>
            {filteredCountries.length === 1
                ? <CountryData country={filteredCountries[0]} />
                : (<ul>
                    {filteredCountries.map(fC => (
                        <Country key={fC.ccn3} country={fC} />
                    ))}
                </ul>)
            }
        </div>

    )
}

export default CountriesList
