import React, { useState } from "react";

// components
import CountryData from "./CountryData";

const Country = ({ country }) => {
    const [hidden, setHidden] = useState(true)

    const toggleShow = () => {
        setHidden(!hidden)
    }

    return (
        <li>
            {country.name.common}
            <span> </span>
            <button onClick={toggleShow}>{hidden ? 'show' : 'hide'}</button>
            {!hidden && <CountryData country={country} />}
        </li>
    )
}

export default Country
