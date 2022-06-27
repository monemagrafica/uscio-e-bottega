import React from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';


function Dettagli({ salse, dettagli, immagine }) {
    const uid=uuidv4()
    console.log('uuid', uid);
    return (
        <div className={style.dettagli}>
            <div className={`${[style.wrapperDettagli, dettagli && style.dettagliOpen].join(' ')}`}>
            <div className={style.immagineDettagli}>
                <Image src={immagine} width={300} height={200} alt="immagine panino" />
            </div>
                {salse && <ul>
                    {salse.map((item) => {
                       
                        return (
                        <li key={item.stringValue}>
                          <form>
                              
                              <input type="checkbox" defaultChecked={true}  id={uid} name={item.stringValue} value={item.stringValue} />
                              <label htmlFor={uid}>
                              {item.stringValue}
                              </label><br></br>
                          </form>
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