import React from 'react'
import style from '../../pages/store/store.module.scss'
function ListaSpec({ item }) {
    let listaIngredienti = item.ingredients

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