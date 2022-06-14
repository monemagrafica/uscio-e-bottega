
import Image from 'next/image'
import { ShareContext } from '../../context/context';
import { useContext, useLayoutEffect } from 'react'
import ListaSpec from './listaSpec';
import React, { useEffect, useState, useRef } from 'react';
import style from './prodotti.module.scss'

function ListaPanini() {
    const share = useContext(ShareContext)

    const [altezza, setAltezza] = useState()
    const lista = useRef()
    const itemsLista = useRef([])
    itemsLista.current = []
    

    useEffect(() => {
        lista.current.scrollTop = altezza
    
    }, [altezza])


    function handleClickPanino(index) {

     window.scroll({
        top: itemsLista.current[index].offsetTop - (window.outerHeight / 2.5),
        left: 0,
        behavior: 'smooth'
      })  
    }


function itemToRef (e){
if(e && !itemsLista.current.includes(e)){itemsLista.current.push(e)}
//console.log(itemsLista.current);
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
                    </div>)
            })
            }
        </div>
    );
}

export default ListaPanini;