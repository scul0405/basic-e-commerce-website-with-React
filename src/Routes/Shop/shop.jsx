import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../../Components/Categories-preview/Categories-preview'
import CategoryShop from '../../Components/Category-shop/Category-shop'

const shop = () => {
  return (
    <Routes>
      <Route index element = {<CategoriesPreview />} />
      <Route path=':title' element = {<CategoryShop />} />
    </Routes>
  )
}

export default shop