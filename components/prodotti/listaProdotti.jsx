import { ShareContext } from '../../context/context';
import { useContext } from 'react'
import React, { useState, useRef } from 'react';
import style from '../../pages/store/store.module.scss'
import ListaProdottiItem from './listaProdottiItem'
import LoaderImage from '../loader/loaderImage'

function ListaProdotti({ prodotti }) {
    const lista = useRef()
    const data = useContext(ShareContext)
    const share = data.DataShare
    const [infoPanino, setInfoPanino] = useState(false)

    return (
        <> {(prodotti.length) ?
            <div ref={lista} className={style.listaProdotti}>

                {prodotti.map((item, index) => {
                    const datiPanino = item

                    return (
                        <>
                            <ListaProdottiItem
                                item={item}
                                key={datiPanino.id}
                                index={index}
                                setInfoPanino={setInfoPanino}
                                infoPanino={infoPanino}
                                cart={share.cart}
                                addToCart={share.addToCart} />
                        </>

                    )
                })
                }
            </div> : <LoaderImage />}</>
    )
}

export default ListaProdotti

