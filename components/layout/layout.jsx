import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';
import { ShareContext } from '../../context/context';
import { ToasterLoggedInMemo, ToasterAggiuntoCart, ToasterRimossoCart } from '../toaster/toaster'
import Drawer from '../drawer';
import Image from 'next/image'
import cartContext from '../../context/cart/cartContext';
import { getQuantita } from '../utils/utils';
import { useAuth } from '../../context/authContext';
import dynamic from 'next/dynamic';
import LoaderImage from '../loader/loaderImage';
const Navbar = dynamic(() => import('../navbar/navbar'), { ssr: false })
const Cart = dynamic(() => import('../cart/cart'), { ssr: false })




/**
 * Layout che importa la navbar e il carrello
 * @date 23/10/2023 - 16:00:57
 * 
 * @var authData 
 * dati utente - se non ci sono dati utente e la route è diversa da '/' mostra il loader - protected route. Da testare next-auth.
 * 
 * @var router.asPath("/")
 * se la route è '/' non mostra la navbar e il carrello
 * 
 * @param {*} children children
 * 
 */


function Layout({ children }) {
    const { logOut, authData } = useAuth()
    const router = useRouter()
    const context = useContext(ShareContext)
    const dati = context.DataShare

    const {
        toggleCart,
        showCart,
        removeFromCart,
        cart,
        addToCart } = useContext(cartContext)

    console.log(cart, 'dati test')

    return (
        <>
            {!authData && router.pathname != '/' ?
                <div><LoaderImage /></div> :
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
                </div >

            }</>
    )
}

export default Layout