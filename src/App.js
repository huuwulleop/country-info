import React, { useState, useEffect } from "react";

import axios from "axios";

// components
import SearchForm from "./components/SearchForm";
import CountriesList from "./components/CountriesList";

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
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  ))

  console.log(filteredCountries);

  return (
    <div>
      <SearchForm searchFilter={searchFilter} changeSearchFilter={changeSearchFilter} />
      {filteredCountries.length > 10
        ? 'Too many to list, add another filter'
        : <CountriesList filteredCountries={filteredCountries} />
      }
    </div>
  )
}

export default App;
