import React, { useState, useEffect } from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';


function Dettagli({ salse, dettagli, immagine, idPanino, setUpdate, update, note }) {

    const uid = uuidv4()


    const arrayFromSalse = salse && salse.map((item) => {
        return item.stringValue
    })

    const [arraySalseUpdate, setArraySalseUpdate] = useState([])


    console.log('salse', arrayFromSalse);
    useEffect(() => {
       if(arraySalseUpdate.length){ setUpdate({ ...update, salse: arraySalseUpdate, idPanino })}
    }, [arraySalseUpdate])

    function checkboxSalse(checked, salsa) {
        if (checked) {
            setArraySalseUpdate([...arraySalseUpdate, salsa])
        }
        else {
            if (arrayFromSalse.length) {
                const arrayFiltrato = arraySalseUpdate.filter((item) => {
                    if (item !== salsa) {
                        return item
                    }
                })
                setArraySalseUpdate(arrayFiltrato)
            }

        }

    }


    console.log('arraySalseUpdate', arraySalseUpdate);
    return (
        <div className={style.dettagli}>
            <div className={`${[style.wrapperDettagli, dettagli && style.dettagliOpen].join(' ')}`}>
                <div className={style.immagineDettagli}>
                    <Image src={immagine} width={500} height={300} alt="immagine panino" />
                </div>
                {salse && <ul>
                    {salse.map((item) => {

                        return (
                            <li key={item.stringValue}>
                                <form>
                                    <input
                                        type="checkbox"
                                        defaultChecked={true}
                                        id={`${uid}___${item.stringValue}`}
                                        name={item.stringValue}
                                        value={item.stringValue}
                                        onClick={(e) => checkboxSalse(e.target.checked, e.target.value)}
                                    />
                                    <label htmlFor={`${uid}___${item.stringValue}`}>
                                        {item.stringValue}
                                    </label><br></br>
                                </form>
                            </li>
                        )
                    })}
                </ul>}
                <div className={style.noteDettagli}>
                    <h3>note</h3>
                    <textarea onChange={(e) => setUpdate({ ...update, idPanino: idPanino, note: e.target.value })} defaultValue={note || ''} name="note" id="note" cols="30" rows="5"></textarea>
                </div>
            </div>


        </div>
    )
}

export default Dettagli