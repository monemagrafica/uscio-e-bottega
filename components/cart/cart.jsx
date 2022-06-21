import React,{useState} from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { animateCart } from '../animations'
import Quantita from './quantita'
import Dettagli from './dettagli'
import {BiChevronDown,BiArrowBack } from 'react-icons/bi'

function Cart({ dati, openCart, setOpenCart }) {
    
    
    const [dettagli, setDettagli] = useState(false)

    return (
        <AnimatePresence>
           { (openCart && dati) && <motion.div className={style.wrapperCart}
                variants={animateCart}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className={style.headerCart}><button className={style.close} onClick={() => setOpenCart(false)}><BiArrowBack /></button> <h2>Il tuo carrello</h2></div>
                <div className={style.wrapperItemCart}>
                <button className={style.note} onClick={()=>setDettagli((prevState)=> !prevState)}><BiChevronDown /></button> 
                    <div className={style.wrapperNomePanino}>
                        <Image src={dati.svg.stringValue} width={50} height={50} alt="immagine panino" />
                        <h2>{dati.name.stringValue}</h2>
                    </div>
                  <Quantita qt={dati.quantita}/>
                  { <Dettagli dettagli={dettagli} salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values} />}
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Cart