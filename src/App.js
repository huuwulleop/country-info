import React, { useState, useEffect } from "react";

// components
import SearchForm from "./components/SearchForm";

const App = () => {
  const [searchFilter, setSearchFilter] = useState('')
  
  return (
    <div>
      <SearchForm />
    </div>
  )
}

export default App;
