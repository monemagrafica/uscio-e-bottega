import React from 'react'
import ItemCart from './itemCart'
import { motion, AnimatePresence } from 'framer-motion'
import { animateListCart } from '../utils/animations'




/**
 * Componente per la visualizzazione lista prodotti nel carrello
 * @date 23/10/2023 - 17:55:10
 *
 * 
 * @param {*} dati
 * lista panini
 * @param {*} removeFromCart
 * funzione per rimuovere il panino dal carrello dal cartContext
 * @returns {*}
 */

function ListItemCart({ dati, removeFromCart }) {

    return (
        <ul>
            <AnimatePresence>
                {dati.map((item) => {
                    return (
                        <motion.li
                            key={item.idAddedPanino}
                            variants={animateListCart}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                            <ItemCart
                                dati={item}
                                removeFromCart={removeFromCart} />
                        </motion.li>
                    )
                })}
            </AnimatePresence>
        </ul>
    )
}

export default ListItemCart