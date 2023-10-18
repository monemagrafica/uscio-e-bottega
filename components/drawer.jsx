import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animateDrawer } from './utils/animations'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { auth } from '../firebase/initFirebase';
function Drawer({ setOpenDrawer, openDrawer, authData }) {
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
    function logout() {
        auth.signOut();
        router.push('/')
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
                    <div className="user-data">
                        <h2>Ciao {name}!</h2>
                        <p className='presentazione'>Tramite questa app potrai ordinare i tuoi <span>panini preferiti</span>, modificarli e... mangiarli</p>
                        <p style={{ textDecoration: 'underline' }} onClick={() => openTutorial()}>  Sai come ordinare un panino?</p>
                        <p style={{ textDecoration: 'underline' }} onClick={() => openChiSiamo()}>  Vuoi conoscerci meglio?</p>

                    </div>
                    <div className="datiApp">

                    </div>
                    <button className='logout' onClick={() => logout()}>logout</button>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Drawer