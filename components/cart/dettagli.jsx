import React,{useState} from 'react'
import style from '../../pages/store/store.module.scss'
import Image from 'next/image'



function Dettagli({ listaSalse ,salse, dettagli, immagine, idAddedPanino, setUpdate, update, note }) {

    const [arraySalseUpdate, setArraySalseUpdate ] = useState(listaSalse)
    const [check, setCheck] = useState(false)

    function checkboxSalse(checked, salsa) {
        console.log('checked', checked);

        if (!checked) {
              if (arraySalseUpdate.length) {
                const arrayFiltrato = arraySalseUpdate.filter((item) => {
                    if (item !== salsa) {
                        return item
                    }
                })
                setArraySalseUpdate(arrayFiltrato)
                console.log('salse', arraySalseUpdate);
                setUpdate({ ...update, idAddedPanino: idAddedPanino, salse: arraySalseUpdate })
            }
        }
        else {
           setArraySalseUpdate([...arraySalseUpdate, salsa])
           setUpdate({ ...update, idAddedPanino: idAddedPanino, salse: arraySalseUpdate })
        }
    }



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
                                        id={`${idAddedPanino}___${item.stringValue}`}
                                        name={item.stringValue.stringValue}
                                        value={item.stringValue}
                                        onClick={(e) => checkboxSalse(e.target.checked, e.target.value)}
                                    />
                                    <label htmlFor={`${idAddedPanino}___${item.stringValue}`}>
                                        {item.stringValue}
                                    </label><br></br>
                                </form>
                            </li>
                        )
                    })}
                </ul>}
                <div className={style.noteDettagli}>
                    <h3>note</h3>
                    <textarea onChange={(e) => setUpdate({ ...update, idAddedPanino: idAddedPanino, note: e.target.value })} defaultValue={note || ''} name="note" id="note" cols="30" rows="5"></textarea>
                </div>
            </div>


        </div>
    )
}

export default Dettagli