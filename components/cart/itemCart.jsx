import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'


function ItemCart({ dati, removeFromCart, setCartAggiornato }) {

  const arrayListaSalse = dati.ingredients.mapValue.fields.Salse
  const arrayFromSalse = arrayListaSalse?.arrayValue.values.map((item) => {
    return item.stringValue
  })

  const [dettagliOpen, setDettagliOpen] = useState(false)

  const [quantita, setQuantita] = useState(dati.quantita || 1)
  const [note, setNote] = useState(dati.note || '')
  const [salseLista, setSalseLista] = useState(dati.salse || arrayFromSalse)


  useEffect(() => {
    setCartAggiornato((prev) => { return { 
      ...prev, 
      quantita: quantita, 
      idAddedPanino: dati.idAddedPanino, 
      note: note, 
      salse:salseLista } })
  }, [quantita, note, salseLista])


  return (
    <>
      {dati && <div
        className={style.wrapperItemCart}>
        <div className={style.wrapDatiItem}>
          <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
          <div className={style.wrapperNomePanino} onClick={() => setDettagliOpen((prevState) => !prevState)}>
            <h2>{dati.name.stringValue}</h2>
          </div>
          <Quantita
            valueCampoQuantita={dati.quantita}
            setQuantita={setQuantita}
            quantita={quantita}
            idAddedPanino={dati.idAddedPanino}
            setDettagliOpen={setDettagliOpen}
          />
          <button className={style.buttonCancelItem}
            onClick={() => {
              removeFromCart(dati.idAddedPanino);

            }
            }>x</button>
        </div>
        <Dettagli
          idAddedPanino={dati.idAddedPanino}
          noteCart={dati.note}
          setNote={setNote}
          immagine={dati.svg.stringValue}
          dettagliOpen={dettagliOpen}
          arrayFromSalse={arrayFromSalse}
          setSalseLista={setSalseLista}
          salseLista={salseLista}
        />


        <div className={style.expandDettagli} onClick={() => setDettagliOpen((prevState) => !prevState)}>
          <BiChevronDown /> Personalizzami
        </div>
      </div>}
    </>
  )
}

export default ItemCart