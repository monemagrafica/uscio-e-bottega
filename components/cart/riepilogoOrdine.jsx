import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack, BiEuro } from 'react-icons/bi'
import { animateRiepilogo } from '../utils/animations'

import Image from 'next/image'

function RiepilogoOrdine({ openRiepilogo, setOpenRiepilogo, dati }) {

    const totale = dati.reduce((acc, item) => {

        return acc + (parseInt(item.price) * item.quantita)
    }, 0)

    return (
        <AnimatePresence>
            {openRiepilogo && <motion.div className={`${style.wrapperCart} ${style.riepilogo}`}
                variants={animateRiepilogo}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className={style.headerCart}><button className="close" onClick={() => setOpenRiepilogo(false)}><BiArrowBack /></button>
                    <h2>Riepilogo ordine</h2>
                </div>
                <ul className={style.wrapperItemriepilogo}>
                    {dati.map((item, index) => {

                        if (item.quantita > 0) return (
                            <li key={index}>
                                <div className={style.immagineRiepilogo}>
                                    <Image src={item.svg} width={100} height={100} alt="immagine panino" />
                                </div>
                                <div className={style.itemRiepilogo}>
                                    <h2>{item.name}</h2>
                                    <div><span>Quantita:</span>{item.quantita}</div>
                                    {item.salse && <div><span>Salse:</span><ul className={style.salseRiepilogo}>{item.salse.map((item) => <li key={item}>{item}</li>)}</ul> </div>}
                                    {item.note && <div><span>Note:</span> {item.note}</div>}
                                    {item.price && <div><span>Prezzo:</span> €{
                                        Number(item.price).toFixed(2)}
                                    </div>}
                                </div>
                            </li>)
                    })}
                </ul>
                <div className={style.totale}>
                    <h2>TOTALE:</h2>
                    <div className={style.prezzoTotale}>{Number(totale).toFixed(2)}<BiEuro /></div>
                </div>
                <button className={style.buttonOrdine} >Vai al pagamento</button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default RiepilogoOrdine