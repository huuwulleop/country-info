import React, { useState, useEffect } from "react";

// components
import SearchForm from "./components/SearchForm";

const App = () => {
  const [searchFilter, setSearchFilter] = useState('')

  const changeSearchFilter = (event) => {
    console.log(event.target.value);
    setSearchFilter(event.target.value)
  }
  
  return (
    <div>
      <SearchForm searchFilter={searchFilter} changeSearchFilter={changeSearchFilter} />
    </div>
  )
}

export default App;
