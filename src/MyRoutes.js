import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Deals from './Pages/Deals'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>

            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products' element={<Deals/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes