import React from "react";

const SearchForm = ({ changeSearchFilter }) => {
    return (
        <form>
            find countries
            <span> </span>
            <input placeholder="search countries..." onChange={changeSearchFilter} />
        </form>
    )
}

export default SearchForm
