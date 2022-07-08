import { ShareContext } from '../../context/context';
import { useContext } from 'react'
import React, { useState, useRef} from 'react';
import style from '../../pages/store/store.module.scss'
import ListaProdottiItem from './listaProdottiItem';
import LoaderImage from '../loader/loaderImage';


function ListaProdotti() {
    const lista = useRef()
    const data = useContext(ShareContext)
    const share = data.DataShare
    const [infoPanino, setInfoPanino] = useState(false)

    return (
      <> {(share.prodotti.length) ? <div ref={lista} className={style.listaProdotti}>
           
            {share.prodotti.map((item, index) => {
                const datiPanino = item._document.data.value.mapValue.fields
                return (
                    <ListaProdottiItem
                        item={item}
                        key={datiPanino.id.integerValue}
                        index={index}
                        setInfoPanino={setInfoPanino} 
                        infoPanino={infoPanino}
                        cart={share.cart}
                        addToCart={share.addToCart}
  
  
                        />)
            })
            }
        </div> : <LoaderImage />}</>
    )
}

export default ListaProdotti

