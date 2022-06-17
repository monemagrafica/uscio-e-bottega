import React from 'react'
import { useRouter } from 'next/router'
import { ShareContext } from '../../context/context';
import { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import style from './store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/prodotti/footer';

function SchedaPanino() {
  const [datiContext, setDatiContext] = useState(false)
  const dati = useContext(ShareContext)

  useEffect(() => {

    if (dati.prodotti.length !== 0) setDatiContext(true)

  }, [dati])

  const router = useRouter()
  const slug = router.query.nomePanino
  let datiPanino = datiContext && dati.prodotti.filter((item) => item._document.data.value.mapValue.fields.slug.stringValue === slug)
  datiPanino = datiPanino && datiPanino[0]?._document.data.value.mapValue.fields
  const listaIngredienti = datiPanino && datiPanino.ingredients.mapValue.fields
  console.log('dati', datiPanino)

const animateTitle = {
  initial:{opacity:0, top:20, scale:0.8, rotate:9},
  animate:{opacity:1, top:0, scale:1, rotate:-4, transition:{delay: 0.3}},
  exit:{opacity:0},
}


  return (

    <AnimatePresence>

      {datiPanino ?

      <>  <motion.main
      className={style.wrapperSchedaPanino}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
        >
          <div className={style.wrapperPanino}>
            <div className={style.wrapperImage}>
              <Image src={datiPanino.svg.stringValue} layout='responsive' width={290} height={200} alt={datiPanino.name.stringValue} />
            </div>
            <div className={style.wrapperInfo}>
              <motion.h2
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animateTitle}
              >{datiPanino.name.stringValue}</motion.h2>
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
                  {listaIngredienti['Salse'] && <div> 
                    <div className={style.headerSalse}>
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
 
            </div>
          </div>
        </motion.main> <Footer /></> : '...loading'}
        
    </AnimatePresence>
  )
}

export default SchedaPanino