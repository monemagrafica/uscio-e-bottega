import React from 'react'
import ItemCart from './itemCart'
import { motion, AnimatePresence } from 'framer-motion'
import { animateListCart } from '../utils/animations'

function ListItemCart({ dati, setCartAggiornato, removeFromCart }) {

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
                                setCartAggiornato={setCartAggiornato}
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