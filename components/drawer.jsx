import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animateDrawer } from './animations'

function Drawer({ openDrawer, logout, authData }) {
console.log(authData);
const name = authData.email.split('@')[0]
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
                <div className="user-data">
                    <h2>Ciao {name}!</h2>
                </div>
            <button onClick={()=>logout()}>logout</button>
            </motion.div>}
        </AnimatePresence>
        </>
    )
}

export default Drawer