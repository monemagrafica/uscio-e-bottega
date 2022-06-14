import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
function Layout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
           
        </div>
    )
}

export default Layout