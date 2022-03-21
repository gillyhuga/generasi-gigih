import React from "react";
import './style.css';


function SearchBar() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="button">Button</button>
            </form>
        </div>
    )
}

export default SearchBar;