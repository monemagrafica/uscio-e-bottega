import { ShareContext } from '../../context/context';
import { useContext } from 'react'
import React, { useState, useRef } from 'react';
import style from './prodotti.module.scss'
import ListaProdottiItem from './listaProdottiItem';



function ListaProdotti() {
    const lista = useRef()
    const share = useContext(ShareContext)
    const [infoPanino, setInfoPanino] = useState(false)

    return (
        <div ref={lista} className={style.listaProdotti}>
           
            {share.prodotti.map((item, index) => {
                const datiPanino = item._document.data.value.mapValue.fields
                return (
                    <ListaProdottiItem
                        item={item}
                        key={datiPanino.id.integerValue}
                        index={index}
                        setInfoPanino={setInfoPanino} 
                        infoPanino={infoPanino}
                        />)
            })
            }
        </div>
    )
}

export default ListaProdotti

