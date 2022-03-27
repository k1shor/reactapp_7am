import React from 'react'
import Footer from './Layout/Footer'
import Nav from './Layout/Nav'

const First = () => {
    return (
        <>
        <Nav/>
            <h1>
                This is the first page.
            </h1>

            <div>This is the <br/>content.</div>
            <div></div>
            <Footer/>
        </>
        
        
    )
}

export default First