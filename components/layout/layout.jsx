import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { useRouter } from 'next/router';
function Layout({ children }) {

    const router = useRouter()
    console.log('layout', router);

    return (
    
            <div>
                {router.asPath !== '/' && <Navbar />}
                <div>
                    {children}
                </div>

            </div>
       
    )
}

export default Layout