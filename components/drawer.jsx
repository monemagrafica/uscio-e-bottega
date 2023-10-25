import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animateDrawer } from './utils/animations'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'


/**
 * Componenten drawer
 * @date 23/10/2023 - 18:09:34
 *
 * @param {*} setOpenDrawer
 * setta lo stato del drawer
 * @param {*} openDrawer
 * stato del drawer
 * @param {*} logOut
 * funzione per il logout da AuthContext
 * @param {*} authData
 * dati di autenticazione da AuthContext
 * 
 */

function Drawer({ setOpenDrawer, openDrawer, logOut, authData }) {
    const router = useRouter()
    const name = authData?.email?.split('@')[0]

    function openTutorial() {
        router.push('/tutorial')
        setOpenDrawer(false)
    }
    function openChiSiamo() {
        router.push('/chi-siamo')
        setOpenDrawer(false)
    }
    function signOut() {
        logOut(router)
        setOpenDrawer(false)

    }
    return (
        <>
            <AnimatePresence>
                {openDrawer && <motion.div
                    className='wrapper-drawer'
                    variants={animateDrawer}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                >

                    <div className="image-drawer">
                        <Image src="/images/logo.svg" alt="uscio e bottega logo" layout="fill" />
                    </div>

                    <div className="dati-app">
                        <h2 className="nome-utente">Ciao <br />{name}!</h2>
                        <a onClick={() => openTutorial()}>
                            <h2 >  Sai come ordinare un panino?</h2></a>
                        <a onClick={() => openChiSiamo()}>
                            <h2>  Vuoi conoscerci meglio?</h2></a>
                    </div>
                    <div className='wrapper-btn-drawer'>
                        <button className='logout' onClick={() => setOpenDrawer(false)}>Back</button>
                        <button className='logout' onClick={() => signOut()}>logout</button>

                    </div>

                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Drawer