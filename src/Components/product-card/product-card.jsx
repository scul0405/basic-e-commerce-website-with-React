import React, { useContext } from 'react'
import './product-card.scss'
import Button from '../button/button'
import { CartItemsContext } from '../../contexts/cartItems'


const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product;

  const {cartItems, setCartItems} = useContext(CartItemsContext);

  const handleAdd = () => {
    const isExistItem = cartItems.map(item => item.id).includes(product.id);
    isExistItem ? 
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
     : setCartItems([...cartItems,{...product, quantity: 1}]);
  }
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='product-card-footer'>
            <p>{name}</p>
            <p>{price + '$'}</p>
        </div>
        <Button className='btn-black-inverse' title='Add to card' onClick={handleAdd}/>
    </div>
  )
}

export default ProductCard