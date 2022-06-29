import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import ToasterAggiuntoCart from '../toaster/toaster'



function Layout({ children }) {
    const router = useRouter()
    const context = useContext(ShareContext)
    const dati = context.DataShare
    const authData = context.authFirebase.user
   

    useEffect(()=>{
        if(!authData){
            router.push('/')
        }
    },[router, authData])

    return (
        <div className="layout">

            {(router.asPath !== '/' && authData)  &&
                <>
                    <Navbar statoCarrello={dati.selezionePanini.length} openCart={dati.openCart} setOpenCart={dati.setOpenCart} />
                    {children}
                    <Cart
                        dati={dati?.selezionePanini}
                        openCart={dati.openCart}
                        setOpenCart={dati.setOpenCart}
                        setSelezionaPanini={dati.setSelezionaPanini}
                    />
                    <ToasterAggiuntoCart dati={dati?.selezionePanini} openToaster={dati?.openToaster} />
                </>
            }
            {(router.asPath === '/' || !authData) && <>{ children }</>}
        </div>

    )
}

export default Layout