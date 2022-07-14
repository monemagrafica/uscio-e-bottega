import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import style from '../../pages/store/store.module.scss'
import { BiArrowBack, BiEuro } from 'react-icons/bi'
import { animateRiepilogo } from '../animations'

import Image from 'next/image'

function RiepilogoOrdine({ openRiepilogo, setOpenRiepilogo, dati }) {
const totale = dati.reduce((acc, item)=>{
   
    return acc+(parseInt(item.price.integerValue)*item.quantita)},0)
console.log(totale);
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
                        console.log('price', parseInt(item.price.integerValue)+2);
                        if (item.quantita > 0) return (
                            <li key={index}>
                                <div className={style.immagineRiepilogo}>
                                    <Image src={item.svg.stringValue} width={100} height={100} alt="immagine panino" />
                                </div>
                                <div className={style.itemRiepilogo}>
                                    <h2>{item.name.stringValue}</h2>
                                    <div><span>Quantita:</span>{item.quantita}</div>
                                    {item.salse&&<div><span>Salse:</span><ul className={style.salseRiepilogo}>{item.salse.map((item)=> <li key={item}>{item}</li>)}</ul> </div>}
                                    {item.note&&<div><span>Note:</span> {item.note}</div>}
                                    {item.price&&<div><span>Prezzo:</span> €{item.price.integerValue}</div>}
                                </div>
                            </li>)
                    })}
                </ul>
                <div className={style.totale}>
                    <h2>TOTALE:</h2>
                    <div className={style.prezzoTotale}>{totale}<BiEuro /></div>
                </div>
                <button className={style.buttonOrdine} >Vai al pagamento</button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default RiepilogoOrdine