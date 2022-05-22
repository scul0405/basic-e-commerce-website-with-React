import React, { Fragment, useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories'
import ProductCard from '../../Components/product-card/product-card';
import './Categories-preview.scss'

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    console.log(categoriesMap);
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => (
          <Fragment key={title}>
            <div className="products-overview">
              <h2 className='title'>{title.toUpperCase()}</h2>
              <div className="products-container">
                {categoriesMap[title].map((product,index) => {
                      if (index < 4)
                        return (
                            <ProductCard product={product} key={product.id}/>
                        )
                })}
              </div>
            </div>
          </Fragment>
        ))
      }
    </Fragment>
  );
}

export default CategoriesPreview