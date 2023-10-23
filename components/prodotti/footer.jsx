import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import Plus1 from '../cart/plus1'
import { v4 as uuidv4 } from 'uuid';



/**
 * Componente footer scheda prodotto
 * @date 23/10/2023 - 18:00:40
 *
 * 
 * @param {*} datiPanino
 * dati del singolo prodotto
 * @param {*} newAddToCart
 * funzione per aggiungere il prodotto al carrello
 * @returns {*}
 */
function Footer({ datiPanino, newAddToCart }) {

  const [plusOne, setPlusOne] = useState(false)
  const idAddedPanino = uuidv4()

  return (
    <footer className={style.footerScheda}>
      <div className={style.wrapSchedaNav}>
        <Link href={`/store`} scroll={false}>
          <div className={style.backButton}><BiArrowBack /></div>
        </Link>
        <div
          className={style.addToCart}
          onClick={(e) => {
            setPlusOne(true);
            newAddToCart(datiPanino, idAddedPanino)
          }

          }
        ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span>
          <Plus1 plusOne={plusOne} setPlusOne={setPlusOne} />
        </div>
      </div>

    </footer>
  )
}

export default Footer