import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'


function ItemCart({ dati, removeFromCart, setUpdate, update }) {

  const [dettagli, setDettagli] = useState(false)

  return (
    <>
      {dati && <div
        className={style.wrapperItemCart}>
        <div className={style.wrapDatiItem}>
          <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
          <div className={style.wrapperNomePanino} onClick={() => setDettagli((prevState) => !prevState)}>
            <h2>{dati.name.stringValue}</h2>
          </div>
          <Quantita valueCampoQuantita={dati.quantita} update={update} idAddedPanino={dati.idAddedPanino} setUpdate={setUpdate} setDettagli={setDettagli} />
          <button className={style.buttonCancelItem} onClick={() => removeFromCart(dati.idAddedPanino)}>x</button>
        </div>
        {<Dettagli
          idAddedPanino={dati.idAddedPanino}
          setUpdate={setUpdate}
          update={update}
          note={dati.note}
          immagine={dati.svg.stringValue}
          dettagli={dettagli}
          salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values}
          listaSalse={dati.salse}
          />
          
          }
          
        <div className={style.expandDettagli} onClick={() => setDettagli((prevState) => !prevState)}>
          <BiChevronDown /> Note
        </div>
      </div>}
    </>
  )
}

export default ItemCart