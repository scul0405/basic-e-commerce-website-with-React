import React from 'react'
import './cart-item.scss'

const CartItem = ({product}) => {
    const {name, imageUrl, quantity, price} = product;
  return (
    <div className='cart-item-container'>
        <img src={imageUrl} alt={name} className='cart-item-img'/>
        <div className="cart-item-text">
            <p>{name}</p>
            <p>{`${quantity} x $${price}`}</p>
        </div>
    </div>
  )
}

export default CartItem