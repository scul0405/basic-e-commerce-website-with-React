import React from 'react'
import './search-bar.scss'

const SearchBar = ({onChangeHandler, placeholder}) => {
  return (
    <div className='search-bar'>
        <input className='search-bar__input' onChange={onChangeHandler} placeholder = {placeholder} type='search' id='name'/>
        <label htmlFor='name' className='search-bar__label'>Search monsters</label>
    </div>
  )
}

export default SearchBar