import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { set } from 'react-hook-form'
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

function ItemCart({ dati, removeFromCart, setOpenCart }) {

  const arrayListaSalse = dati.ingredients.Salse
  const arrayFromSalse = arrayListaSalse ? arrayListaSalse.map((item) => {
    return item
  }) : []

  const [dettagliOpen, setDettagliOpen] = useState(false)
  const router = useRouter()

  function goToPanino(slug, id) {
    setOpenCart(false)
    router.push({
      pathname: `/store/${slug}`,
      query: { id: id },
    })
  }

  return (
    <>
      {dati && <div
        className={style.wrapperItemCart}>
        <div className={style.wrapDatiItem}>

          <div className={style.wrapperNomePanino} onClick={() => goToPanino(dati.slug, dati.id)} >

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