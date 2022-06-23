import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiEuro } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { animateInfo, animatePrice, animateIcon } from '../animations'
import Plus1 from '../cart/plus1'

function UiLista({
  data,
  infoPanino,
  index,
  selezionePanini,
  setselezionePanini,
  setOpenToaster }) {

  function setCart(e, newDatiPanino) {
    e.stopPropagation();
    setselezionePanini([...selezionePanini, { ...newDatiPanino, quantita: 1 }])
    setOpenToaster(true)
    setPlusOne(true)
  }


  const [plusOne, setPlusOne] = useState(false)

  return (

    <>
      <AnimatePresence>{(infoPanino === index) &&
        <motion.div
          className={style.uiLista}
          variants={animateInfo}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className={style.price}
            variants={animatePrice}
            initial="initial"
            animate="animate"
          >
            <span>{data.price.integerValue}.00<BiEuro /></span>
          </motion.div>
          <Link href={`/store/${data.slug.stringValue}`} scroll={false}>
            <motion.div
              className={style.info}
              variants={animateIcon}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.3 }}
            >i
            </motion.div>
          </Link>
          <motion.div
            className={style.addToCart}
            variants={animateIcon}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={(e) => setCart(e, data)}
          >+
            <Plus1 plusOne={plusOne} setPlusOne={setPlusOne} />
          </motion.div>
        </motion.div>

      }

      </AnimatePresence>
    </>
  )
}

export default UiLista