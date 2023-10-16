import React, { useRef } from 'react'
import Image from 'next/image'
import ListaSpec from './listaSpec';
import UiLista from './uiLista';
import style from '../../pages/store/store.module.scss'
import { motion } from 'framer-motion'
import { animateListItem } from '../utils/animations';


function ListaProdottiItem({
    item,
    index,
    setInfoPanino,
    infoPanino,
    cart,
    addToCart,

}) {

    const datiPanino = item

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