import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <Nav />
            <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img className="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating  my-1">
                        <input type="text" className="form-control" id="floatingFname" placeholder="first name" />
                        <label htmlFor="floatingFname">First Name</label>
                    </div>
                    <div className="form-floating  my-1">
                        <input type="text" className="form-control" id="floatingLname" placeholder="last name" />
                        <label htmlFor="floatingLname">Last Name</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="date" className="form-control" id="floatingdob" placeholder="date of birth" />
                        <label htmlFor="floatingdob">Date of Birth</label>
                    </div>

                    <div className='form-floating my-1'>
                        <div className='form-control d-flex justify-content-start'>
                            
                            <div className="form-check ms-5">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check ms-5">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check ms-5">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Others
                                </label>
                            </div>
                        </div>
                            <label>Gender</label>
                    </div>

                    <div className="form-floating my-1">
                        <input type="number" className="form-control" id="floatingPhone" placeholder="phone number" />
                        <label htmlFor="floatingPhone">Phone Number</label>
                    </div>
                    
                    <div className="form-floating  my-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingCPassword">Confirm Password</label>
                    </div>

                    <div className="checkbox mb-3 text-start  my-1">
                        <label>
                            <input type="checkbox" value="..." /> I agree to terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    Already have an account? <Link to='/signin'>Sign in</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Signup