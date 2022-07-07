import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import  { ToasterLoggedInMemo, ToasterAggiuntoCartMemo } from '../toaster/toaster'
import Drawer from '../drawer';


function Layout({ children }) {
    const router = useRouter()
    const context = useContext(ShareContext)
    const dati = context.DataShare
    const authData = context.authFirebase.user
   

    useEffect(()=>{
        if(!authData){
            router.push('/')
        } else {router.push('/store')}
    },[])

    return (
        <div className="layout">

            {(router.asPath !== '/' && authData)  &&
                <>
                    <Navbar 
                    statoCarrello={dati.cart.length} 
                    openCart={dati.openCart} 
                    setOpenCart={dati.setOpenCart} 
                   
                    setOpenDrawer={dati.setOpenDrawer} 
                    />
                    {children}
                    <Cart
                        dati={dati?.cart}
                        openCart={dati.openCart}
                        removeFromCart={dati.removeFromCart}
                        setOpenCart={dati.setOpenCart}
                        setSelezionaPanini={dati.setSelezionaPanini}
                    />
                    <ToasterAggiuntoCartMemo dati={dati?.cart} openToaster={dati?.openToaster} />
                    <ToasterLoggedInMemo authData={authData } />
                    <Drawer logout={context.authFirebase.logout} openDrawer={dati.openDrawer}  authData={authData}/>
                </>
            }
            {(router.asPath === '/' || !authData) && <>{ children }</>}
        </div>

    )
}

export default Layout