import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {useRouter} from 'next/router';
function Layout({ children }) {

    const router = useRouter()
 

    return (
        <div>
            <Navbar />
            <div>
            {children}
            </div>
           
        </div>
    )
}

export default Layout