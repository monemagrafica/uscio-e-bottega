import React from 'react'
import style from './prodotti.module.scss'
function ListaSpec({ item }) {
    let listaIngredienti = item.ingredients.mapValue.fields

    return (
        <div className={style.listaSpec}>
            
            <ul>
                {listaIngredienti['Tipologia panino'] && <li>{listaIngredienti['Tipologia panino'].stringValue}</li>}
                {listaIngredienti['Formaggio'] && <li>{listaIngredienti['Formaggio'].stringValue}</li>}
                {listaIngredienti['Insaccato'] && <li>{listaIngredienti['Insaccato'].stringValue}</li>}
            </ul>
        </div>
    )
}

export default ListaSpec