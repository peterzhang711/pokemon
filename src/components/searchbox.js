import React from 'react'
import './searchbox.css'

const SearchBox = ({searchChange}) => {
    
    return (
      
            <input type='search' placeholder='search your pokemon' onChange={searchChange} />
   
    )
}

export default SearchBox