import React from 'react'
import style from '../../pages/store/store.module.scss'



/**
 * Componente visualizzazione lista ingredienti
 * @date 23/10/2023 - 18:03:57
 *
 * @param {*} listaIngredienti
 * lista ingredienti
 */

function ListaSpec({ listaIngredienti }) {


    return (
        <div className={style.listaSpec}>
            <ul>
                {listaIngredienti['Tipologia panino'] && <li>{listaIngredienti['Tipologia panino']}</li>}
                {listaIngredienti['Formaggio'] && <li>{listaIngredienti['Formaggio']}</li>}
                {listaIngredienti['Insaccato'] && <li>{listaIngredienti['Insaccato']}</li>}
            </ul>
        </div>
    )
}

export default ListaSpec