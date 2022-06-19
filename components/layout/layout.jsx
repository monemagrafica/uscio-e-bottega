import React from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';


function Layout({ children }) {

    const router = useRouter()


    return (
    
            <div className="layout">
                {router.asPath !== '/' && <Navbar />}
             
                    {children}
               

            </div>
       
    )
}

export default Layout