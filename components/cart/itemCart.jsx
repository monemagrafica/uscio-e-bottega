import React,{useState} from 'react'
import style from '../../pages/store/store.module.scss'
import Quantita from './quantita'
import Dettagli from './dettagli'
import { BiChevronDown } from 'react-icons/bi'
import Image from 'next/image'

function ItemCart({dati}) {


  const [dettagli, setDettagli] = useState(true)

  return (
<div className={style.wrapperItemCart}>
    <button className={style.note} onClick={() => setDettagli((prevState) => !prevState)}><BiChevronDown /></button>
    <div className={style.wrapperNomePanino} onClick={() => setDettagli((prevState) => !prevState)}>
        <Image src={dati.svg.stringValue} width={50} height={50} alt="immagine panino" />
        <h2>{dati.name.stringValue}</h2>
    </div>
    <Quantita />
    {<Dettagli dettagli={dettagli} salse={dati.ingredients.mapValue.fields.Salse?.arrayValue.values} />}
</div>
  )
}

export default ItemCart