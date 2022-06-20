import React from 'react'
import style from '../../pages/store/store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { animateDettagli } from '../animations'
function Dettagli({ salse, dettagli }) {
    return (
        <div className={style.dettagli}>
            <AnimatePresence>
                {(dettagli && salse) && <motion.ul
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={animateDettagli}
                >
                    {salse.map((item, index) => {
                        return (<li key={index}>
                            <input type="checkbox" id={item.stringValue} name={item.stringValue} value={item.stringValue} />
                            <label htmlFor={item.stringValue}>{item.stringValue}</label><br></br>
                        </li>)
                    })}
                </motion.ul>}
            </AnimatePresence>

        </div>
    )
}

export default Dettagli