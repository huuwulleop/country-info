import React from "react";

const CountryData = ({ country }) => {
    const languages = country.languages

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>

            <h4>Languages:</h4>
            <ul>
                {Object.entries(languages).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt='country-flag' />
        </div>
    )
}

export default CountryData
