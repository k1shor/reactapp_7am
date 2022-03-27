import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import Products from '../components/Products'


const Home = () => {
  return (
    <div>
        <Nav/>
        <Carousel/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home