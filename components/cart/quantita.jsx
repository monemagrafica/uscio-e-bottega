import React, { useState, useRef } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiPlus, BiMinus } from 'react-icons/bi'
function Quantita() {

    const quantita = useRef()
    function more (inputRef){
        inputRef.current.value++
    }
    function less (inputRef){
        if (inputRef.current.value > 0 ){inputRef.current.value--} else {inputRef.current.value=0}
    }
    return (
        <div className={style.cartQuantita}>
            <button className="more" onClick={()=>less(quantita)}><BiMinus />
            </button><label htmlFor="quantita" className={style.inputQuantita}>
                <input ref={quantita} defaultValue={0} type='number' id="quantita" /></label>
            <button className="more" onClick={()=>more(quantita)}><BiPlus /></button>
        </div>
    )
}

export default Quantita