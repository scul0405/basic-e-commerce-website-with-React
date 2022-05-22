import React from 'react'
import { Link } from 'react-router-dom';
import './Category.scss'
const Category = ({category}) => {
    const {title, imageUrl} = category;
  return (
    <div className='category-container'>
        <div className='category-bg-img' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <Link to={`/shop/${title}`}>
          <div className='category-body-container'>
              <h2>{title.toUpperCase()}</h2>
              <p>Shop now</p>
          </div>
        </Link>
    </div>
  )
}

export default Category