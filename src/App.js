import React, { useState, useEffect } from "react";

import axios from "axios";

// components
import SearchForm from "./components/SearchForm";

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  const fetch = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log(res.data);
        setCountries(res.data)
      })
  }
  useEffect(fetch, [])

  const changeSearchFilter = (event) => {
    console.log(event.target.value);
    setSearchFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country => (
    country.name.common.includes(searchFilter)
  ))

  console.log(filteredCountries);

  return (
    <div>
      <SearchForm searchFilter={searchFilter} changeSearchFilter={changeSearchFilter} />
      {filteredCountries.length > 10
        ? 'Too many to list'
        : (
          <ul>
            {filteredCountries.map(fC => <li>{fC.name.common}</li>)}
          </ul>
        )
      }
    </div>
  )
}

export default App;
