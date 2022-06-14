import React from 'react'
import style from './prodotti.module.scss'

function UiLista(data) {
  console.log(data);
  return (
    <div className={style.uiLista}>
      <div className={style.price}>{data.data.price.integerValue}.00€</div>
      <div className={style.info}>i</div>
      <div className={style.addToCart}>+</div>
    </div>
  )
}

export default UiLista