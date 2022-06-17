import React from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
function Layout({ children }) {

    const router = useRouter()


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