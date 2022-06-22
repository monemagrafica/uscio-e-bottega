import React, { useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion } from 'framer-motion'

function Plus1({ plusOne, setPlusOne }) {

    useEffect(() => {
        if (plusOne) {
            setTimeout(() => setPlusOne(false), 700)
        }
    },[plusOne])



    return (
        <>{plusOne && <motion.div className={style.plusOne}
            initial={{ opacity: [0, 0], top: [0, 0] }}
            animate={{
                opacity: [0, 1, 1, 0], top: [0, -50],
                transition: { duration: .7, ease: 'easeOut' }
            }}
        >
            +
        </motion.div>}</>
    )
}

export default Plus1