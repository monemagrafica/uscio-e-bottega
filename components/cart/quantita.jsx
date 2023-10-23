import React, { useContext, useRef } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiPlus, BiMinus } from 'react-icons/bi'
import cartContext from '../../context/cart/cartContext'


/**
 * Componente per la visualizzazione della quantità prodotti nel carrello
 * @date 23/10/2023 - 17:57:14
 *
 * 
 * @param {*} setDettagliOpen
 * funzione per settare il valore di apertura dettagli panino
 * @param {*} idAddedPanino
 * id del panino aggiunto al carrello
 * @param {*} quantita
 * quantità di prodotto nel carrello
 * @returns {*}
 */
function Quantita({ setDettagliOpen, idAddedPanino, quantita }) {

    const { changeQuantity, cart } = useContext(cartContext)
    const inputQuantita = useRef(null)

    function more() {
        setDettagliOpen(true)
        if (inputQuantita.current.value >= 0) {
            inputQuantita.current.value = quantita + 1
            changeQuantity(idAddedPanino, quantita + 1)
        }
    }

    function less() {
        if (inputQuantita.current.value > 0) {
            inputQuantita.current.value = quantita - 1
            changeQuantity(idAddedPanino, quantita - 1)
        }
    }


    return (
        <div className={style.cartQuantita}>
            <button className="more" onClick={() => less(quantita)}><BiMinus />
            </button><label htmlFor="quantita" className={style.inputQuantita}>
                <input ref={inputQuantita} defaultValue={quantita} type='number' id="quantita" disabled /></label>
            <button className="more" onClick={() => more(quantita)}><BiPlus /></button>
        </div>
    )
}

export default Quantita