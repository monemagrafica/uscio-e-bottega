import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'
import Image from 'next/image'

function ItemCart({ dati, setCancelPaninoID }) {


  const [dettagli, setDettagli] = useState(false)

 
  return (
    <div className={style.wrapperItemCart}>
      <div className={style.wrapDatiItem}>
        <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
        <div className={style.wrapperNomePanino} onClick={() => setDettagli((prevState) => !prevState)}>
          <Image src={dati.svg.stringValue} width={40} height={40} alt="immagine panino" />
          <h2>{dati.name.stringValue}</h2>
        </div>
        <Quantita setDettagli={setDettagli} />
        <button className={style.buttonCancelItem} onClick={()=>false}>x</button>
      </div>
      {<Dettagli dettagli={dettagli} salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values} />}
      <div className={style.expandDettagli} onClick={() => setDettagli((prevState) => !prevState)}>
      <BiChevronDown /> Note
      </div>
    </div>
  )
}

export default ItemCart