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
    fasciaOraria,
}) {

    const [openRiepilogo, setOpenRiepilogo] = useState(false)
    const [isDataRitiroOpen, setIsDataRitiroOpen] = useState(false)
    const [listaFasciaOraria, setListaFasciaOraria] = useState([])

    function renderFasciaOraria(lista, idItemLista) {
        if (lista[idItemLista - 1]) {
            return (
                <>
                    <br />
                    {lista[idItemLista - 1].from + '-' + lista[idItemLista - 1].to}
                </>
            )
        }

    }
    useEffect(() => {
        if (!dati.length) {
            setOpenCart(false)
            setFasciaOraria(null)
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
                        <button onClick={() => setIsDataRitiroOpen(true)} className={style.buttonOrdine}>Orario di ritiro
                            {renderFasciaOraria(listaFasciaOraria, fasciaOraria)}
                        </button>
                        <AnimatePresence>
                            {isDataRitiroOpen && <DataRitiro
                                isDataRitiroOpen={isDataRitiroOpen}
                                setIsDataRitiroOpen={setIsDataRitiroOpen}
                                listaFasciaOraria={listaFasciaOraria}
                                setFasciaOraria={setFasciaOraria}
                                fasciaOraria={fasciaOraria}
                            />}
                        </AnimatePresence>
                        {!isDataRitiroOpen &&
                            <button className={`${style.buttonOrdine} ${style.ordine}`} disabled={!fasciaOraria} onClick={() => { setOpenRiepilogo(true) }}>Riepilogo</button>}</footer>
                </motion.div>
                    <RiepilogoOrdine dati={dati} openRiepilogo={openRiepilogo} setOpenRiepilogo={setOpenRiepilogo} /></>
            }

        </AnimatePresence>
    )
}

export default Cart