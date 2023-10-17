import React, { useContext, useRef } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiPlus, BiMinus } from 'react-icons/bi'
import cartContext from '../../context/cart/cartContext'


function Quantita({ setDettagliOpen, setQuantita, idAddedPanino, quantita }) {

    const { changeQuantity, cart } = useContext(cartContext)
    const inputQuantita = useRef(null)
    console.log(cart, 'cart')
    function more() {
        setDettagliOpen(true)
        if (inputQuantita.current.value >= 0) {
            inputQuantita.current.value = quantita + 1
            changeQuantity(idAddedPanino, quantita + 1)
        }
    }

    function less(value) {
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