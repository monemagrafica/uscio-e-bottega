import React, { useState } from 'react'
import style from '../../pages/store/store.module.scss'
import { BiEuro } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { animateInfo, animatePrice, animateIcon } from '../utils/animations'
import Plus1 from '../cart/plus1'
import { v4 as uuidv4 } from 'uuid';
function UiLista({
  data,
  selectedPanino,
  index,
  cart,
  addToCart,

}) {


  const [plusOne, setPlusOne] = useState(false)
  const idAddedPanino = uuidv4()

  return (
    <>
      <AnimatePresence>
        {(selectedPanino === index) &&
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
              <span>{data.price}.00<BiEuro /></span>
            </motion.div>
            <Link href={{
              pathname: `/store/${data.slug}`,
              query: { id: data.id }
            }} scroll={false}>
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
              onClick={(e) => {
                addToCart(data, idAddedPanino);
                setPlusOne(true)
              }}
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