import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import ListaSpec from './listaSpec';
import UiLista from './uiLista';
import style from '../../pages/store/store.module.scss'
import { motion } from 'framer-motion'
import { animateListItem } from '../animations';


function ListaProdottiItem({
    item,
    index,
    setInfoPanino,
    infoPanino,
    cart,
    addToCart,

}) {

    const datiPanino = item._document.data.value.mapValue.fields

    function handleClickPanino(index) {
        window.scroll({
            top: singoloPanino.current.offsetTop - (window.outerHeight / 3),
            left: 0,
            behavior: 'smooth'
        })
        setInfoPanino((prevIndex) => prevIndex === index ? false : index)
    }

    const singoloPanino = useRef()
    const [immagine, setImmagine] = useState()   

    useEffect(() => {
        if(datiPanino.svg.stringValue)setImmagine(datiPanino.svg.stringValue)
    },[datiPanino])

console.log('immagine',immagine);
    return (
        <motion.div
            ref={singoloPanino}
            onClick={() => handleClickPanino(index)}
            className={style.wrapperSingolo}
            variants={animateListItem}
            initial="initial"
            whileInView="animate"
        >
            <div>
                {datiPanino.svg &&
                    <div className={style.immaginePanino} id={datiPanino.id.integerValue}>

                        <Image src={datiPanino.svg.stringValue} alt="test" width={200} height={120} layout="responsive" />

                    </div>}
                <h2>{datiPanino.name.stringValue}</h2>
                <ListaSpec item={datiPanino} />
            </div>

            <UiLista
                infoPanino={infoPanino}
                index={index}
                data={datiPanino}
                cart={cart}
                addToCart={addToCart}


            />


        </motion.div>
    )
}

export default ListaProdottiItem