
import Image from 'next/image'
import { ShareContext } from '../../context/context';
import { useContext, useLayoutEffect } from 'react'
import ListaSpec from './listaSpec';
import UiLista from './uiLista';
import React, { useState, useRef } from 'react';
import style from './prodotti.module.scss'

function ListaPanini() {
    const share = useContext(ShareContext)
    const lista = useRef()
    const itemsLista = useRef([])
    itemsLista.current = []

    const [infoPanino, setInfoPanino] = useState(false)

    // funzione passata nella REF per creare un array con le ref di tutto il map
    function itemToRef(e) {
        if (e && !itemsLista.current.includes(e)) { itemsLista.current.push(e) }
    }

    function handleClickPanino(index) {
        window.scroll({
            top: itemsLista.current[index].offsetTop - (window.outerHeight / 2.5),
            left: 0,
            behavior: 'smooth'
        })
        setInfoPanino((prevIndex) => prevIndex === index ? false : index)
    }

    return (
        <div ref={lista} className={style.listaProdotti}>
            {share.prodotti.map((item, index) => {
                const datiPanino = item._document.data.value.mapValue.fields
                return (
                    <div ref={itemToRef} onClick={() => handleClickPanino(index)} className={style.wrapperSingolo} key={datiPanino.id.integerValue} >
                        {datiPanino.svg &&
                            <div className={style.immaginePanino} id={datiPanino.id.integerValue}>
                                <Image src={datiPanino.svg.stringValue} alt="test" width={200} height={120} layout="responsive" />
                            </div>}
                        <h2>{datiPanino.name.stringValue}</h2>
                        <ListaSpec item={datiPanino} />
                        {infoPanino === index && <UiLista data={datiPanino} />}
                    </div>)
            })
            }
        </div>
    );
}

export default ListaPanini;