import React, { useRef } from 'react'
import Image from 'next/image'
import ListaSpec from './listaSpec';
import UiLista from './uiLista';
import style from '../../pages/store/store.module.scss'
import { motion } from 'framer-motion'
import { animateListItem } from '../utils/animations';



/**
 * Componente per la visualizzazione di un singolo panino nella lista
 * @date 23/10/2023 - 18:02:16
 *
 * 
 * @param {*} item
 * dati singolo prodotto
 * @param {*} index
 * indice prodotto
 * @param {*} setSelectedPanino
 * funzione per settare con l'index il panino selezionato
 * @param {*} selectedPanino
 * indice panino selezionato
 * @param {*} cart
 * dati carrello
 * @param {*} addToCart
 * funzione per aggiungere un panino al carrello
 * @returns {*}
 */

function ListaProdottiItem({
    item,
    index,
    setSelectedPanino,
    selectedPanino,
    cart,
    addToCart,

}) {

    const datiPanino = item
    console.log(datiPanino, 'datiPanino')
    function handleClickPanino(index) {
        window.scroll({
            top: singoloPanino.current.offsetTop - (window.outerHeight / 3),
            left: 0,
            behavior: 'smooth'
        })
        setSelectedPanino((prevIndex) => prevIndex === index ? false : index)
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
            <div>
                {datiPanino.svg ?
                    <div className={style.immaginePanino} id={datiPanino.id.integerValue}>
                        <Image
                            src={datiPanino.svg}
                            alt="test"
                            width={200}
                            height={120}
                            layout="responsive"
                        />
                    </div> : <Image
                        src='/images/placeholderpanino.jpg'
                        alt="test"
                        width={120}
                        height={120}
                        layout="fixed"
                    />}

                <h2>{datiPanino.name}</h2>

                <ListaSpec listaIngredienti={datiPanino.ingredients} />
            </div>

            <UiLista
                selectedPanino={selectedPanino}
                index={index}
                data={datiPanino}
                cart={cart}
                addToCart={addToCart}


            />


        </motion.div>
    )
}

export default ListaProdottiItem