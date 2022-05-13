import React from 'react'
import Category from '../categories/Category'
import './Directory.scss'

const Directory = ({categories}) => {
  return (
    <div className='categories-container'>
        {categories.map(category => {
            return(
                <Category category = {category} key = {category.id}/>
            )
        }
        )}
    </div>
  )
}

export default Directory