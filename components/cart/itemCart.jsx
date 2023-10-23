import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'


/**
 * Componente per la visualizzazione del singolo panino nel carrello
 * @date 23/10/2023 - 17:50:39
 *
 * 
 * @param {*} dati
 * dati del singolo panino
 * @param {*} removeFromCart
 * funzione per rimuovere il panino dal carrello dal cartContext
 * @returns {*}
 */

function ItemCart({ dati, removeFromCart }) {

  const arrayListaSalse = dati.ingredients.Salse
  const arrayFromSalse = arrayListaSalse ? arrayListaSalse.map((item) => {
    return item
  }) : []

  const [dettagliOpen, setDettagliOpen] = useState(false)


  return (
    <>
      {dati && <div
        className={style.wrapperItemCart}>
        <div className={style.wrapDatiItem}>
          <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
          <div className={style.wrapperNomePanino} onClick={() => setDettagliOpen((prevState) => !prevState)}>
            <h2>{dati.name}</h2>
          </div>
          <Quantita
            valueCampoQuantita={dati.quantita}
            quantita={dati.quantita}
            idAddedPanino={dati.idAddedPanino}
            setDettagliOpen={setDettagliOpen}
          />
          <button className={style.buttonCancelItem}
            onClick={() => { removeFromCart(dati.idAddedPanino); }
            }>x</button>
        </div>
        <Dettagli
          idAddedPanino={dati.idAddedPanino}
          noteCart={dati.note}
          immagine={dati.svg}
          dettagliOpen={dettagliOpen}
          arrayFromSalse={arrayFromSalse}
          salseLista={dati.salse}
        />


        <div className={style.expandDettagli} onClick={() => setDettagliOpen((prevState) => !prevState)}>
          <BiChevronDown /> Personalizzami
        </div>
      </div>}
    </>
  )
}

export default ItemCart