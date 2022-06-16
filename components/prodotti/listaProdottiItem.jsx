import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ListaSpec from './listaSpec';
import UiLista from './uiLista';
import style from './prodotti.module.scss'
import {motion} from 'framer-motion'



function ListaProdottiItem({ item, index, setInfoPanino, infoPanino }) {


    const animateListItem = {
        initial:{
            opacity: 0,
            top: 20
        },
        animate:{
            opacity:1,
            top:0
        }

    }



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
    return (
        <motion.div
            ref={singoloPanino}
            onClick={() => handleClickPanino(index)}
            className={style.wrapperSingolo}
            
            variants={animateListItem}
            initial="initial"
            whileInView="animate"
      
        >
            {datiPanino.svg &&
                <div className={style.immaginePanino} id={datiPanino.id.integerValue}>
                    <Image src={datiPanino.svg.stringValue} alt="test" width={200} height={120} layout="responsive" />
                </div>}
            <h2>{datiPanino.name.stringValue}</h2>
            <ListaSpec item={datiPanino} />
            {infoPanino === index && <UiLista data={datiPanino} />}
        </motion.div>
    )
}

export default ListaProdottiItem