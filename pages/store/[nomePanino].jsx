import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
import { ShareContext } from '../../context/context';
import { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import style from './store.module.scss'
import {motion} from 'framer-motion'
function SchedaPanino() {
  const [datiContext, setDatiContext] = useState(false)
  const dati = useContext(ShareContext)

  useEffect(() => {

    if (dati.prodotti.length !== 0) setDatiContext(true)


  }, [dati])

  console.log();
  const router = useRouter()
  const slug = router.query.nomePanino
  let datiPanino = dati && dati.prodotti.filter((item) => item._document.data.value.mapValue.fields.slug.stringValue === slug)
  datiPanino = datiPanino && datiPanino[0]?._document.data.value.mapValue.fields
  const listaIngredienti = datiPanino && datiPanino.ingredients.mapValue.fields
  console.log(datiPanino)
  return (
    <Layout>
      {datiContext ? 
      <main>
        <div className={style.wrapperPanino}>
          <div className={style.wrapperImage}>
            <Image src={datiPanino.svg.stringValue} layout='responsive' width={290} height={200} alt={datiPanino.name.stringValue} />

          </div>

          <div className={style.wrapperInfo}>
            <h2>{datiPanino.name.stringValue}</h2>
            <div className={style.dati}>
              <h3>Ingredienti:</h3>
              <ul className={style.listaSpec}>
                {listaIngredienti['Tipologia panino'] &&
                  <li>
                    <Image src="/images/pane.svg" width={100} height={30} layout="fixed" alt="icona panino" /><span className={style.title}>{listaIngredienti['Tipologia panino'].stringValue}</span>
                  </li>}

                {listaIngredienti['Formaggio'] &&
                  <li> <Image src="/images/formaggio.svg" width={100} height={30} layout="fixed" alt="icona panino" /><span className={style.title}> {listaIngredienti['Formaggio'].stringValue}</span></li>}

                {listaIngredienti['Insaccato'] &&
                  <li> <Image src="/images/insaccati.svg" width={100} height={30} layout="fixed" alt="icona panino" /> <span className={style.title}>{listaIngredienti['Insaccato'].stringValue}</span></li>}
                {listaIngredienti['Verdure o guarnizioni'] &&
                  <ul className={style.listaSpec}>
                    {listaIngredienti['Verdure o guarnizioni'].arrayValue.values.map((item, index) => {
                      return (<li key={index}>
                        <span className={style.title}>{item.stringValue}</span>
                      </li>
                      )
                    })
                    }
                  </ul>}
              </ul>
              {listaIngredienti['Salse'] && <> <div className={style.headerSalse}>
                <Image src="/images/salsa.svg" width={50} height={50} layout="fixed" alt="icona panino" />
                <h3>Salse:</h3>
              </div>

                <ul className={style.listaSalse}>
                  {listaIngredienti['Salse'].arrayValue.values.map((item, index) => {
                    return (<li key={index}>
                      <span className={style.title}>{item.stringValue}</span>
                    </li>
                    )
                  })
                  }
                </ul></>}
            </div>
            <div
              className={style.addToCart}
            ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span></div>
          </div>
          <Link href="/store"><button>back</button></Link>
        </div>
      </main> : '...loading'}
    </Layout>
  )
}

export default SchedaPanino