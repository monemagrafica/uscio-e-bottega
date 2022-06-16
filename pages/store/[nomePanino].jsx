import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ShareContext } from '../../context/context';
import Image from 'next/image'
import style from './store.module.scss'
import { motion } from 'framer-motion'



function SchedaPanino() {
  const [datiContext, setDatiContext] = useState(false)

  const router = useRouter()
  const context = useContext(ShareContext)
  console.log('context', context);

  useEffect(() => {

    if (router.query.nomePanino && context.prodotti.length) {
      const dati = context.prodotti.filter((item)=>item._document.data.value.mapValue.fields.slug.stringValue ===  router.query.nomePanino  )
      setDatiContext(dati)
    }
  }, [router, context])

console.log(datiContext);

const datiPanino =datiContext && datiContext[0]._document.data.value.mapValue.fields
const listaIngredienti = datiPanino && datiPanino.ingredients.mapValue.fields

 

  return (
    <>
          {datiPanino ?
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
                  </ul>
                  <h3>Verdure, salse e guarnizioni:</h3>
                  <div className={style.wrapperSpec}>
                    {listaIngredienti['Verdure o guarnizioni'] &&
                    <div>
                    <div className={style.headerGuarnizioni}>
                      <Image src="/images/verdura.svg" width={100} height={65} layout="fixed" alt="icona panino" />
                    
                    </div>
                    <ul className={style.listaSalse}>
                      {listaIngredienti['Verdure o guarnizioni'].arrayValue.values.map((item, index) => {
                        return (<li key={index}>
                          <span>{item.stringValue}</span>
                        </li>
                        )
                      })
                      }
                    </ul></div>}
                    {listaIngredienti['Salse'] && <div> <div className={style.headerSalse}>
                      <Image src="/images/salsa.svg" width={70} height={70} layout="fixed" alt="icona panino" />
                    
                    </div>
                      <ul className={style.listaSalse}>
                        {listaIngredienti['Salse'].arrayValue.values.map((item, index) => {
                          return (<li key={index}>
                            <span className={style.title}>{item.stringValue}</span>
                          </li>
                          )
                        })
                        }
                      </ul></div>}
                  </div>
                </div>
                <div
                  className={style.addToCart}
                ><div className={style.icon}>+</div> <span>Aggiungi al carrello</span></div>
              </div>
              <Link href="/store"><button>back</button></Link>
            </div>
          </main> : <p>loading</p>} 
 
    </>
  )
}



export default SchedaPanino