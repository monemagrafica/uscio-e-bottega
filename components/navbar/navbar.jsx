import React, { useState, useEffect } from 'react'
import { BiMenu, BiSearchAlt } from 'react-icons/bi'
import { BsCart, BsCartFill } from 'react-icons/bs'
import Link from 'next/link'
import Empty from './empty'



/**
 * Componete che gestisce la navbar
 * @date 23/10/2023 - 15:54:10
 *
 * @param {*} setOpenCart (true/false) apre/chiude il carrello
 * @param {*} statoCarrello numero di panini nel carrello
 * @param {*} setOpenDrawer (true/false) apre/chiude il drawer
 * 
 */

function Navbar({ setOpenCart, statoCarrello, setOpenDrawer }) {

    const [animateC, setAnimateC] = useState(false)

    useEffect(() => {

        if (animateC) {
            setTimeout(() => setAnimateC(false), 2000)
        }

    }, [animateC]);

    const handleStatoCarrello = () => {
        if (statoCarrello) {
            setOpenCart((prevState) => !prevState)
        }
        setAnimateC(true)
    }


    return (
        <nav>
            <div className="trigger" onClick={() => setOpenDrawer((prev) => !prev)}>
                <div className="icon">
                    <BiMenu />
                </div>
            </div>
            <Link href="/search">
                <div className="search">
                    <div className="icon">
                        <BiSearchAlt />
                    </div>
                </div>
            </Link>
            <div className="cart" onClick={() => handleStatoCarrello()}>
                <div className="icon">
                    {statoCarrello ?
                        <>
                            <BsCartFill />
                            <div className="quantitaCart">{statoCarrello}</div>
                        </> :
                        <BsCart />
                    }

                </div>
                <Empty animateC={animateC} statoCarrello={statoCarrello} />
            </div>
        </nav>
    )
}

export default Navbar