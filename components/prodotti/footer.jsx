import React,{useEffect} from 'react'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import { ToasterAggiuntoCart } from '../toaster/toaster'


function Footer({datiPanino, setSelezionePanino}) {
const [openToaster, setOpenToaster] = useState(false)

  function setCart (datiPanino) {
    setSelezionePanino({...datiPanino, quantita:1})
    setOpenToaster(true)
  
  }
    return (
        <footer className={style.footerScheda}>
             <div className={style.wrapSchedaNav}>
                <Link href={`/store`} scroll={false}>
                  <div className={style.backButton}><BiArrowBack /></div>
                </Link>
                <div
                  className={style.addToCart}
                  onClick={()=>setCart(datiPanino)}
                ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span></div>
              </div>
<ToasterAggiuntoCart />
        </footer>
    )
}

export default Footer