import React, { useState, useEffect } from 'react'
import { BiMenu, BiSearchAlt, BiCart, BiSad } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar({ setOpenCart, statoCarrello }) {

    const [animateC, setAnimateC] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            if (animateC) {
                setTimeout(() => setAnimateC(false), 1000)
            }
        }, 2000); 


    }, [animateC]);

    const handleStatoCarrello = () => {
        setOpenCart((prevState) => !prevState)
        setAnimateC(true)
    }

    return (
        <nav>
            <div className="trigger">
                <div className="icon">
                    <BiMenu />
                </div>
            </div>
            <div className="search">
                <div className="icon">
                    <BiSearchAlt />
                </div>
            </div>
            <div className="cart" onClick={() => handleStatoCarrello()}>
                <div className="icon">
                    <BiCart />
                </div>
                <AnimatePresence>
                    {(animateC && !statoCarrello) &&
                        <motion.div className="empty-cart"
                            initial={{ top: -150, rotate: 180 }}
                            animate={{ top: 0, rotate:360, transition: { duration: 1, ease:'easeOut' } }}
                            exit={{top:-150}}
                        >
                            <BiSad /> <span>Carrello vuoto e triste</span>
                        </motion.div>}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar