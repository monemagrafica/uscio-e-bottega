import React, { useContext } from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'
import cartContext from '../../context/cart/cartContext'



/**
 * Componente per la visualizzazione dei dettagli del panino
 * @date 23/10/2023 - 16:20:53
 *
 * @param {*} salseLista
 * array per le salse selezionate
 * @param {*} arrayFromSalse
 * array con le salse disponibili per prodotto
 * @param {*} dettagliOpen
 * stato per la visualizzazione dei dettagli
 * @param {*} immagine
 * immagine del panino
 * @param {*} idAddedPanino
 * id del panino aggiunto al carrello
 * @param {*} noteCart
 * note del panozzo
 * @function checkboxSalse
 * funzione per selezionare le salse: 
 * se il checkbox è selezionato aggiunge la salsa all'array salseLista, altrimenti 
 * filtra e rimuove la salsa dall'array salseLista
 * @var presenteInCart
 * se la salsa è presente nell'array salseLista
 * allora il checkbox è selezionato
 */

function Dettagli({ salseLista, arrayFromSalse, dettagliOpen, immagine, idAddedPanino, noteCart }) {

    const { changeSalse, setNote } = useContext(cartContext)


    function checkboxSalse(checked, salsa) {
        if (!checked) {
            console.log(checked, salsa, 'not checked')
            const arrayFiltrato = salseLista.filter((item) => {
                if (item !== salsa) {
                    return item
                }
            })
            changeSalse(idAddedPanino, [...arrayFiltrato])
        }
        else {
            changeSalse(idAddedPanino, [...salseLista, salsa])
        }
    }
    console.log(arrayFromSalse, 'arrayFromSalse')


    return (
        <div className={style.dettagli}>
            <div className={`${[style.wrapperDettagli, dettagliOpen && style.dettagliOpen].join(' ')}`}>
                {/*              <div className={style.immagineDettagli}>
                    <Image src={immagine} width={500} height={300} alt="immagine panino" />
                </div> */}
                {arrayFromSalse.length ?
                    <div className={style.wrapperSalse}>
                        <div className={style.titleSalse}>Seleziona le salse:</div>
                        <div className={style.boxSx} >
                            <Image src={'/images/salsa.svg'} width={45} height={35} alt="immagine panino" />
                        </div>
                        <div className={style.boxDx}>

                            <ul>
                                {arrayFromSalse.map((item) => {
                                    const presenteInCart = salseLista.includes(item)
                                    return (
                                        <li key={item}>
                                            <form>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={presenteInCart}
                                                    id={`${idAddedPanino}___${item}`}
                                                    name={item}
                                                    value={item}
                                                    onClick={(e) => checkboxSalse(e.target.checked, e.target.value)}
                                                />
                                                <label htmlFor={`${idAddedPanino}___${item}`}>
                                                    {item}
                                                </label><br></br>
                                            </form>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div> : null}
                <div className={style.noteDettagli}>
                    <h3>note</h3>
                    <textarea onChange={(e) => setNote(idAddedPanino, e.target.value)} defaultValue={noteCart} name="note" id="note" cols="30" rows="5"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Dettagli