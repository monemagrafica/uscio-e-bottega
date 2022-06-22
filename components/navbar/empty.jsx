import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {BiSad } from 'react-icons/bi'
function Empty({animateC, statoCarrello}) {
  return (
    <AnimatePresence>
    {(animateC && !statoCarrello) &&
        <motion.div className="empty-cart"
            initial={{ top: -150, rotate: 180 }}
            animate={{ top: 0, rotate:360, transition: { duration: 1.5, ease:'easeOut' } }}
            exit={{top:-150}}
        >
            <BiSad /> <span>Carrello vuoto e triste</span>
        </motion.div>}
</AnimatePresence>
  )
}

export default Empty