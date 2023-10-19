import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import { ToasterLoggedInMemo, ToasterAggiuntoCart, ToasterRimossoCart } from '../toaster/toaster'
import Drawer from '../drawer';
import Image from 'next/image'
import cartContext from '../../context/cart/cartContext';
import { getQuantita } from '../utils/utils';
import { useAuth } from '../../context/authContext';

function Layout({ children }) {
    const { logOut, authData } = useAuth()
    const router = useRouter()

    useEffect(() => {

        if (authData) {
            router.push('/store')
        } else {
            router.push('/')
        }

    }, [authData])
    console.log(authData, 'authData')

    const context = useContext(ShareContext)
    const dati = context.DataShare

    const {
        toggleCart,
        showCart,
        removeFromCart,
        cart,
        addToCart } = useContext(cartContext)

    return (

        <div className={`layout ${router.asPath === '/' && 'login'}`}>
            <div className='web-app-warning'>
                <Image src="/images/logo.svg" width={240} height={240} layout="intrinsic" alt="logo" />
                <div>Questa è una WebApp, accedi al login tramite smartphone!</div>
            </div>
            {(router.asPath !== '/') &&
                <>
                    <Navbar
                        statoCarrello={cart.length ? getQuantita(cart) : 0}
                        openCart={showCart}
                        setOpenCart={toggleCart}
                        setOpenDrawer={dati.setOpenDrawer}
                    />
                    {children}
                    <Cart
                        dati={cart}
                        openCart={showCart}
                        removeFromCart={removeFromCart}
                        setOpenCart={toggleCart}
                        setSelezionaPanini={dati.setSelezionaPanini}
                        addToCart={addToCart}
                    />
                    <ToasterAggiuntoCart addPaninoToaster={dati.addPaninoToaster} setaddPaninoToaster={dati.setaddPaninoToaster} />
                    <ToasterLoggedInMemo />
                    <ToasterRimossoCart removePaninoToaster={dati.removePaninoToaster} setRemovePaninoToaster={dati.setRemovePaninoToaster} />
                    <Drawer logOut={logOut} openDrawer={dati.openDrawer} setOpenDrawer={dati.setOpenDrawer} authData={authData} />
                </>
            }
            {(router.asPath === '/') && <>{children}</>}
        </div>


    )
}

export default Layout