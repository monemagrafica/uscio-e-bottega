import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'


function ItemCart({ dati, removeFromCart, setCartAggiornato }) {

  const [quantita, setQuantita] = useState(1)
  const [dettagli, setDettagli] = useState(false)

  console.log(quantita);
  useEffect(() => {
    setCartAggiornato((prev)=>{return {...prev, quantita:quantita, idAddedPanino: dati.idAddedPanino}})
  },[quantita])
  return (
    <>
      {dati && <div
        className={style.wrapperItemCart}>
        <div className={style.wrapDatiItem}>
          <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
          <div className={style.wrapperNomePanino} onClick={() => setDettagli((prevState) => !prevState)}>
            <h2>{dati.name.stringValue}</h2>
          </div>
          <Quantita
            valueCampoQuantita={dati.quantita}
            setQuantita={setQuantita}
            idAddedPanino={dati.idAddedPanino}
            setDettagli={setDettagli}

          />
          <button className={style.buttonCancelItem}
            onClick={() => {
              removeFromCart(dati.idAddedPanino);
             
            }
            }>x</button>
        </div>
        <Dettagli
          idAddedPanino={dati.idAddedPanino}
          note={dati.note}
          immagine={dati.svg.stringValue}
          dettagli={dettagli}
          salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values}
        />


        <div className={style.expandDettagli} onClick={() => setDettagli((prevState) => !prevState)}>
          <BiChevronDown /> Note
        </div>
      </div>}
    </>
  )
}

export default ItemCart