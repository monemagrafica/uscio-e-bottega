import React from 'react'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
function Footer() {
    return (
        <footer className={style.footerScheda}>
             <div className={style.wrapSchedaNav}>
                <Link href={`/store`} scroll={false}>
                  <div className={style.backButton}><BiArrowBack /></div>
                </Link>
                <div
                  className={style.addToCart}
                ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span></div>
              </div>
        </footer>
    )
}

export default Footer