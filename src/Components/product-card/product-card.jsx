import React from 'react'
import './product-card.scss'
import Button from '../button/button'


const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product
  console.log();
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
            <p>{name}</p>
            <p>{price + '$'}</p>
        </div>
        <Button className='btn-black-inverse' title='Add to card'/>
    </div>
  )
}

export default ProductCard