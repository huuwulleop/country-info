import React from "react";

const SearchForm = ({ searchFilter, changeSearchFilter }) => {
    return (
        <form>
            find countries
            <span> </span>
            <input placeholder="search countries..." value={searchFilter} onChange={changeSearchFilter} />
        </form>
    )
}

export default SearchForm
