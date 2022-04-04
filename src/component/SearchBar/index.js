import React from "react";
import './style.css';



const SearchBar = ({ onChange, onClick }) => {
    return (
        <div>
            <input onChange={onChange} type="text" placeholder="Search.." name="search"></input>
            <button onClick={onClick} type="button">Search</button>
    </div>
    )
}

export default SearchBar;