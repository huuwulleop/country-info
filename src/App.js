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
  
  return (
    <div>
      <SearchForm searchFilter={searchFilter} changeSearchFilter={changeSearchFilter} />
      {countries.length > 10
        ? 'Too many to list'
        : 'Display here'
      }
    </div>
  )
}

export default App;
