import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { animateCart } from '../animations'
import RiepilogoOrdine from './riepilogoOrdine'
import ItemCart from './itemCart'
import { BiArrowBack } from 'react-icons/bi'

function Cart({ dati, openCart, setOpenCart }) {

    const [openRiepilogo, setOpenRiepilogo] = useState(false)


console.log(dati);
    return (
        <AnimatePresence>
            {(openCart && dati.length) &&
                <> <motion.div className={style.wrapperCart}
                    variants={animateCart}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className={style.headerCart}><button className={style.close} onClick={() => setOpenCart(false)}><BiArrowBack /></button> <h2>Il tuo carrello</h2></div>
                    <ul>
                        {dati.map((item, index) => {
                            return (<li key={index}> <ItemCart dati={item} /></li>)
                        })}
                    </ul>
                    <button className={style.buttonOrdine} onClick={() => setOpenRiepilogo(true)}>Riepilogo</button>
                </motion.div>
                    <RiepilogoOrdine dati={dati} openRiepilogo={openRiepilogo} setOpenRiepilogo={setOpenRiepilogo} /></>
            }

        </AnimatePresence>
    )
}

export default Cart