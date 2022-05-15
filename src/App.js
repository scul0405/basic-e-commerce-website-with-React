import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './Routes/Home/Home.jsx'
import Navigation from './Routes/Navigation/Navigation.jsx'
import Authentication from './Routes/Authentication/Authentication'

const App = () => {

  const Shop = () => (
    <div>
      I am the shop
    </div>
  )

  return (
    <Routes>
      <Route path='/' element= {<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element = {<Shop/>}/>
        <Route path='/signIn' element = {<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App