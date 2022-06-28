import React, { useRef, useState, useContext } from 'react'
import style from './search.module.scss'
import { motion } from 'framer-motion'
import { animateSearchPage } from '../../components/animations'
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { ShareContext } from '../../context/context'
import SearchList from '../../components/search/searchList'


function Search() {
  const router = useRouter()
  const inputRicerca = useRef()
  const [filtroRicerca, setFiltroRicerca] = useState([])

  const dati = useContext(ShareContext)
  const prodotti = dati.prodotti
console.log(prodotti);
  function risultatiRicerca(inputString) {
    
    const prodottiByNome = prodotti.filter((item) =>{ 
      return item._document.data.value.mapValue.fields.name.stringValue.toLowerCase().includes(inputString.toLowerCase()) ||
             item._document.data.value.mapValue.fields.ingredients.mapValue.fields.Formaggio?.stringValue.toLowerCase().includes(inputString.toLowerCase()) ||
             item._document.data.value.mapValue.fields.ingredients.mapValue.fields.Insaccato?.stringValue.toLowerCase().includes(inputString.toLowerCase())
    })
    
    setFiltroRicerca(inputString && prodottiByNome)

  }

  return (
    <motion.main className={style.search}
      initial='initial'
      animate='animate'
      variants={animateSearchPage}
    >
      <div className={style.headerRicerca}><button className="close" onClick={() => router.back()}><BiArrowBack /></button> <h1>Ricerca</h1></div>
      <h2 className={style.subSearch}>Ricerca per nome o ingrediente</h2>
      <label htmlFor="search" >
        <input onChange={() => risultatiRicerca(inputRicerca.current.value)} ref={inputRicerca} type="text" className={style.searchInput} id="search" placeholder='cerca' />
      </label>
      {(filtroRicerca.length > 0) && <div className={style.wrapperListaSearch}>
        {filtroRicerca?.map((item) => {

          return (<SearchList
            key={item._document.data.value.mapValue.fields.name.stringValue}
            data={item._document.data.value.mapValue.fields}
          />)

        })}
      </div>}
    </motion.main>
  )
}

export default Search