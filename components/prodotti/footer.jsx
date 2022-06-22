import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import  ToasterAggiuntoCart  from '../toaster/toaster'
import Plus1 from '../cart/plus1'


function Footer({ datiPanino, setSelezionePanino }) {
  const [openToaster, setOpenToaster] = useState(false)
  const [plusOne, setPlusOne] = useState(false)


  function setCart(newDatiPanino) { 
    setSelezionePanino({ ...newDatiPanino, quantita: newDatiPanino.quantita++ })
    setOpenToaster(true)
    setPlusOne(true)
  }
  
  
  return (
    <footer className={style.footerScheda}>
      <div className={style.wrapSchedaNav}>
        <Link href={`/store`} scroll={false}>
          <div className={style.backButton}><BiArrowBack /></div>
        </Link>
        <div
          className={style.addToCart}
          onClick={() => setCart(datiPanino)}
        ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span>

          <Plus1 plusOne={plusOne}  setPlusOne={setPlusOne} />
        </div>
      </div>
      <ToasterAggiuntoCart openToaster={openToaster} />
    </footer>
  )
}

export default Footer