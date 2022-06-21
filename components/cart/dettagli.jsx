import React from 'react'
import style from '../../pages/store/store.module.scss'
import { animateDettagli } from '../animations'

function Dettagli({ salse, dettagli }) {
    return (
        <div className={style.dettagli}>

            <div className={`${[style.wrapperDettagli, dettagli && style.dettagliOpen].join(' ')}`}>
                {salse && <ul>
                    {salse.map((item, index) => {
                        return (<li key={index}>
                            <input type="checkbox" id={item.stringValue} name={item.stringValue} value={item.stringValue} />
                            <label htmlFor={item.stringValue}>{item.stringValue}</label><br></br>
                        </li>)
                    })}
                </ul>}
                <div className={style.noteDettagli}>
                    <h3>note</h3>
                    <textarea name="note" id="note" cols="30" rows="5"></textarea>
                </div>
            </div>


        </div>
    )
}

export default Dettagli