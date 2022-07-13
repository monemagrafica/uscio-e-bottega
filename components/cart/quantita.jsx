import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiPlus, BiMinus } from 'react-icons/bi'

function Quantita({ setDettagli, setQuantita, valueCampoQuantita }) {

    function more(value) {
        setDettagli(true)
        setQuantita((prev) => prev + 1)
       
    }

    function less(value) {
        if (value > 1) { setQuantita((prev) => prev - 1) } else { setQuantita(1) }
    }


    return (
        <div className={style.cartQuantita}>
            <button className="more" onClick={() => less(quantita)}><BiMinus />
            </button><label htmlFor="quantita" className={style.inputQuantita}>
                <input defaultValue={valueCampoQuantita} key={valueCampoQuantita} type='number' id="quantita" /></label>
            <button className="more" onClick={() => more(quantita)}><BiPlus /></button>
        </div>
    )
}

export default Quantita