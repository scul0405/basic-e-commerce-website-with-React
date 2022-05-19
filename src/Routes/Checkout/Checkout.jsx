import React, { useContext } from 'react'
import './Checkout.scss'
import { CartItemsContext } from '../../contexts/cartItems'


const Checkout = () => {
    const {cartItems, setCartItems} = useContext(CartItemsContext);
    const total = cartItems.reduce((sum,item) => {
        return sum + item.price*item.quantity;
    },0)
    const handleIncrease = (currentItem) => {
        setCartItems(cartItems.map(item => {
            return item.id === currentItem.id ? {...item, quantity: item.quantity + 1} : item
        }))
    }
    const handleDecrease = (currentItem) => {
        currentItem.quantity === 1
        ? handleDelete(currentItem) 
        :setCartItems(cartItems.map(item => {
            return item.id === currentItem.id ? {...item, quantity: item.quantity - 1} : item
        }))
    }
    const handleDelete = (currentItem) => {
        setCartItems(cartItems.filter(item => item.id !== currentItem.id));
    }
  return (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div className="checkout-item">
            {cartItems.map(item => {
                return (
                    <div className="item-container" key={item.id}>
                        <div className="item-image" style={{width: '23%'}}>
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <span style={{width: '27.5%'}}>{item.name}</span>
                        <div className="item-quantity" style={{width: '23%'}}>
                            <span className='item-decrease arrow' onClick={() => handleDecrease(item)}>❮</span>
                            <span>{item.quantity}</span>
                            <span className='item-increase arrow' onClick={() => handleIncrease(item)}>❯</span>
                        </div>
                        <span style={{width: '23%'}}>{item.price}</span>
                        <div className="item-remove" >
                            <span onClick={() => handleDelete(item)}>X</span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="total">
            <span>Total: ${total}</span>
        </div>
        <div className="test-warning">
            <p>
            *Please use the following test credit cart for payments*
            </p>
            <p>
                4242 4242 4242 4242 - Exp: 01/26 - CVV:123
            </p>
        </div>
        
    </div>
  )
}

export default Checkout