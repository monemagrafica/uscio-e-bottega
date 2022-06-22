import React, { useContext } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';

function Layout({ children }) {

    const router = useRouter()
    const dati = useContext(ShareContext)

    console.log('qta',dati?.selezionePanino);
    return (
        <div className="layout">
            {router.asPath !== '/' && <Navbar statoCarrello={dati.selezionePanino ? true : false} openCart={dati.openCart} setOpenCart={dati.setOpenCart} />}
            <>
                {children}
                <Cart dati={dati?.selezionePanino} openCart={dati.openCart} setOpenCart={dati.setOpenCart} />
            </>
        </div>

    )
}

export default Layout