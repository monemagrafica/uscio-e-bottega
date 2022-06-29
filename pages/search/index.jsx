import React, { useRef, useState, useContext } from 'react'
import Image from 'next/image'
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

  let dati = useContext(ShareContext)
  dati = dati.DataShare
  const prodotti = dati.prodotti
  console.log(prodotti);
  function risultatiRicerca(inputString) {

    const prodottiByNome = prodotti.filter((item) => {
      return item._document.data.value.mapValue.fields.name.stringValue.toLowerCase().includes(inputString.toLowerCase()) ||
        item._document.data.value.mapValue.fields.ingredients.mapValue.fields.Formaggio?.stringValue.toLowerCase().includes(inputString.toLowerCase()) ||
        item._document.data.value.mapValue.fields.ingredients.mapValue.fields.Insaccato?.stringValue.toLowerCase().includes(inputString.toLowerCase())
    })

    setFiltroRicerca(inputString && prodottiByNome)

  }

  return (
    <motion.main className="search"
      initial='initial'
      animate='animate'
      variants={animateSearchPage}
    >
      <div className="headerRicerca"><button className="close" onClick={() => router.back()}><BiArrowBack /></button> <h1>Ricerca</h1></div>
      <Image src="/images/search.svg" width={200} height={150} alt="search" />
      <h2 className="subSearch">Ricerca per nome o ingrediente</h2>
      <label htmlFor="search" >
        <input onChange={() => risultatiRicerca(inputRicerca.current.value)} ref={inputRicerca} type="text" className="searchInput" id="search" placeholder='cerca' />
      </label>
      {(filtroRicerca.length > 0) && <div className="wrapperListaSearch">
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