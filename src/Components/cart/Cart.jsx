import React, { useState } from 'react'
import {ReactComponent as CartIcon } from './shopping-bag.svg'
import './cart.scss'
import Button from '../button/button'

const Cart = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className="cart-container">
        <div className="cart-icon-container" onClick={handleToggle}>
            <CartIcon className='cart-icon'/>
            <span className='item-count'>0</span>
        </div>
        { toggle && (<div className="cart-drop-down">
            <div className="cart-item-container">
                <div className="cart-item">Item 1</div>
                <div className="cart-item">Item 2</div>
                <div className="cart-item">Item 3</div>
            </div>
            <Button title='Go to checkout' className='btn-black'/>
        </div>)
        }
    </div>
  )
}

export default Cart