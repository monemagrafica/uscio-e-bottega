import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiSad } from 'react-icons/bi'



/**
 * Componente per l'animazione del cart vuoto
 * @date 23/10/2023 - 15:57:24
 *
 * @param {*} param0.animateC true/false animazione carello vuoto
 * @param {*} param0.statoCarrello numero di panini nel carrello
 * 
 */

function Empty({ animateC, statoCarrello }) {
  return (
    <AnimatePresence>
      {(animateC && !statoCarrello) &&
        <motion.div className="empty-cart"
          initial={{ top: -150, rotate: 180 }}
          animate={{ top: 0, rotate: 360, transition: { duration: 1, ease: 'easeOut' } }}
          exit={{ top: -150 }}
        >
          <BiSad /> <span>Carrello vuoto e triste</span>
        </motion.div>}
    </AnimatePresence>
  )
}

export default Empty