import React, { useRef, useState, useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animateSearchPage } from '../../components/utils/animations'
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { fetchDataFromFirebase } from '../../firebase/utils'
import SearchList from '../../components/search/searchList'


function Search({ data }) {
  const router = useRouter()
  const inputRicerca = useRef()
  const [filtroRicerca, setFiltroRicerca] = useState([])

  const prodotti = data

  function risultatiRicerca(inputString) {

    const prodottiByNome = prodotti.filter((item) => {
      return item.name.toLowerCase().includes(inputString.toLowerCase()) ||
        item.ingredients.Formaggio?.toLowerCase().includes(inputString.toLowerCase()) ||
        item.ingredients.Insaccato?.toLowerCase().includes(inputString.toLowerCase()) ||
        item.ingredients.Salse?.some((item) => item.toLowerCase().includes(inputString.toLowerCase()))
    })
    setFiltroRicerca(inputString && prodottiByNome)

  }


  return (
    <motion.main className="search"

    >
      <div className="headerRicerca">
        <button className="close" onClick={() => router.back()}><BiArrowBack /></button> <h1>Ricerca</h1>
      </div>

      <div className='wrapper-search-field'>
        <h2 className="subSearch">Ricerca per nome o ingrediente</h2>

        <label htmlFor="search" >
          <input onChange={() => risultatiRicerca(inputRicerca.current.value)} ref={inputRicerca} type="text" className="searchInput" id="search" placeholder='cerca' />
        </label>
      </div>
      {(filtroRicerca.length > 0) && <div className="wrapperListaSearch">
        {filtroRicerca?.map((item) => {

          return (<SearchList
            key={item.name}
            data={item}
          />)

        })}
      </div>}
    </motion.main>
  )
}

export default Search

export const getServerSideProps = (async () => {
  const data = await fetchDataFromFirebase('panini')

  return { props: { data } }
}) 