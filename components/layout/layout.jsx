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
import { auth } from '../../firebase/initFirebase';
import { onAuthStateChanged } from "firebase/auth";

function Layout({ children }) {

    const [authData, setAuthData] = useState(-1)
    const router = useRouter()


    useEffect(() => {
        //LOGIN - evita che si disconnetta al refresh dell'applicazione (?)
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setAuthData({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else { setAuthData(-1) }

        })
        unsubscribe()
        return () => unsubscribe()

    }, []);

    useEffect(() => {
        if (authData === -1) {
            router.push('/')
        } else {
            router.push('/store')
        }
    }, [authData])



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
            {(router.asPath !== '/' && authData) &&
                <>
                    <Navbar
                        statoCarrello={cart.length ? getQuantita(cart) : 0}
                        openCart={showCart}
                        setOpenCart={toggleCart}
                        setOpenDrawer={dati.setOpenDrawer}
                    />
                    {authData ? children : <div>loading</div>}
                    <Cart
                        dati={cart}
                        openCart={showCart}
                        removeFromCart={removeFromCart}
                        setOpenCart={toggleCart}
                        setSelezionaPanini={dati.setSelezionaPanini}
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