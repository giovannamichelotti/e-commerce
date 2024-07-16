import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Detail, Home } from './Pages'
import { Contact } from './Pages'
import { Cart } from './Pages'

const App = () => {
    
    
    return (

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/detalle/:productId' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
    
    )
}

export default App


