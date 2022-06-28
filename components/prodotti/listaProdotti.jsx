import { ShareContext } from '../../context/context';
import { useContext } from 'react'
import React, { useState, useRef, Suspense, lazy } from 'react';
import style from '../../pages/store/store.module.scss'
import ListaProdottiItem from './listaProdottiItem';
import LoaderImage from '../loader/loaderImage';


function ListaProdotti() {
    const lista = useRef()
    const share = useContext(ShareContext)
    const [infoPanino, setInfoPanino] = useState(false)
console.log('share',share.prodotti);
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
                        selezionePanini={share.selezionePanini}
                        setselezionePanini={share.setselezionePanini}
                        openToaster={share.openToaster}
                        setOpenToaster={share.setOpenToaster}
                        />)
            })
            }
        </div> : <LoaderImage />}</>
    )
}

export default ListaProdotti

