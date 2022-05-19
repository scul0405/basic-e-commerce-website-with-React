import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './Routes/Home/Home.jsx'
import Navigation from './Routes/Navigation/Navigation.jsx'
import Authentication from './Routes/Authentication/Authentication'
import Shop from './Routes/Shop/shop.jsx'
import Checkout from './Routes/Checkout/Checkout.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element = {<Shop/>}/>
        <Route path='/signIn' element = {<Authentication/>}/>
        <Route path='/checkout' element = {<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App