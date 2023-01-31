import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { animateCart } from '../animations'
import RiepilogoOrdine from './riepilogoOrdine'

import ListItemCart from './listItemCart'
import { BiArrowBack } from 'react-icons/bi'

function Cart({ dati, openCart, setOpenCart, removeFromCart, setUpdate }) {

    const [openRiepilogo, setOpenRiepilogo] = useState(false)

    const [cartAggiornato, setCartAggiornato] = useState()

    useEffect(() => {
        if (!dati.length) {
            setOpenCart(false)
        }
    }, [dati])

    useEffect(() => {

        const agg = dati.map((item) => {
            if (cartAggiornato && (item.idAddedPanino === cartAggiornato.idAddedPanino)) {
                return { ...item, ...cartAggiornato }
            } else {
                return item
            }
        })
        setUpdate(agg)

    }, [cartAggiornato])



    /*     function updateItem() {
            const newArray = cart.map((item) => {
                console.log('idPanino',item.idAddedPanino === update.idAddedPanino)
                if (item.idAddedPanino === update.idAddedPanino) {
                    console.log('idPanino',update.quantita)
                    item.quantita = update.quantita || 1
                    item.note = update.note
                    item.salse = update.salse || []
                }
                return item
            })
            setCart(newArray)
        } */


    return (
        <AnimatePresence>
            {(openCart && dati.length) &&
                <> <motion.div className={style.wrapperCart}
                    variants={animateCart}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className={style.headerCart}><button className="close" onClick={() => setOpenCart(false)}><BiArrowBack /></button> <h2>Il tuo carrello</h2></div>
                    <ListItemCart setCartAggiornato={setCartAggiornato} dati={dati} removeFromCart={removeFromCart} />
                    <button className={style.buttonOrdine} onClick={() => { setOpenRiepilogo(true) }}>Riepilogo</button>
                </motion.div>
                    <RiepilogoOrdine dati={dati} openRiepilogo={openRiepilogo} setOpenRiepilogo={setOpenRiepilogo} /></>
            }

        </AnimatePresence>
    )
}

export default Cart