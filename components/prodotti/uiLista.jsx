import React from 'react'
import style from '../../pages/store/store.module.scss'
import { BiEuro } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Link from 'next/link'

function UiLista(data) {


const datiPerScheda = JSON.stringify(data.data)


console.log(data);
  const animateInfo = {

    initial: {
      transform: 'scale(0.8)',
      opacity: 0
    },
    animate: {
      transform: 'scale(1)',
      opacity: 1,
      transition: { type: "spring", stiffness: 60 }
    }
  }
  const animatePrice = {
    initial: { opacity: 0, top: -20 },
    animate: { opacity: 1, top: 0, transition: { delay: 0.3 } }
  }
  const animateIcon = {
    initial: { opacity: 0, top: 20 },
    animate: { opacity: 1, top: 0 }
  }
  return (
    <motion.div
      className={style.uiLista}
      variants={animateInfo}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={style.price}
        variants={animatePrice}
        initial="initial"
        animate="animate"
      >
        <span>{data.data.price.integerValue}.00<BiEuro /></span>
      </motion.div>
      <Link href={`/store/${data.data.slug.stringValue}`} scroll={false}>
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
      >+</motion.div>
    </motion.div>
  )
}

export default UiLista