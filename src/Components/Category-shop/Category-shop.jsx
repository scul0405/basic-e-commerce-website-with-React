import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories'
import ProductCard from '../product-card/product-card';

const CategoryShop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    const {title} = useParams();
    console.log(title,categoriesMap);
  return (
    <div className='Category-shop-container'>
        {
            Object.keys(categoriesMap).length !== 0 && // prevent categoriesMap is empty because useContext is async func -> take time to get data
            <div className="products-overview">
                <h2 className='title'>{title.toUpperCase()}</h2>
                <div className="products-container">
                    {categoriesMap[title].map((product) => {
                            return (
                                <ProductCard product={product} key={product.id}/>
                            )
                    })}
                </div>
            </div>
        }
    </div>
  )
}

export default CategoryShop