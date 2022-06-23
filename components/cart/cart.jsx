import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { animateCart } from '../animations'
import RiepilogoOrdine from './riepilogoOrdine'
import ItemCart from './itemCart'
import { BiArrowBack } from 'react-icons/bi'

function Cart({ dati, openCart, setOpenCart }) {



    const [openRiepilogo, setOpenRiepilogo] = useState(false)
    return (
        <AnimatePresence>
            {(openCart && dati) &&
                <> <motion.div className={style.wrapperCart}
                    variants={animateCart}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className={style.headerCart}><button className={style.close} onClick={() => setOpenCart(false)}><BiArrowBack /></button> <h2>Il tuo carrello</h2></div>

                    <ItemCart dati={dati}  />

                    <button className={style.buttonOrdine} onClick={() => setOpenRiepilogo(true)}>Riepilogo</button>
                </motion.div>

                    <RiepilogoOrdine dati={dati} openRiepilogo={openRiepilogo} setOpenRiepilogo={setOpenRiepilogo} /></>
            }

        </AnimatePresence>
    )
}

export default Cart