import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import Plus1 from '../cart/plus1'
import { v4 as uuidv4 } from 'uuid';

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