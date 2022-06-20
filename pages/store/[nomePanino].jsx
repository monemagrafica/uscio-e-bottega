import React from 'react'
import { useRouter } from 'next/router'
import { ShareContext } from '../../context/context';
import { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import style from './store.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/prodotti/footer';
import { BiEuro } from 'react-icons/bi'


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
    initial: { opacity: 0, top: 20, scale: 0.8, rotate: 9 },
    animate: { opacity: 1, top: 0, scale: 1, rotate: -4, transition: { delay: 0.7 } },
    exit: { opacity: 0 },
  }
  const animatePrezzo = {
    initial: { opacity: 0, top: 20, rotate: -150 },
    animate: { opacity: 1, top: 0, rotate: 10, transition: { delay: 1 } },
    exit: { opacity: 0 },
  }
  const animateLista = {
    initial: { opacity: 0, top: 20, scale: 0.8 },
    animate: { opacity: 1, top: 0, scale: 1 },
    exit: { opacity: 0 },
  }
  const animatePanino = {
    initial: { opacity: 0, top: '30vh', scale: 0.5 },
    animate: { opacity: 1, top: ['30vh', '25vh', '0vh'], scale: 1,  transition: { duration:.7, ease:'easeOut' } },
    exit: { opacity: 0 },
  }
  const animateOpacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1.3 } },
    exit: { opacity: 0 }
  }
  return (

    <AnimatePresence>

      {datiPanino ?
        <>
          <motion.main
            className={style.wrapperSchedaPanino}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={style.wrapperPanino}>
              <div
                className={style.wrapperImage}
              >
                <motion.div className={style.immaginePaninoScheda}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={animatePanino}
                >
                  <Image src={datiPanino.svg.stringValue} layout='responsive' width={290} height={200} alt={datiPanino.name.stringValue} />
                </motion.div>
              </div>
              <div className={style.wrapperInfo}>
                <div className={style.headerScheda}>
                  <motion.h2
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animateTitle}
                  >
                    {datiPanino.name.stringValue}
                  </motion.h2>
                  <motion.div
                    className={style.prezzoScheda}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animatePrezzo}
                  >
                    {datiPanino.price.integerValue},00<BiEuro />
                  </motion.div>
                </div>
                <motion.div className={style.dati}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={animateOpacity}
                >
                  <h3>Ingredienti:</h3>
                  <motion.div className={style.wrapperListaSpec}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 1.5, ease: 'easeOut' }}
                    variants={animateLista}
                  >
                    <div className={style.immagineIngredienti}>
                      <Image src="/images/pane.svg" width={80} height={52} layout="fixed" alt="icona panino" />
                    </div>
                    <ul className={style.listaSpec}>
                      {listaIngredienti['Tipologia panino'] &&
                        <li>
                          <span className={style.title}>{listaIngredienti['Tipologia panino'].stringValue}</span>
                        </li>}
                    </ul>
                  </motion.div>
                  {(listaIngredienti['Insaccato'] || listaIngredienti['Formaggio']) &&

                    <motion.div className={style.wrapperListaSpec}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ delay: 1.8, ease: 'easeOut' }}
                      variants={animateLista}
                    >
                      <div className={style.immagineIngredienti}>
                        <Image src="/images/ingredienti.svg" width={75} height={65} layout="fixed" alt="icona panino" />
                      </div>

                      <ul className={style.listaSpec}>
                        {listaIngredienti['Formaggio'] &&
                          <li><span className={style.title}> {listaIngredienti['Formaggio'].stringValue}</span></li>}
                        {listaIngredienti['Insaccato'] &&
                          <li><span className={style.title}>{listaIngredienti['Insaccato'].stringValue}</span></li>}
                      </ul>
                    </motion.div>}

                  {(listaIngredienti['Verdure o guarnizioni'] || listaIngredienti['Salse'])
                    && <h3>Verdure o guarnizioni:</h3>}

                  <div className={style.wrapperSpec}>
                    {listaIngredienti['Verdure o guarnizioni'] &&
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ delay: 1.9, ease: 'easeOut' }}
                        variants={animateLista}
                      >
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
                        </ul></motion.div>}
                    {listaIngredienti['Salse'] &&
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ delay: 2.2, ease: 'easeOut' }}
                        variants={animateLista}
                      >
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
                        </ul></motion.div>}
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.main>
          <Footer />
        </> : '...loading'}

    </AnimatePresence>
  )
}

export default SchedaPanino