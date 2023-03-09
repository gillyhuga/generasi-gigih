import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
    return (
        <div>
            <div className="topnav">
                <Link to="/">Search</Link>
                <Link to="/trending">Trending</Link>
            </div>
        </div>
    )
}

export default Navbar;