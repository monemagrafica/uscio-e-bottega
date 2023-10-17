import React, { useContext } from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'
import cartContext from '../../context/cart/cartContext'

function Dettagli({ salseLista, arrayFromSalse, dettagliOpen, immagine, idAddedPanino, noteCart }) {

    const { changeSalse, setNote } = useContext(cartContext)

    function checkboxSalse(checked, salsa) {

        if (!checked) {

            if (salseLista.length) {
                const arrayFiltrato = salseLista.filter((item) => {
                    if (item !== salsa) {
                        return item
                    }
                })

                changeSalse(idAddedPanino, arrayFiltrato)
            }
        }
        else {
            changeSalse(idAddedPanino, [...salseLista, salsa])
        }
    }



    return (
        <div className={style.dettagli}>
            <div className={`${[style.wrapperDettagli, dettagliOpen && style.dettagliOpen].join(' ')}`}>
                <div className={style.immagineDettagli}>
                    <Image src={immagine} width={500} height={300} alt="immagine panino" />
                </div>
                {arrayFromSalse && <ul>
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
                </ul>}
                <div className={style.noteDettagli}>
                    <h3>note</h3>
                    <textarea onChange={(e) => setNote(idAddedPanino, e.target.value)} defaultValue={noteCart} name="note" id="note" cols="30" rows="5"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Dettagli