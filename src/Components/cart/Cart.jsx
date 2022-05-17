import React, { useState, useContext } from 'react'
import {ReactComponent as CartIcon } from './shopping-bag.svg'
import CartItem from '../cart-item/cart-item'
import { CartItemsContext } from '../../contexts/cartItems'
import './cart.scss'
import Button from '../button/button'


const Cart = () => {
    const {cartItems} = useContext(CartItemsContext);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const quantity = cartItems.reduce((sum,item) => sum + item.quantity,0);
  return (
    <div className="cart-container">
        <div className="cart-icon-container" onClick={handleToggle}>
            <CartIcon className='cart-icon'/>
            <span className='item-count'>{quantity}</span>
        </div>
        { toggle && (<div className="cart-drop-down">
            <div className="cart-items">
                {
                    cartItems.length !== 0 ? (
                        cartItems.map(item => {
                            return <CartItem product={item}  key={item.id}/>
                        }))
                        : <span className='item-not-found'>No item found</span>
                } 
            </div>
            <Button title='Go to checkout' className='btn-black'/>
        </div>)
        }
    </div>
  )
}

export default Cart