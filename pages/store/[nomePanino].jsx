import React from 'react'
import { useRouter } from 'next/router'
import { fetchDataFromFirebase } from '../../firebase/utils'
import { ShareContext } from '../../context/context';
import { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import style from './store.module.scss'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Footer from '../../components/prodotti/footer';
import { BiEuro } from 'react-icons/bi'
import LoaderImage from '../../components/loader/loaderImage';
import cartContext from '../../context/cart/cartContext'

import {
  animateTitle,
  animatePrezzo,
  animateLista,
  animatePanino,
  animateOpacity
} from '../../components/utils/animations'

function SchedaPanino({ panino }) {



  const { addToCart, cart } = useContext(cartContext)



  const router = useRouter()


  let datiPanino = panino
  datiPanino = datiPanino && datiPanino[0]

  const listaIngredienti = datiPanino && datiPanino.ingredients

  const animationControls = useAnimation();

  async function sequence() {
    await animationControls.start({ opacity: 0 });
    await animationControls.start({ rotate: -360, opacity: 0 });
    await animationControls.start({ rotate: 0, opacity: 1 });
    await animationControls.start({ scale: 1 });
    animationControls.start({
      y: -5,
      transition: {
        ease: "easeInOut",
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }
  useEffect(() => {
    sequence();
  }, []);

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
                  <Image src={datiPanino.svg} layout='responsive' width={290} height={200} alt={datiPanino.name} />
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
                    {datiPanino.name}
                  </motion.h2>
                  <motion.div
                    className={style.prezzoScheda}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animatePrezzo}
                  >
                    {datiPanino.price},00<BiEuro />

                  </motion.div>
                  <motion.div
                    animate={animationControls}
                    className={style.piccante}>
                    {datiPanino.spicy ?
                      <Image src="/images/piccante.svg" width="30" height="31" alt="piccante" layout='fill' /> :
                      ''}</motion.div>
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
                          <span className={style.title}>{listaIngredienti['Tipologia panino']}</span>
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
                          <li><span className={style.title}> {listaIngredienti['Formaggio']}</span></li>}
                        {listaIngredienti['Insaccato'] &&
                          <li><span className={style.title}>{listaIngredienti['Insaccato']}</span></li>}
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
                          {listaIngredienti['Verdure o guarnizioni'].map((item) => {
                            return (<li key={item}>
                              <span>{item}</span>
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
                          {listaIngredienti['Salse'].map((item) => {
                            return (<li key={item}>
                              <span className={style.title}>{item}</span>
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
          <Footer
            datiPanino={datiPanino}
            newAddToCart={addToCart}


          />
        </> : <LoaderImage />}

    </AnimatePresence>
  )
}

export default SchedaPanino

export const getServerSideProps = (async (context) => {

  const data = await fetchDataFromFirebase('panini')
  const panino = data.filter((item) => {
    return item.id === context.query.id
  })

  return { props: { panino } }
}) 