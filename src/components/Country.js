import React from "react";

const Country = ({ country }) => {
    return (
        <li>
            {country.name.common}
            <span> </span>
            <button>show</button>
        </li>
    )
}

export default Country
