import React, { useContext } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import {  AnimatePresence } from 'framer-motion'
function Layout({ children }) {

    const router = useRouter()
    const dati = useContext(ShareContext)


    return (
        <div className="layout">
            {router.asPath !== '/' && <Navbar />}
            <>
                {children}
                {
                        <Cart dati={dati?.selezionePanino} openCart={dati.openCart} setOpenCart={dati.setOpenCart} />
                   }
            </>

        </div>

    )
}

export default Layout