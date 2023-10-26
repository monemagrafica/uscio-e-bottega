import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { animateCart } from '../utils/animations'
import RiepilogoOrdine from './riepilogoOrdine'
import ListItemCart from './listItemCart'
import { BiArrowBack } from 'react-icons/bi'
import { fetchDataFromFirebase } from '../../firebase/utils'
import DataRitiro from './dataRitiro'
/**
 * Componente per la visualizzazione del carrello
 * @date 23/10/2023 - 16:18:53
 *
 * @param {*} dati
 * Prodotti nel carrello
 * @param {*} openCart
 * Variabile stato apertura carrello
 * @param {*} setOpenCart
 * Funzione per settare il valore di openCart
 * @param {*} removeFromCart
 * Funzione per rimuovere un prodotto dal carrello
 * 
 */

function Cart({
    dati,
    openCart,
    setOpenCart,
    removeFromCart,
    setFasciaOraria,
    fasciaOraria }) {

    const [openRiepilogo, setOpenRiepilogo] = useState(false)
    const [isDataRitiroOpen, setIsDataRitiroOpen] = useState(false)
    const [listaFasciaOraria, setListaFasciaOraria] = useState([])

    useEffect(() => {
        if (!dati.length) {
            setOpenCart(false)
        }
    }, [dati])

    useEffect(() => {
        fetchDataFromFirebase('fascia_oraria').then((data) => {
            setListaFasciaOraria(data)

        }
        ).catch((error) => {
            console.log(error, 'error')
        })
    }
        , [])

    return (
        <AnimatePresence>
            {(openCart) &&
                <> <motion.div className={style.wrapperCart}
                    variants={animateCart}
                    initial="initial"
                    animate="animate"
                    exit="exit">
                    <header className={style.headerCart}><button className="close" onClick={() => setOpenCart(false)}><BiArrowBack /></button> <h2>Il tuo carrello</h2></header>
                    <ListItemCart setOpenCart={setOpenCart} dati={dati} removeFromCart={removeFromCart} />
                    <footer>
                        <button className={style.buttonOrdine} >Prenota il ritiro</button>
                        <DataRitiro
                            isDataRitiroOpen={isDataRitiroOpen}
                            setIsDataRitiroOpen={setIsDataRitiroOpen}
                            listaFasciaOraria={listaFasciaOraria}
                            setFasciaOraria={setFasciaOraria}
                        />
                        <button className={style.buttonOrdine} disabled={Object.keys(fasciaOraria).length === 0} onClick={() => { setOpenRiepilogo(true) }}>Riepilogo</button></footer>
                </motion.div>
                    <RiepilogoOrdine dati={dati} openRiepilogo={openRiepilogo} setOpenRiepilogo={setOpenRiepilogo} /></>
            }

        </AnimatePresence>
    )
}

export default Cart