import React from "react";
import './style.css';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'



const SearchBar = ({ onChange, onClick }) => {
    return (
        <div>
            <Input onChange={onChange} placeholder='Search' />
            <Button onClick={onClick} >Search</Button>
        </div>
    )
}

export default SearchBar;