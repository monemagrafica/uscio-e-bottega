import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import { animateListCart } from '../animations'

function ItemCart({ dati, removeFromCart }) {

  const [dettagli, setDettagli] = useState(false)

  return (

    <div
      className={style.wrapperItemCart}>
      <div className={style.wrapDatiItem}>
        <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
        <div className={style.wrapperNomePanino} onClick={() => setDettagli((prevState) => !prevState)}>
          <h2>{dati.name.stringValue}</h2>
        </div>
        <Quantita setDettagli={setDettagli} />
        <button className={style.buttonCancelItem} onClick={() => removeFromCart(dati.idPanino)}>x</button>
      </div>
      {<Dettagli immagine={dati.svg.stringValue} dettagli={dettagli} salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values} />}
      <div className={style.expandDettagli} onClick={() => setDettagli((prevState) => !prevState)}>
        <BiChevronDown /> Note
      </div>
    </div>
  )
}

export default ItemCart