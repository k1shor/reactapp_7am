import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import Products from '../components/Products'

const Deals = () => {
    return (
        <>
            <Nav />
            <h3>
                Deals page
            </h3>
            {/* <div className='container-fluid'> */}
            <div className='row m-0'>
                <div className='col-md-3 p-3'>
                    <h4>Categories</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Laptops and Computers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Mobiles and Smartphones
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Beauty and Fitness
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Home Appliances
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Accessories
                        </label>
                    </div>
                </div>
                <div className='col-md-9'>
                    <Products />
                </div>
            </div>
            {/* </div> */}


            <Footer />
        </>
    )
}

export default Deals