import React, { useContext } from 'react'

import { ProductsContext } from '../../contexts/products'
import ProductCard from '../../Components/product-card/product-card';
import './shop.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (      
    <div className='products-container'>
        {products.map((product) => {
            return (
                <ProductCard product={product} key={product.id}/>
            )
        })}
    </div>
  )
}

export default Shop