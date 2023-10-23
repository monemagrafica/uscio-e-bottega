import React, { useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion } from 'framer-motion'



/**
 * Componente per l'animazione del +1
 * @date 23/10/2023 - 17:56:37
 *
 * 
 * @param {*} plusOne
 * stato per l'animazione del +1
 * @param {*} setPlusOne
 * funzione per settare il valore di plusOne
 * @returns {*}
 */
function Plus1({ plusOne, setPlusOne }) {

    useEffect(() => {
        if (plusOne) {
            setTimeout(() => setPlusOne(false), 700)
        }
    }, [plusOne])



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