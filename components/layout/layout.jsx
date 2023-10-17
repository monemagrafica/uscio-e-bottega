import React, { useContext, useEffect } from 'react'
import Navbar from '../navbar/navbar'
import { useRouter } from 'next/router';
import Cart from '../cart/cart';
import { ShareContext } from '../../context/context';
import { ToasterLoggedInMemo, ToasterAggiuntoCart, ToasterRimossoCart } from '../toaster/toaster'
import Drawer from '../drawer';
import Image from 'next/image'
import cartContext from '../../context/cart/cartContext';

function Layout({ children }) {
    const router = useRouter()
    const context = useContext(ShareContext)

    const dati = context.DataShare
    const authData = context.authFirebase.user
    const {
        toggleCart,
        showCart,
        removeFromCart,
        cart,
        addToCart } = useContext(cartContext)

    useEffect(() => {
        if (!authData) {
            router.push('/')
        } else { router.push('/store') }
    }, [])


    return (

        <div className={`layout ${router.asPath === '/' && 'login'}`}>
            <div className='web-app-warning'>
                <Image src="/images/logo.svg" width={240} height={240} layout="intrinsic" alt="logo" />
                <div>Questa è una WebApp, accedi al login tramite smartphone!</div>
            </div>
            {(router.asPath !== '/' && authData) &&
                <>
                    <Navbar
                        statoCarrello={cart.length}
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
                        update={dati.update}
                        setUpdate={dati.setUpdate}
                        addToCart={addToCart}
                    />
                    <ToasterAggiuntoCart addPaninoToaster={dati.addPaninoToaster} setaddPaninoToaster={dati.setaddPaninoToaster} />
                    <ToasterLoggedInMemo authData={authData} />
                    <ToasterRimossoCart removePaninoToaster={dati.removePaninoToaster} setRemovePaninoToaster={dati.setRemovePaninoToaster} />
                    <Drawer logout={context.authFirebase.logout} openDrawer={dati.openDrawer} setOpenDrawer={dati.setOpenDrawer} authData={authData} />
                </>
            }
            {(router.asPath === '/' || !authData) && <>{children}</>}
        </div>

    )
}

export default Layout