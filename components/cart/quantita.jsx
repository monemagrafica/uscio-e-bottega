import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiPlus, BiMinus } from 'react-icons/bi'

function Quantita({ setDettagli, update, setUpdate, idAddedPanino, valueCampoQuantita }) {


    const [quantita, setQuantita] = useState(1)
    
    useEffect(()=>{
        setUpdate({...update, idAddedPanino: idAddedPanino, quantita: quantita })
    }, [quantita])

    function more() {
        setDettagli(true)
        setQuantita((prev)=>prev + 1)
    }

    function less() {
        if (quantita > 1) { setQuantita((prev)=>prev - 1) } else { setQuantita(1) }
        
    }
    console.log('quantita', quantita);
    console.log('quantitaInCart', valueCampoQuantita);
    return (
        <div className={style.cartQuantita}>
            <button className="more" onClick={() => less(quantita)}><BiMinus />
            </button><label htmlFor="quantita" className={style.inputQuantita}>
                <input value={valueCampoQuantita} type='number' id="quantita" /></label>
            <button className="more" onClick={() => more(quantita)}><BiPlus /></button>
        </div>
    )
}

export default Quantita