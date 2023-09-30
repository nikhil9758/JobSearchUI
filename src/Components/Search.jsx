import React from 'react'
import './Search.css'
import seachicon from '../assests/icons/search.png'
const Search = () => {
  return (
    <div className='search'>
        <img src={seachicon} className="seach-icon" alt="search" />
        <input 
        type='text' 
        name='search'
        className='search__input'
        placeholder='Search by name,edu, exp or #tag'/>
    </div>
  )
}

export default Search