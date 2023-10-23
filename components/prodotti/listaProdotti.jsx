
import { useContext } from 'react'
import React, { useState, useRef } from 'react';
import style from '../../pages/store/store.module.scss'
import ListaProdottiItem from './listaProdottiItem'
import LoaderImage from '../loader/loaderImage'
import cartContext from '../../context/cart/cartContext';




/**
 * Componente lista prodotti
 * @date 23/10/2023 - 18:01:47
 *
 * 
 * @param {*} prodotti
 * array prodotti
 * 
 */
function ListaProdotti({ prodotti }) {
    const lista = useRef()
    const { cart, addToCart } = useContext(cartContext)
    const [selectedPanino, setSelectedPanino] = useState(false)

    return (
        <> {(prodotti.length) ?
            <div ref={lista} className={style.listaProdotti}>

                {prodotti.map((item, index) => {
                    const datiPanino = item

                    return (

                        <ListaProdottiItem
                            item={item}
                            key={datiPanino.id}
                            index={index}
                            setSelectedPanino={setSelectedPanino}
                            selectedPanino={selectedPanino}
                            cart={cart}
                            addToCart={addToCart} />


                    )
                })
                }
            </div> : <LoaderImage />}</>
    )
}

export default ListaProdotti

