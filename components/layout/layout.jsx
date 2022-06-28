import React, { useContext } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import ToasterAggiuntoCart from '../toaster/toaster'

function Layout({ children }) {

    const router = useRouter()
    const dati = useContext(ShareContext)


    return (
        <div className="layout">
            
            {router.asPath !== '/' && 
            <Navbar statoCarrello={dati.selezionePanini.length} openCart={dati.openCart} setOpenCart={dati.setOpenCart} />}
            <>
                {children}
                <Cart 
                dati={dati?.selezionePanini} 
                openCart={dati.openCart} 
                setOpenCart={dati.setOpenCart} 
                setSelezionaPanini={dati.setSelezionaPanini}
                />
            </>
            <ToasterAggiuntoCart dati={dati?.selezionePanini} openToaster={dati?.openToaster} />
        </div>

    )
}

export default Layout