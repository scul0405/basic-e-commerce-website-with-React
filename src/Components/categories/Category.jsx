import React from 'react'
import './Category.scss'
const Category = ({category}) => {
    const {title, imageUrl} = category;
  return (
    <div className='category-container'>
        <div className='category-bg-img' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
  )
}

export default Category